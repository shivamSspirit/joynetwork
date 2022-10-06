import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as AuthAction from '../../actions/auth'
import { Link } from 'react-router-dom';

import useSignupForm from '../../hoooks/authHooks/useSignupform';

function SignUp() {
    const formsignup = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange } = useSignupForm(formsignup)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            dispatch(
                AuthAction?.register({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values?.userName,
                    email: values.email,
                    password: values.password
                })
            );

            navigate('/auth/login')
        } else {
            alert("There is an Error!");
        }
    }

    return (

        <div>
            <div className='container flex h-screen w-screen items-center justify-center'>

                <div className='bg-green w-1/4 flex flex-col items-center signup-height'>

                    <div className=''>
                        <h2 className=''>Signup to webapp</h2>
                        <p className='text-small text-center'>connect with people</p>
                    </div>


                    <form className="flex items-center flex-col" onSubmit={handleSubmit}>

                        <div className=''>
                            <label className="relative block text-left">
                                FirstName:
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Types FirstName here..." type="text" name="firstName" onChange={handleChange} value={values?.firstName} />
                                {errors.firstName && <h3>{errors.firstName}</h3>}
                            </label>
                        </div>

                        <div className=''>
                            <label className="relative block text-left">
                                LastName:
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Types LastName here..." type="text" name="lastName" onChange={handleChange} value={values?.lastName} />
                                {errors.lastName && <h3>{errors.lastName}</h3>}
                            </label>
                        </div>


                        <div className=''>
                            <label className="relative block text-left">
                                UserName:
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Types email here..." type="text" name="userName" onChange={handleChange} value={values?.userName} />
                                {errors.userName && <h3>{errors.userName}</h3>}
                            </label>
                        </div>


                        <div className=''>
                            <label className="relative block text-left">
                                Email:
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Types email here..." type="text" name="email" onChange={handleChange} value={values?.username} />
                                {errors.email && <h3>{errors.email}</h3>}
                            </label>
                        </div>


                        <div className=''>
                            <label className="relative block text-left">
                                Password:
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type pwd here..." type="text" name="password" onChange={handleChange} value={values.password} />
                                {errors.password && <h3 className='h-fit'>{errors.password}</h3>}
                            </label>
                        </div>

                        <button type='submit' className='rounded-none'>Register</button>
                    </form>
                    <div className='item-center'>
                        <span>already sign up?<Link to={'/auth/login'} style={{ textDecoration: "none", color: "inherit" }}>login here</Link></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp
