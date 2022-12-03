import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../movie-card/MovieCard';
import Slider from "react-slick";
import './movie-listing.scss'
import { Settings } from '../../common/slider-settings';
import { useNavigate } from 'react-router-dom';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const navigate = useNavigate();

    let renderMovies, renderShows = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return (
                <MovieCard key={index} data={movie} />
            )
        })
    ) : navigate('/page-not-found', { state: movies.Error });

    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => {
            return (
                <MovieCard key={index} data={show} />
            )
        })
    ) : navigate('/page-not-found', { state: shows.Error });

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderMovies}
                    </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderShows}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing