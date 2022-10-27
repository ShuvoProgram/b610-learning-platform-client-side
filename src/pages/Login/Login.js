import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css';
import { useContext } from 'react';
import { AuthenticContext } from '../../context/AuthContext';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/Firebase';
import { useEffect } from 'react';
import swal from "sweetalert";
import { Button,  Label, TextInput } from 'flowbite-react';


const auth = getAuth(app)

const Login = () => {
    const {user, signIn, verifyEmail } = useContext(AuthenticContext);
    const [loading, setLoading] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoading(false)
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
            console.log(user)
            setLoading(false)
            if(user.emailVerified){
                navigate(from, { replace: true });
            } else {
                swal("Success!", "Your email is not verified. Please verify your email address.", "warning")
            }
            form.reset()
            setErrors({...errors, password: "", email: ""})
        })
        .catch(err => {
            console.error(err)
            setErrors({...errors, email: "User Already Exits", password: "Wrong Password!"})
            if(email === errors.email){
                swal("Email Doesn't Exits!", "", "error")
            } else if (email === errors.password) {
                swal("Wrong Password!", "", "error")
            }
             else {
                swal("Failed To Login!", "", "error")
            }
        })
    }
    const handleUserEmailBlur = event => {
        const email = event.target.value;
        setErrors(email)
    }

    const handleForgetPassword = () => {
        if (!errors.email) {
            alert('Please enter your email address.')
            return;
        }
        sendPasswordResetEmail(auth, errors.email)
        .then(() => { 
            alert('Password Reset email sent. Please check your email.')
         })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])
    return (
        <>
            <div className='login-container flex justify-center'>
                <div className='max-w-md'> 
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                onBlur={handleUserEmailBlur}
                                type="email"
                                name="email"
                                placeholder="name@gmail.com"
                                required={true}
                            />
                        </div>
                        <div className='relative'>
                            <div className="mb-2 block ">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                name="password"
                                type={showPass ? "text" : "password"}
                                required={true}
                            />
                            <div className="absolute right-1 top-10" onClick={() => setShowPass(!showPass)}>
                                {showPass ? <AiFillEyeInvisible className='h-6 w-6' /> : <AiFillEye className='h-6 w-6' />}
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <div className="flex justify-end text-xs dark:text-gray-900">
                                <button className="button" onClick={handleForgetPassword}>Forgot Password?</button>
                            </div>
                        </div>
                        <Button type="submit">
                            Login
                        </Button>
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
        </>
    );
};

export default Login;