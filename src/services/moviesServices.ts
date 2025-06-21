import axios from "axios"
import { baseURL } from "../config/AppConfig"

export class MoviesServices {
    // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}
    static getMoviesList = () => {
        const url = baseURL + '/discover/movie'
        return axios.get(url).then(response => response.data)
    }

}