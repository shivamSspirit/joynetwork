import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";

import MainComponent from "../components/mainPage/mainComponent";
import LandingPage from "../themes/landingPage";
import PostComment from "../components/postComment/postcomment";

import LoginPage from "../themes/loginPage";
import SignupPage from "../themes/signupPage";
import ProfilePage from "../themes/profilePage";

import FollowersComponent from '../components/profile/Followers'
import Follwingcomponent from '../components/profile/Following'
import ExploreFedds from "../components/explorecompoents/explore";
import Likes from "../components/likes/likes";
import Bookmark from "../components/bookmark/bookmark";

import {Helmet} from "react-helmet";


function AllRoutes() {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Joy Network</title>
            </Helmet>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />}>
                    <Route exact path="post/:postId" element={<PostComment/>}/>
                        <Route exact path="/explore" element={<ExploreFedds />} />
                        <Route exact path="/likes" element={<Likes/>}/>
                        <Route exact path="/bookmarks" element={<Bookmark/>}/>
                    </Route>
                   
                    <Route exact path="/auth/login" element={<LoginPage />} />
                    <Route exact path="/auth/signup" element={<SignupPage />} />
                    {/* <Route exact path="/post" element={<MainComponent />}/> */}
                     
                   
                    <Route exact path="/profile/:profileId/" element={<ProfilePage />} >
                        <Route path="follower" element={<FollowersComponent />} />
                        <Route path="following" element={<Follwingcomponent />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );

}
export default AllRoutes;