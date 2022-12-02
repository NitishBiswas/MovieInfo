/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import MovieListing from '../movie-listing/MovieListing'
import movieAPI from '../../common/apis/movieAPI';
import { APIKey, ID } from '../../common/apis/movieAPIkey';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {

    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const searchText = 'Harry'
        const movies = await movieAPI.get(`?i=${ID}&apikey=${APIKey}&s=${searchText}&type=movie`)
            .catch(err => console.log(err));
        dispatch(addMovies(movies.data))
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <>
            <div className='banner-image'></div>
            <MovieListing />
        </>
    )
}

export default Home