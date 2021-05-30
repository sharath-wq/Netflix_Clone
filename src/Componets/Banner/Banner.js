import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import {Api_Key, imageUrl} from '../../Constants/Constants'
import "./Banner.css"

function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${Api_Key}&language=en-US`).then((Response) =>{
            console.log(Response.data.results[0]);
            setMovie(Response.data.results[18]);
        })
    }, [])
    return (
        <div style={{backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})`}} className="banner">
            <div className="content">
                <h1 className="title">{Movie ? Movie.title: ""}</h1>
                <div className="banner_btn">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <h1 className="description">{Movie ? Movie.overview: ""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
