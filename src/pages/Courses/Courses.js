import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../component/CoursesCard/CoursesCard';
import SideNav from '../../component/SideNav/SideNav';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div>
            <div className='courses-container mt-10'>
                <div>
                    <SideNav/>
                </div>
                <div className='mx-8 courseCard-Container'>
                    
                    {
                        courses.map(course => <CoursesCard course={course} key={course.id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;