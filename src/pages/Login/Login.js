import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className='login-container'>
                <div></div>
                <div className='my-10'>
                    <div className="max-w-md p-8  rounded-xl dark:bg-gray-100 dark:text-gray-900">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 outline outline-black outline-1 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm relative">
                                <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 outline outline-black outline-1 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                                <div className="absolute right-1 top-8">
                                    
                                </div>

                                <div className="flex justify-end text-xs dark:text-gray-900">
                                    <Link>Forgot Password?</Link>
                                </div>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button aria-label="Log in with Google" className="p-3 rounded-sm">
                                <FaGoogle className="w-5 h-5 fill-current" />
                            </button>
                            <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                                <FaFacebook className="w-5 h-5 fill-current" />
                            </button>
                            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <FaGithub className="w-5 h-5 fill-current" />
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-900">Don't have an account?
                            <Link to='/register' className="underline dark:text-gray-900">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;