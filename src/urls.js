import { Api_Key } from "./Constants/Constants";

export const Originals = `/discover/tv?api_key=${Api_Key}&with_networks=213`
export const Action = `/discover/movie?api_key=${Api_Key}&with_genres=28`
export const Trending = `/trending/all/week?api_key=${Api_Key}&language=en-US`
export const Comedy = `/discover/movie?api_key=${Api_Key}&with_genres=35`
export const Horror = `/discover/movie?api_key=${Api_Key}&with_genres=27`
export const Romance = `/discover/movie?api_key=${Api_Key}&with_genres=10749`