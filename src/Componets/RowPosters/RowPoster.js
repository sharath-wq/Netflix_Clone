import axios from '../../Axios'
import React, { useEffect, useState } from 'react'
import "./RowPoster.css"
import { imageUrl } from '../../Constants/Constants'

function RowPoster(props) {
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then(Response => {
            console.log(Response.data);
            setMovie(Response.data.results);
        }).catch(err => {
            alert('Network Error');
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {Movie.map ((obj) => 
                <img className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
        </div>
    )
}

export default RowPoster
