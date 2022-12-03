import React from 'react';
import { useLocation } from 'react-router-dom';
import *as PNF from '../../images/pnf.json';
import *as NF from '../../images/4041.json';
import LottieView from '../../common/lottie/LottieView'
import './page-not-found.scss'

const PageNotFound = () => {
    const errorMessage = useLocation().state;

    return (
        <>
            {errorMessage === null ? <div className='not-found'>
                <LottieView file={PNF} height={400} width={400} />
            </div> : <div className='not-found'>
                <LottieView file={NF} height={420} width={420} />
            </div>}
        </>
    )
}

export default PageNotFound