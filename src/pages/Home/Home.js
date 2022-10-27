import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Home.css';
import TopRated from '../Courses/TopRated';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (
        <div>
            {/* Header and Banner */}
            <section className="hero-cover bg-cover">
                <div className='dark:bg-opacity-75 dark:text-gray-100' >
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    color: 'Blue',
                                    fontWeight: 800,
                                    fontSize: '2.5em',
                                }}
                                startDelay={2000}
                                cursorColor="transparent"
                                text="ProForce Is The Best Choice For EveryOne"
                                typeSpeed={50}
                            />
                            <p className="mt-6 mb-8 text-lg sm:mb-12">Learn More Course to
                                <br className="hidden md:inline lg:hidden" /> Build Your Skill Development
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to="/categories" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get Courses</Link>
                                <Link to="/register" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Sign Up</Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </div>
                
            </section>
            {/* Courses */}
            <div className='mt-20 mx-16'>
                <h1 className='text-4xl font-bold my-10'>TOP COURSES</h1>
                <TopRated/>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Pro<span className='text-blue-700'>Force</span>
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Learn More Course to 
                                <br className="hidden md:block" />
                                Build Your Skill{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    Development
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Create an online video course, reach students across the globe, and earn money.
                                Top companies choose Udemy Business to build in-demand career skills.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center border border-2 p-2 bg-blue-700 text-white rounded-lg font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Get 15% discount
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <a
                            href="/"
                            aria-label="Play Video"
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                        >
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg
                                    className="w-10 text-gray-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;