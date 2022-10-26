import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import './CoursesCard.css';

const CoursesCard = ({ course }) => {
    const { Category, title, vote, rating, price } = course;
    return (
        <>
            <div className="courses-card relative border border-0 border-gray-100 rounded-md shadow-md dark:text-gray-900">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-4 space-y-2">
                    <div className="">
                        <p><small>{Category}</small></p>
                        <h2 className="text-xl font-semibold tracking-wide">{title.slice(0, 60)+ "..."}</h2>
                        <p className="dark:text-gray-900"></p>
                    </div>
                    <hr />
                    <div className='absolute bottom-2'>
                        <div className='flex'>
                            <div className='flex items-center mr-14'>
                                <span className='flex text-yellow-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </span>
                                <span>{rating}({vote})</span>
                            </div>
                            <div>
                                <span className=''>Price ${price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesCard;