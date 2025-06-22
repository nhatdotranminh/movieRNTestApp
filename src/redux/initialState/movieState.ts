import { Credits, Movie } from '../../types';

interface MovieState {
  list: Movie[];
  detail: any;
  credits: Credits | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  detailStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  creditsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
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
  detail: {},
  credits: null,
  status: 'idle',
  detailStatus: 'idle',
  creditsStatus: 'idle',
  error: null,
  page: 1,
  totalPages: 1,
  canLoadMore: true,
  category: 'now_playing',
  sortBy: '',
  keywordId: undefined,
};

export { movieInitialState };
