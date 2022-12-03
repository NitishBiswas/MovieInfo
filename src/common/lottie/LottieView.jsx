import React from 'react'
import Lottie from 'react-lottie';

const LottieView = ({ file, height, width }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: file,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie options={defaultOptions}
            height={height}
            width={width}
            style={{ marginBottom: '0px' }}
        />
    )
}

export default LottieView