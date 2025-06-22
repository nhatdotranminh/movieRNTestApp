export interface Genre {
    id: number;
    name: string;
}

export interface Crew {
    job: string;
    name: string;
    original_name: string;
}

export interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    original_name: string;
}

export interface Credits {
    cast: Cast[];
    crew: Crew[];
}

export interface ReleaseDate {
    certification: string;
    release_date: string;
}

export interface ReleaseDateResult {
    iso_3166_1: string;
    release_dates: ReleaseDate[];
}

export interface ReleaseDates {
    results: ReleaseDateResult[];
}

export interface Movie {
    id: number;
    title: string;
    release_dates: ReleaseDates;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
}

