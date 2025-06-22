import axios from "axios"
import { baseURL } from "../config/AppConfig"
import { generateParams } from "../helper/apiHelper"

export class MoviesServices {
    static getMoviesList = (category: string, sortBy: string, page: number, withKeywords?: number) => {
        const params: { [key: string]: string | number } = {
            language: 'en-US',
            page,
        }
        if (category === 'now_playing') {
            // Asume logic now playing is release date in the last 30 days
            const today = new Date();
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(today.getDate() - 30);
            params['primary_release_date.gte'] = thirtyDaysAgo.toISOString().split('T')[0];
            params['primary_release_date.lte'] = today.toISOString().split('T')[0];
            params.sort_by = 'release_date.desc'
        }
        if (category === 'upcoming') {
            // Asume logic upcoming is release date in the next 30 days
            const today = new Date();
            params['primary_release_date.gte'] = today.toISOString().split('T')[0];
            params.sort_by = 'release_date.desc'
        }
        if (category === 'popular') {
            // Asume default logic return by discover is popular
            params.sort_by = 'popularity.desc'
        }
        if (sortBy) {
            params.sort_by = sortBy
        }
        if (withKeywords) {
            params.with_keywords = withKeywords;
        }
        let url = baseURL + `/discover/movie`
        url += `?${generateParams(params)}`
        return axios.get(url).then(response => response.data)
    }
    static getMovieDetails = (id: number) => {
        const url = baseURL + `/movie/${id}?language=en-US&append_to_response=release_dates`
        return axios.get(url).then(response => response.data)
    }
    static getMovieCredits = (id: number) => {
        const url = baseURL + `/movie/${id}/credits?language=en-US`
        return axios.get(url).then(response => response.data)
    }
    // Search movies from TMDB
    static searchMovies = (query: string, page: number = 1) => {
        const url = `${baseURL}/search/movie?language=en-US&query=${encodeURIComponent(query)}&page=${page}`;
        return axios.get(url).then(response => response.data);
    }
    // Serach keyword
    static searchKeyword = (query: string) => {
        const url = `${baseURL}/search/keyword?query=${encodeURIComponent(query)}`;
        return axios.get(url).then(response => response.data);
    }
}