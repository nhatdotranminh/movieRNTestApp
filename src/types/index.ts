export interface Genre {
    id: number;
    name: string;
}

export interface Crew {
    job: string;
    name: string;
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
}

export interface MovieDetail extends Movie {
    genres: Genre[];
    runtime: number;
    status: string;
    original_language: string;
    tagline: string;
    credits: { crew: Crew[] };
}
