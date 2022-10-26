import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CoursesCard from '../../component/CoursesCard/CoursesCard';
import SideNav from '../../component/SideNav/SideNav';
import './Courses.css';

const Courses = () => {
    const [allCourse, setAllCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses/')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
    console.log(allCourse);
    return (
        <div>
            <div className='courses-container mt-10'>
                <div>
                    <SideNav/>
                </div>
                <div className='mx-8 courseCard-Container'>
                    {
                        allCourse.map(course => <CoursesCard course={course} key={course.id}/>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Courses;