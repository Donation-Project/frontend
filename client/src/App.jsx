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
import RegistrationPage from "./component/page/RegistrationPage";
function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-LoginPage" element={<LoginPage />} />
                <Route path="post-NewMemberPage" element={<NewMemberPage />} />
                <Route path="post-RegistrationPage" element={<RegistrationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;