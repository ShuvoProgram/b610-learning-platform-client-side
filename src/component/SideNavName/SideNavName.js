import React from 'react';
import { Link } from 'react-router-dom';
 
const SideNavName = ({ category }) => {
    const { id ,Category } = category;
    console.log(id);
    return (
        <div>
            <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                    <Link to={`/categories/${id}`}>
                        <span>{Category}</span>
                    </Link>
                </div>
            </li>
        </div>
    );
};

export default SideNavName;