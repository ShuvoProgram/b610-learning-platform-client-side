import React, { useState } from "react";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { AuthenticContext } from "../../context/AuthContext";
import swal from "sweetalert";

const Register = () => {
  const { createUser, verifyEmail } = useContext(AuthenticContext);
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        verifyEmail();
        swal("Good job!", "Please Verify your Email!", "success", {
          button: "Check Mail",
        });
        setError("");
        data.reset();
          setError({ ...error, email: "Please Provide Valid Email" });
          setUserInfo({ ...userInfo, email: "" });
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
          setError({ ...error, email: "" });
          setUserInfo({ ...userInfo, email: data.email })
      });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    console.log(password);
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
  //   console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <div className="mx-56">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
        <div className="border border-2">
          <div className="flex justify-center my-3">
            <h1 className="text-2xl font-semibold">
              Register <span className="text-blue-800">Form</span>{" "}
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="name">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="border border-1 px-2"
                  placeholder="Enter Your Name"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true })}
                  className="border border-1 px-2"
                  placeholder="Enter Your Email"
                />
                <>
                  {/* errors will return when field validation fails  */}
                  {error.email && <p className="text-red-600">{error.email}</p>}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </>
              </div>
              <div className="flex flex-col">
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="password">Password</label>
                <input
                  onChange={handlePasswordChange}
                  name="password"
                  {...register("password", { required: true })}
                  className="border border-1 px-2"
                  placeholder="Enter Your Password"
                />
                {/* errors will return when field validation fails  */}
                {error.password && (
                  <p className="text-red-600">{error.password}</p>
                )}
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col">
                <label htmlFor="gender">Gender</label>
                <select
                  {...register("gender")}
                  className="border border-1 px-2">
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  {...register("age", { min: 18, max: 99 })}
                  className="border border-1 px-2"
                />
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
