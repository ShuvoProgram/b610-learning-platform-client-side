import React, { useState } from "react";
import { useContext } from "react";
import { AuthenticContext } from "../../context/AuthContext";
import swal from "sweetalert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, verifyEmail, updateUserProfile } = useContext(AuthenticContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(name, photoURL)
        handleVerifyEmail()
        swal("Good job!", "Please Verify your Email!", "success", {
          button: "Check Mail",
        });
        setError('')
        form.reset()
        navigate('/login')
          setError({ ...error, email: "Please Provide Valid Email" });
          setUserInfo({ ...userInfo, email: "" });
        console.log(user);
      })
      .catch((err) => {
        toast.error(error)
        setError(err.message)
      });
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => { })
      .catch(err => console.error(err))
  }

  const updateProfile = (name, photoURL) => {
    const profile = {
      name: name,
      photoURL: photoURL,
    }
    updateUserProfile(profile)
      .then(() => { })
      .catch(err => console.error(err))
  }

  const handleEmailChange = e => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please Provide Valid Email" });
      setUserInfo({ ...userInfo, email: "" });

    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value })
    }
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 8) {
      setError({ ...errors, password: "Must be at least 8 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/[\!\@\#\$\%\^\&\*]{1,}/.test(password)) {
      setError({
        ...errors,
        password: "Must be at least One Symbolic characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/[A-Z]{1,}/.test(password)) {
      setError({
        ...errors,
        password: "Must be at least One UpperCase characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  return (
    <div>
      <div className="mx-56">
        <div className="border border-2">
          <div className="flex justify-center my-3">
            <h1 className="text-2xl font-semibold">
              Register <span className="text-blue-800">Form</span>{" "}
            </h1>
          </div>
          <form onSubmit={onSubmit} className="mx-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <div className="col-span-full">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <input id="name" name='name' type="text" placeholder="Name" className="w-full p-2 rounded-md outline outline-1 outline-black focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input onChange={handleEmailChange} id="email" name='email' type="email" placeholder="example#123@gmail.com" className="w-full outline outline-1 outline-black p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" data-temp-mail-org="0" />
                  <>{
                    errors.email && <p className='text-red-600'>{errors.email}</p>
                  }
                  </>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <label htmlFor="pasword" className="text-sm">Password</label>
                  <input onChange={handlePasswordChange} id="password" name='password' type={showPass ? 'text' : "password"} placeholder="Password" className="w-full rounded-md outline outline-1 outline-black focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                  <div className="absolute right-1 top-8" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <AiFillEyeInvisible className='h-6 w-6' /> : <AiFillEye className='h-6 w-6' />}
                  </div>
                  <>
                    {errors.password && <p className='text-red-600'>{errors.password}</p>}
                  </>
                </div>
              </div>
              
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <div className="col-span-full">
                  <label htmlFor="photoURL" className="text-sm">PhotoURL</label>
                  <input id="photoURL" name='photoURL' type="text" placeholder="photoURL" className="w-full p-2 rounded-md outline outline-1 outline-black focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3">
              <input
                type="submit"
                className="p-2 bg-blue-800 text-white rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
