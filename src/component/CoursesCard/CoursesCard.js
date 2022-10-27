import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CoursesCard.css';
import Single from './Single';

const CoursesCard = () => {
    const courseData = useLoaderData()
    return (
        
        <div className='courseCard-Container'>
            {
                courseData.map(s => <Single
                    key={s.id}
                    single={s}
                ></Single>)
            }
        </div>
    );
};

export default CoursesCard;