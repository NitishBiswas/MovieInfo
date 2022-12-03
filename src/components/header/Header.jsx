import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import USER from '../../images/user.png'
import './header.scss'

const Header = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();
    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText === "") {
            toast.info('Please enter a movie name!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return
        }
        dispatch(fetchAsyncMovies(searchText));
        dispatch(fetchAsyncShows(searchText));
        navigate('/', { state: searchText });
        setSearchText("");
    };

    return (
        <div className='header'>
            <div className="logo" onClick={() => navigate('/', { state: searchText })}>Movie <span>Info</span></div>
            <div className="search-bar">
                <form onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        value={searchText}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={USER} alt="" />
            </div>
        </div>
    )
}

export default Header