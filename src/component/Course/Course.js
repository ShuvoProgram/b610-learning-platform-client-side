import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../CoursesCard/CoursesCard';

const Course = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <CoursesCard course={course} key={course.id} />)
            }
        </div>
    );
};

export default Course;