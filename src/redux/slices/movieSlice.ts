import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MoviesServices } from '../../services/moviesServices';
import { Movie, movieInitialState } from '../initialState/movieState';

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await MoviesServices.getMoviesList();
  console.log(response);
  return response.data.results;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: movieInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default movieSlice.reducer;
