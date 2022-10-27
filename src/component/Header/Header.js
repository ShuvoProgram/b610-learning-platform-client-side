import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthenticContext } from '../../context/AuthContext';
import { FaUser } from 'react-icons/fa';
import { DarkThemeToggle, Flowbite, Tooltip, useTheme, useThemeMode } from 'flowbite-react';

const Header = () => {
    const { user, logOut } = useContext(AuthenticContext)
    const userSignOut = () => {
        logOut()
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useTheme().theme.button;
    const [mode, setMode, toggleMode] = useThemeMode();
    return (
        <div class="bg-transparent">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between ">
                    {/* <NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/hotels">Hotels</NavLink> */}
                    <Link
                        to="/"
                        title="ProForce"
                        class="inline-flex items-center"
                    >
                        <img className='h-8 w-8' src={logo} alt="" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Pro<span className='text-blue-600'>Force</span> 
                        </span>
                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800'>
                            <NavLink
                                to="/categories"
                                title="Courses"
                                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"
                                className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800'>
                            <NavLink
                                className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                to="/blog"
                                title="Blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className='font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800'>
                            <NavLink
                                to="/faq"
                                title="FAQ"
                                className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li className='flex items-center space-x-8'>
                            {
                                    user ? <>
                                    {
                                        user?.photoURL ?
                                        <Tooltip content={user.displayName}>
                                                <img className='w-8 h-8 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 text-xs' src={user.photoURL} alt={user.displayName} />
                                        </Tooltip>
                                          : <FaUser />
                                        
                                    }
                                    <button className='' onClick={userSignOut}>Log Out</button>
                                    </> : 
                                    <li className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:text-blue-800 border border-1 border-blue-800 focus:shadow-outline focus:outline-none'>
                                        <NavLink
                                            to="/login"
                                            title="Login"
                                            className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                        >
                                            Log In
                                        </NavLink>
                                    </li>
                                    
                            }
                        </li>
                        <li>
                            <Flowbite>
                                <DarkThemeToggle />
                            </Flowbite>
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img className='h-8 w-8' src={logo} alt="" />
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Pro<span className='text-blue-600'>Force</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                                                <NavLink
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                                                <NavLink
                                                    to="/faq"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                                >
                                                    FQA
                                                </NavLink>
                                            </li>
                                            <li>
                                                {
                                                    user ? <>
                                                        {
                                                            user?.photoURL ?
                                                                <Tooltip content={user.displayName}>
                                                                    <img className='w-8 h-8 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 text-xs' src={user.photoURL} alt={user.displayName} />
                                                                </Tooltip>
                                                                : <FaUser />

                                                        }
                                                        <button className='' onClick={userSignOut}>Log Out</button>
                                                    </> :
                                                        <li className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:text-blue-800 border border-1 border-blue-800 focus:shadow-outline focus:outline-none'>
                                                            <NavLink
                                                                to="/login"
                                                                className={({ isActive }) => isActive ? "text-blue-800" : "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-800"}
                                                                title="Login"
                                                            >
                                                                Log In
                                                            </NavLink>
                                                        </li>
                                                }
                                            </li>
                                            <li>
                                                <li>
                                                    <Flowbite>
                                                        <DarkThemeToggle />
                                                    </Flowbite>
                                                </li>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;