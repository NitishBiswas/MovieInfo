import React from 'react'
import { useNavigate } from 'react-router-dom'
import './movie-card.scss'

const MovieCard = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className='card-item' onClick={() => navigate(`/movie/${data.imdbID}`)}>
            <div className="card-inner">
                <div className="card-top">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard