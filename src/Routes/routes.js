import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import SignUp from "../components/auth/signup";
import Login from "../components/auth/login";
// import LandingPage from "../themes/landingPage";
import CreatePost from "../components/post/createPost";
import PostCard from "../components/post/postCard";
import Suggestions from "../components/mainPage/suggestions";
import Header from "../components/header/header";
import MainComponent from "../components/mainPage/mainComponent";
import LandingPage from "../themes/landingPage";
import * as authCookies from '../utils/authUtils'

// import MainComponent from "../components/mainPage/mainComponent";

import PostComment from "../components/postComment/postcomment";


import LoginPage from "../themes/loginPage";
import SignupPage from "../themes/signupPage";
import ProfilePage from "../themes/profilePage";


function AllRoutes() {

    // const navigate = useNavigate()

    // const [token, setToken] = useState(null);


    // useEffect(() => {
    //     if (authCookies?.getAuthCookie()) {
    //         navigate('/')
    //     } else {
    //         navigate('/auth/login')
    //     }
    // }, [authCookies?.getAuthCookie()])



    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/auth/login" element={<LoginPage />} />
                    <Route exact path="/auth/signup" element={<SignupPage />} />
                    <Route exact path="/post/:postId" element={<MainComponent/>}/>
                    <Route exact path="/profile" element={<ProfilePage/>}/>
                    {/* {token ? <Route exact path="/" element={<LandingPage />} /> : <Route exact path="/auth/login" element={<Login />} />} */}
                    {/* <Route exact path="/ok" element={<Hello/>}/> */}
                </Routes>
            </Router>
        </div>
    );

}
export default AllRoutes;