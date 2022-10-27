import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import './TopRated.css';

const TopRated = () => {
    return (
        <div className='top-rated-container'>
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://i.ibb.co/jJDyRkW/Web.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-6">
                    <div className="space-y-1">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">MERN Stack Development</h2>
                        <p className="dark:text-gray-900">Leaning With React, JavaScript, Express, MongoDb and much more</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStarHalfAlt/>
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://i.ibb.co/RPvB1SD/Digital-Markting.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-6">
                    <div className="space-y-1">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">Digital Marketing</h2>
                        <p className="dark:text-gray-900">The Complete Digital Marketing Course - 12 Courses in 1</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStarHalfAlt/>
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://i.ibb.co/72BtWXm/ML.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-6">
                    <div className="space-y-1">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">Machine Learning</h2>
                        <p className="dark:text-gray-900">Python for Data Science and Machine Learning Bootcamp</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStarHalfAlt/>
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;