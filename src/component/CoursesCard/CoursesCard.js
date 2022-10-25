import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import './CoursesCard.css';

const CoursesCard = () => {
    return (
        <div className='courses-card'>
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-2">
                    <div className="">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">MERN Stack Development</h2>
                        <p className="dark:text-gray-900">Leaning With React, JavaScript, Express, MongoDb and much more</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-2">
                    <div className="">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">MERN Stack Development</h2>
                        <p className="dark:text-gray-900">Leaning With React, JavaScript, Express, MongoDb and much more</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="border border-0 border-gray-100 rounded-md shadow-md dark:bg-white dark:text-gray-900">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-2">
                    <div className="">
                        <p><small>Art</small></p>
                        <h2 className="text-3xl font-semibold tracking-wide">MERN Stack Development</h2>
                        <p className="dark:text-gray-900">Leaning With React, JavaScript, Express, MongoDb and much more</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <span className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </span>
                        <span>$34</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;