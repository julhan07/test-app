import axios from "axios"
import {  
    API_KEY,
    API_URL_DEV
} from "../config/api"




export const GetMovies = (version = 3, type, params = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_URL_DEV}/${version}/movie/${type}`,
            params: {
                api_key: API_KEY,
                ...params,
                limit:10
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


export const GetMoviesQ= (version = 3, params = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_URL_DEV}/${version}/search/movie`,
            params: {
                api_key: API_KEY,
                ...params
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}



export const GetMovieById = (version = 3, id = 0 ) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_URL_DEV}/${version}/movie/${id}`,
            params: {
                api_key: API_KEY
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
