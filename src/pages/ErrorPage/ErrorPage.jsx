import React from 'react';
import errorJPG from '../../assets/lootie/errorJPG.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-center'>
                <Lottie
                    animationData={errorJPG}
                    loop={true}
                    style={{ width: 500, height: 500 }}
                ></Lottie>
            </div>
            <Link className='flex items-center justify-center' to="/"><button className="btn btn-neutral btn-outline">Back to home</button></Link>
        </div>

    );
};

export default ErrorPage;