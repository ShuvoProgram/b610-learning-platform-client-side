import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNavName from '../../component/SideNavName/SideNavName';
import './Courses.css';

const Courses = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className='courses-container mt-10'>
                <div>
                    <div className="flex flex-col h-full p-3 w-60  dark:text-gray-900">
                        <div className="space-y-3">
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1  font-semibold NavName-container">
                                    {
                                        categories.map(c => (
                                            <li className="rounded-sm">
                                                <div className="flex items-center p-2 space-x-3 rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                                        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                                    </svg>
                                                    <SideNavName category={c}/>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-8'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Courses;