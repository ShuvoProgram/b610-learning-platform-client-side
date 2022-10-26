import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css';
import { useContext } from 'react';
import { AuthenticContext } from '../../context/AuthContext';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/Firebase';


const auth = getAuth(app)

const Login = () => {
    const { signIn, verifyEmail } = useContext(AuthenticContext);
    const [showPass, setShowPass] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            verifyEmail()
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
        })
        .catch(err => console.error(err))
    }

    const handleForget = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        console.log(email);
        sendPasswordResetEmail(auth, email)
        .then(() => { })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className='login-container'>
                <div> 
                    
                </div>
                <div className='my-10'>
                    <div className="max-w-md p-8  rounded-xl dark:bg-gray-100 dark:text-gray-900">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 outline outline-black outline-1 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm relative">
                                <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                <input type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 outline outline-black outline-1 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                                <div className="absolute right-1 top-8" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <AiFillEyeInvisible className='h-6 w-6' /> : <AiFillEye className='h-6 w-6' />}
                                </div>

                                <div className="flex justify-end text-xs dark:text-gray-900">
                                    <Popup trigger={<button className="button">Forgot Password?</button>} modal nested>
                                        {
                                            close => (
                                                <div className="py-8">
                                                    <form onSubmit={handleForget} role="alert" className="container mx-auto  md:w-2/3 flex justify-center">
                                                        <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
                                                            <div className="flex flex-col items-center px-4 md:px-12">
                                                                <img src="https://i.ibb.co/QDMrqK5/Saly-10.png" />
                                                                <p className="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">Please Send Your Email</p>
                                                                <p className="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-center text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                                                                <div className="flex items-center mt-4 sm:mt-6 w-full">
                                                                    <div className="bg-gray-50 border rounded border-gray-200 dark:border-gray-700 dark:bg-gray-700 w-full">
                                                                        <input name='email' className="w-full focus:outline-none pl-4 py-3 text-sm leading-none text-gray-600 dark:text-gray-100 bg-transparent placeholder-gray-600 dark:placeholder-gray-100" placeholder="Enter your email" />
                                                                    </div>
                                                                    <button className="px-3 py-3 bg-indigo-700 dark:bg-indigo-600 focus:outline-none hover:bg-opacity-80 ml-2 rounded">
                                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1.62163 7.76261C1.18663 7.61761 1.18247 7.38345 1.62997 7.23428L17.5358 1.93261C17.9766 1.78595 18.2291 2.03262 18.1058 2.46428L13.5608 18.3693C13.4358 18.8101 13.1816 18.8251 12.995 18.4068L9.99997 11.6668L15 5.00011L8.3333 10.0001L1.62163 7.76261Z" fill="white" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div onClick={close} className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )
                                        }
                                    </Popup>
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
                            <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                                <FaGoogle className="w-5 h-5 fill-current" />
                            </button>
                            <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                                <FaFacebook className="w-5 h-5 fill-current" />
                            </button>
                            <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
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