import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../movie-card/MovieCard';
import Slider from "react-slick";
import './movie-listing.scss'
import { Settings } from '../../common/slider-settings';
import PageNotFound from '../page-not-found/PageNotFound';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies, renderShows = "";

    renderMovies = movies.Response === "True" && (
        movies.Search.map((movie, index) => {
            return (
                <MovieCard key={index} data={movie} />
            )
        })
    );

    renderShows = shows.Response === "True" && (
        shows.Search.map((show, index) => {
            return (
                <MovieCard key={index} data={show} />
            )
        })
    );

    return (
        <div className="movie-wrapper">
            {movies.Response === 'True' ? <>
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
            </> : <PageNotFound movieNotFound='Yes' />}
        </div>
    )
}

export default MovieListing