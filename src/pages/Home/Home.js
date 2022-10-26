import React from 'react';
import Header from '../../component/Header/Header';
import TypeWriterEffect from 'react-typewriter-effect';
import './Home.css';
import { FaCamera } from "react-icons/fa";
import TopRated from '../Courses/TopRated';
import Footer from '../../component/Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* Header and Banner */}
            <div className='hero-cover bg-cover'>
                <div className='hero-bg text-white h-screen '>
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
                        <div className='mt-44 flex mx-auto feature-card'>
                            <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-purple-500 rounded-lg'>
                                <FaCamera className='h-10 w-20 mb-5' />
                                <h1 className='font-semibold'>Photography</h1>
                            </div>
                            <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-green-600 rounded-lg'>
                                <FaCamera className='h-10 w-10 mb-5' />
                                <h1 className='font-semibold'>Photography</h1>
                            </div>
                            <div className='flex justify-center items-center flex-col mr-10 h-48 w-48  bg-sky-600 rounded-lg'>
                                <FaCamera className='h-10 w-10 mb-5' />
                                <h1 className='font-semibold'>Photography</h1>
                            </div>
                            <div className='flex justify-center items-center flex-col h-48 w-48  bg-yellow-500 rounded-lg'>
                                <FaCamera className='h-10 w-10 mb-5' />
                                <h1 className='font-semibold'>Photography</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Courses */}
            <div className='mt-20 mx-16'>
                <h1 className='text-4xl font-bold my-10'>TOP COURSES</h1>
                <TopRated/>
            </div>
            <div className='second-cover bg-cover'>
                <div className='second-bg-color h-screen'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl font-bold text-white'>Get the Coaching Training
                            by Adam Jones <span className='text-blue-700'> for Free</span></h1>
                        <p className='text-blue-700 text-2xl font-bold'>It`s limited seating! Hurry up</p>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className="flex items-center justify-center text-center dark:bg-white text-gray-900">
                                <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-900 ng-untouched ng-pristine ng-valid">
                                    <h1 className='font-bold text-xl mb-3'>Login Now</h1>
                                    <label for="username" className="self-start text-xs font-semibold text-black">Username or Email</label>
                                    <input id="username" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:bg-gray-100 text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                                    <label for="password" className="self-start mt-3 text-xs font-semibold text-black">Password</label>
                                    <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</button>
                                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                                        <a rel="noopener noreferrer" href="#" className="dark:text-gray-400">Forgot Password?</a>
                                        <span className="dark:text-gray-400">/</span>
                                        <a rel="noopener noreferrer" href="#" className="dark:text-gray-400">Sign Up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;