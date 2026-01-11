  import React from "react";
import useAuth from "../Componets/Hook/useAuth";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import SosalLink from "./SosalLink";

  const Register = () => {
    const { registerUser,updateUserProfile} = useAuth();
    const axiosSecure = useAxiosSecure( )
    
    const navigate = useNavigate()
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const handleRegistion = (data) => {
      console.log(data.photo[0]);
      const profile = data.photo[0]

      registerUser(data.email, data.password)
        .then((res) => {
          console.log(res);
          
          // store the image get the photo url
          const userProfile = {
            displayName: data.name,
            // photoURL: res.data.data.display_url
          }
          const formData = new FormData()
          formData.append('image',profile)
          console.log(formData)
          const api_Img_Url = `https://api.imgbb.com/1/upload?key= ${import.meta.env.VITE_image_host_key}`
          axiosSecure.post(api_Img_Url,formData)
          .then(res =>{
            userProfile.photoURL = res.data.display_url
           
          }) 
          updateUserProfile(userProfile) 
          .then(() =>{
            const photoURL = userProfile.photoURL
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL,
              createdAt: new Date().toISOString()
            }
            // console.log('profile updated');
            axiosSecure.post('/users',userInfo)
            .then(res =>{
              if(res.data.insertedId){
                console.log('user info stored');
              }
            })
            navigate(location?.state || '/')
          })
          .catch(er =>{
            console.log(er);
            
          })
          // update user profile
        
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">WellCome Back</h1>

        <p className="text-center">Register Now</p>
        <form className="card-body" onSubmit={handleSubmit(handleRegistion)}>
          <fieldset className="fieldset">
            {/* name filed */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              {...register("name", { required: true })}
              placeholder="your name"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Requred</p>
            )}
              {/*email filed */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Requred</p>
            )}
              {/* photo filed */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              placeholder="Your Photo"
              className="file-input"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">photo is Requred</p>
            )}
            {/* password filed */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is Requred</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">password is 6 chartcter is longer</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                give me regx in js one upperCase one LowerCase one number and one
                spachil chartcer
              </p>
            )}

            <button className="btn bg-primary mt-4">Register</button>
          </fieldset>
          <p>
            Onready An account ?{" "}
            <Link
            state={location?.state || '/'}
             className="text-blue-500 underline" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
        <SosalLink></SosalLink> 
      </div>
    );
  };

  export default Register;
