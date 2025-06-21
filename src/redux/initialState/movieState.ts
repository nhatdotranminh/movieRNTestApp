
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

interface MovieState {
  list: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const movieInitialState: MovieState = {
  list: [],
  status: 'idle',
  error: null,
};

export { movieInitialState };

