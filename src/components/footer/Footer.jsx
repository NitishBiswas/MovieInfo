import React from 'react'
import { useNavigate } from 'react-router-dom';
import './footer.scss'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <div className='logo' onClick={() => navigate('/')}>Movie <span>Info</span></div>
            <div>Copyright &#169; 2022 Movie Info. All Rights Reserved | Privacy & Data Protection | Disclaimer</div>
        </div>
    )
}

export default Footer