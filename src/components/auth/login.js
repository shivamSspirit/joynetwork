import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import * as authAction from '../../actions/auth'
import { useDispatch, useSelect } from 'react-redux';
import useLoginForm from '../../hoooks/authHooks/useForm';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange, asGuest } = useLoginForm(formLogin)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            dispatch(
                authAction?.login({
                    username: values.username,
                    password: values.passsword,
                })
            );
            navigate('/')
        } else {
            alert("There is an Error!");
        }
    }

    return (
        <div>
            <div className='container flex h-screen w-screen items-center justify-center overflow-scroll'>

                <div className='bg-green w-1/3 flex flex-col items-center'>

                    <div className=''>
                        <h2 className=''>Login to webapp</h2>
                        <p className='text-small text-center'>connect with people</p>
                    </div>


                    <form className="flex items-center flex-col" onSubmit={handleSubmit}>
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
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type pwd here..." type="text" name="password" onChange={handleChange} value={values.passsword} />
                                {errors.password && <h3 className='h-fit'>{errors.password}</h3>}
                            </label>
                        </div>

                        <button type='submit' className='rounded-none'>Go</button>
                    </form>


                    <div className='guest-log items-center'>
                        <button onClick={(e) => asGuest(e)}>Login as a guest</button>
                    </div>

                    <div className='item-center'>
                        <span>New to app?<Link to={'/auth/signup'} style={{ textDecoration: "none", color: "inherit" }}>sign up</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
