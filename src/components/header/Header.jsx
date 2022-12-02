import React from 'react'
import { useNavigate } from 'react-router-dom'
import USER from '../../images/user.png'
import './header.scss'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className="logo" onClick={() => navigate('/')}>Movie App</div>
            <div className="user-image">
                <img src={USER} alt="" />
            </div>
        </div>
    )
}

export default Header