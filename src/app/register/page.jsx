"use client"

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../components/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const [error,setError] = useState()
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        createUser(data.email, data.pass)
        .then(data=>{
            console.log(data);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
       

    }
    return (
        <div className=" ">
            <h2 className="text-5xl font-bold text-center">Register Now</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
                <div className="md:flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>

                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>

                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>

                    </label>
                    <input type="password" placeholder="Your Password" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>

                    </label>
                    <input  {...register("pass", { required: true })} type="password" placeholder="Confirm Password" className="input input-bordered w-full " />
                </div>
                <div>
                    <input type="file" className="mt-5 file-input file-input-bordered file-input-warning w-full " />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="btn btn-warning">Register</button>
                </div>
                {/* <h3 className="text-green-500 text-center">{success}</h3> */}
                <h3 className="text-center">Already have an accunt? <Link className="text-red-500" href='/login'>Login</Link></h3>
            </form>
        </div>
    );
};

export default Register;