import React from "react";
import bgloading from '../../assets/images/bgloading.png';

function Loading() {
    return (

        <div className="container h-screen flex items-center justify-center">
            <img className="animate-spin-slow" src={bgloading} alt="Loading" />
        </div>
    )
}

export default Loading;