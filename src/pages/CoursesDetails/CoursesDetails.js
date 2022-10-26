import React from 'react';
import { useRef } from 'react';
import { FaStarHalfAlt, FaStar, FaCloudDownloadAlt } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import toast from 'react-hot-toast';
import swal from "sweetalert";
import './CoursesDetails.css';

const CoursesDetails = () => {
    const courseDetails = useLoaderData()
    const { img, Category, title, vote, rating, price, details } = courseDetails;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'course-details',
        onAfterPrint: () => swal("Print Success!", "", "success")
    })
    return (
        <div className='mt-10 details-container'>
            <div className='mx-40 mb-20' ref={componentRef}>
                <img src={img} alt="" className='w-screen h-72 rounded-lg object-center'/>
                <div className='mt-5 space-y-3'>
                    <span><small>{Category}</small></span>
                    <div>
                        <div className='flex justify-between space-x-2'>
                            <div className='flex items-center'>
                                <span className='flex text-yellow-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </span>
                                <span>{rating}({vote})</span>
                            </div>
                            <div className='w-48 flex justify-evenly'>
                                <span>DownLoad To PDF</span>
                                <button onClick={handlePrint}><FaCloudDownloadAlt className='h-6 w-6' /></button>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p>{details}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col max-w-md p-6 space-y-2 border border-2 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-white dark:text-gray-900">
                    <h2 className="text-2xl font-semibold">Course CheckOut</h2>
                    <ul className="flex flex-col pt-4 space-y-2">
                        <li className="flex items-start justify-between">
                            <h3>Large soda</h3>
                            <div className="text-right">
                                <span className="block">$4.00</span>
                            </div>
                        </li>
                    </ul>
                    <div className="pt-4 space-y-2">
                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <span>Course Fee</span>
                                <span className="font-semibold">${price}</span>
                            </div>
                            <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-blue-700 dark:text-gray-900 dark:border-violet-400">Go to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;