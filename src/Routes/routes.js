import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import LandingPage from "../themes/landingPage";
import LoginPage from "../themes/loginPage";
import SignupPage from "../themes/signupPage";
import ProfilePage from "../themes/profilePage";
import FollowersComponent from '../components/profile/Followers'
import Follwingcomponent from '../components/profile/Following'
import ExploreFedds from "../components/explorecompoents/explore";
import Bookmark from "../components/bookmark/bookmark";
import AuthRoutes from "./authRoutes";

function AllRoutes() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Joy Network</title>
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthRoutes><LandingPage /></AuthRoutes>}>
                        <Route path="explore" element={<ExploreFedds />} />
                        <Route path="bookmarks" element={<Bookmark />} />
                    </Route>
                    <Route exact path="/auth/login" element={<LoginPage />} />
                    <Route exact path="/auth/signup" element={<SignupPage />} />
                    <Route exact path="/profile/:profileId/" element={<AuthRoutes><ProfilePage /></AuthRoutes>}>
                        <Route path="follower" element={<FollowersComponent />} />
                        <Route path="following" element={<Follwingcomponent />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );

}
export default AllRoutes;