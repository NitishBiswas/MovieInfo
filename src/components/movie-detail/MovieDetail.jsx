import React, { useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowsDetail, getMovieOrShowDetail, removeSelectedMovieOrShow } from '../../features/movies/movieSlice'
import './movie-detail.scss'

const MovieDetail = () => {
    const { imdbID } = useParams();

    const dispatch = useDispatch();
    const detail = useSelector(getMovieOrShowDetail)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowsDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        };
    }, [imdbID, dispatch])
    return (
        <div className="movie-section">
            {Object.keys(detail).length === 0 ? (
                <div>
                    <RotatingLines
                        strokeColor="#79b8f3"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            ) : (
                <div className='detail'>
                    <div className="section-left">
                        <div className="movie-title">{detail.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {detail.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {detail.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {detail.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {detail.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{detail.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{detail.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{detail.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{detail.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{detail.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{detail.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={detail.Poster} alt={detail.Title} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetail