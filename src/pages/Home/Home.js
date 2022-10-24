import React from 'react';
import Header from '../../component/Header/Header';
import TypeWriterEffect from 'react-typewriter-effect';
import './Home.css';
import { FaCamera } from "react-icons/fa";

const Home = () => {
    return (
        <div className='hero-cover bg-cover'>
            <div className='hero-bg text-white h-screen '>
                <Header/>
                {/* hero-section */}
            <div className='flex flex-col'>
                <div className='mx-auto mt-24'>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: 'white',
                                fontWeight: 500,
                                fontSize: '2.5em',
                            }}
                            startDelay={2000}
                            cursorColor="transparent"
                            text="ProForce Is The Best Choice For EveryOne"
                            typeSpeed={50}
                        />
                </div>
                <div className='mt-44 flex mx-auto'>
                    <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-purple-500 rounded-lg'>
                        <FaCamera className='h-10 w-20 mb-5'/>
                        <h1 className='font-semibold'>Photography</h1>
                    </div>
                        <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-green-600 rounded-lg'>
                        <FaCamera className='h-10 w-10 mb-5'/>
                        <h1 className='font-semibold'>Photography</h1>
                    </div>
                        <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-sky-600 rounded-lg'>
                        <FaCamera className='h-10 w-10 mb-5'/>
                        <h1 className='font-semibold'>Photography</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col h-48 w-48  bg-yellow-500 rounded-lg'>
                        <FaCamera className='h-10 w-10 mb-5'/>
                        <h1 className='font-semibold'>Photography</h1>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Home;