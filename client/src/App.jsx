import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Pages
import MainPage from './component/page/MainPage';
import LoginPage from './component/page/Member/LoginPage';
import NewMemberPage from "./component/page/Member/NewMemberPage";
import UserDonationList from "./component/page/Mypage/UserDonationList";
import UserProfileEdit from "./component/page/Mypage/UserEditProfile";
import RegistrationPage from "./component/page/RegistrationPage";
function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-LoginPage" element={<LoginPage />} />
                <Route path="post-NewMemberPage" element={<NewMemberPage />} />
                <Route path="post-RegistrationPage" element={<RegistrationPage />} />
                <Route path="mypage"  element={<UserProfileEdit />} />
                <Route path="mypage/donate"  element={<UserDonationList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;