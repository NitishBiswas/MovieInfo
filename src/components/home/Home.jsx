import React from 'react'
import MovieListing from '../movie-listing/MovieListing'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useLocation } from 'react-router-dom';


const Home = () => {

    const dispatch = useDispatch();
    const state = useLocation().state;
    const searchMovies = state !== null ? state : "Harry";
    const searchShows = state !== null ? state : "Friends";
    useEffect(() => {
        dispatch(fetchAsyncMovies(searchMovies));
        dispatch(fetchAsyncShows(searchShows));
    }, [searchMovies, dispatch, searchShows])

    return (
        <>
            <MovieListing />
        </>
    )
}

export default Home