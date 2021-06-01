import axios from '../../Axios'
import Youtube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import "./RowPoster.css"
import { Api_Key, imageUrl } from '../../Constants/Constants'

function RowPoster(props) {
    const [Movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then(Response => {
            console.log(Response.data);
            setMovie(Response.data.results);
        }).catch(err => {
            alert('Network Error');
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        margin: 0,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
        },
      }; 
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then(Response => {
            if (Response.data.results.length !== 0){
                setUrlId(Response.data.results[0]);
            }else{
                console.log("The Array is Null");
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {Movie.map ((obj) => 
                <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPoster
