import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './CoursesCard.css';
const Single = ({ single }) => {
    const {id, img, Category, title, vote, rating, price } = single;
    return (
        <div>
            <Link to={`/courses/${id}`}>
                <div className="courses-card relative border border-0 border-gray-100 rounded-md shadow-md dark:text-gray-900">
                    <img src={img} alt={title} className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
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
            </Link>
        </div>
    );
};

export default Single;