import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MoviesServices } from '../../services/moviesServices';
import { movieInitialState } from '../initialState/movieState';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, sortBy, page, searchTerms, keywordId }: { category: string, sortBy: string, page: number, searchTerms?: string, keywordId?: number }) => {
  let _keywordId = keywordId;
  if (searchTerms) {
    const keywordResult = await MoviesServices.searchKeyword(searchTerms);
    if (!keywordResult.results || keywordResult.results.length === 0) {
      return { results: [], page: 1, total_pages: 1, keywordId: null };
    }
    _keywordId = keywordResult.results[0].id
  }
  const response = await MoviesServices.getMoviesList(category, sortBy, page, _keywordId);
  return { ...response, keywordId: _keywordId };
});

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail', async (movieId: number) => {
  const response = await MoviesServices.getMovieDetails(movieId);
  return response;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: movieInitialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Movies List
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.page === 1 ? action.payload.results : [...state.list, ...action.payload.results];
        state.page = action.payload.page;
        state.keywordId = action.payload.keywordId;
        state.totalPages = action.payload.total_pages;
        state.canLoadMore = action.payload.page < action.payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      // Movie Detail
      .addCase(fetchMovieDetail.pending, (state) => {
        state.detailStatus = 'loading';
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.detail = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { setCategory, setSortBy, resetMovies } = movieSlice.actions;
export default movieSlice.reducer;
