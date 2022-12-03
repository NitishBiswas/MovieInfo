import React from 'react';
import { useNavigate } from 'react-router-dom';
import *as PNF from '../../images/pnf.json';
import *as NF from '../../images/4041.json';
import LottieView from '../../common/lottie/LottieView'
import './page-not-found.scss'

const PageNotFound = ({ movieNotFound }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='not-found'>
                {movieNotFound !== 'Yes' ?
                    <LottieView file={PNF} height={300} width={290} />
                    :
                    <LottieView file={NF} height={300} width={290} />
                }
                <button onClick={() => navigate('/')}>Back To Home Page</button>
            </div>
        </>
    )
}

export default PageNotFound