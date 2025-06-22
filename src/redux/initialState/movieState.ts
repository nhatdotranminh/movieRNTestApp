import { Movie, MovieDetail } from '../../types';

interface MovieState {
  list: Movie[];
  detail: MovieDetail | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  detailStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
  totalPages: number;
  canLoadMore: boolean;
  category: string;
  sortBy: string;
  keywordId?: number;
}

const movieInitialState: MovieState = {
  list: [],
  detail: null,
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  page: 1,
  totalPages: 0,
  canLoadMore: true,
  category: 'now_playing',
  sortBy: '',
  keywordId: undefined,
};

export { movieInitialState };

