"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

const Createe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='nnn2'>
            <h2 className='text-4xl font-bold text-center'> Create Post</h2>
            <div className='p-10'>
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post</span>
                    </label>
                    <textarea {...register("post", { required: true })} className=" textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
            </div>
            <button className='btn btn-primary flex  mx-auto'>Post</button>
        </form>
    );
};

export default Createe;