import React from 'react';
import CoursesCard from '../../component/CoursesCard/CoursesCard';
import Header from '../../component/Header/Header';
import SideNav from '../../component/SideNav/SideNav';
import './Courses.css';

const Courses = () => {
    return (
        <div>
            <div className='text-black'>
                <Header />
            </div>
            <div className='courses-container'>
                <div>
                    <SideNav/>
                </div>
                <div className='mx-8'>
                    <CoursesCard/>
                </div>
            </div>
        </div>
    );
};

export default Courses;