import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNavName from '../SideNavName/SideNavName';
import './SideNav.css';

const SideNav = () => {
    const category = useLoaderData()
    return (
        <div className="flex flex-col h-full p-3 w-60  dark:text-gray-900">
            <div className="space-y-3">
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-lg font-semibold NavName-container">
                        {
                            category.map(c => <SideNavName category={c} key={c.Category_id}></SideNavName>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNav;