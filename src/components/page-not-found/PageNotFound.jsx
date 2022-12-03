import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import *as PNF from '../../images/pnf.json';
import *as NF from '../../images/4041.json';
import LottieView from '../../common/lottie/LottieView'
import './page-not-found.scss'

const PageNotFound = () => {
    const errorMessage = useLocation().state;
    const navigate = useNavigate();

    return (
        <>
            <div className='not-found'>
                {errorMessage === null ?
                    <LottieView file={PNF} height={400} width={400} />
                    :
                    <LottieView file={NF} height={420} width={420} />
                }
                <button onClick={() => navigate('/')}>Back To Home Page</button>
            </div>
        </>
    )
}

export default PageNotFound