import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Componets/Hook/useAuth";
import SosalLink from "./SosalLink";


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state || "/";

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singInUser } = useAuth();
  const heandleLogin = (data) => {
    console.log(data);
    singInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(from, {replace: true})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">WellCome Back</h1>

      <p className="text-center">Login Now</p>
      <form className="card-body" onSubmit={handleSubmit(heandleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              only one upper case lowercade one number and spacal chartcer
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">only one 6 chartcer</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-primary text-white  mt-4">Login</button>
        </fieldset>
        
        <p>
          Onready An account ?{" "}
          <Link 
          state={location?.state || '/'}
          
          className="text-blue-500 underline" to="/register">
            {" "}
            Register
          </Link>
        </p>
      </form>
      <SosalLink></SosalLink>
    </div>
  );
};

export default Login;
