import React from "react";
import DashProfile from "../Components/DashProfile";
import DashSideBar from "../Components/DashSideBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashPosts from "../Components/DashPosts";
import DashUsers from "../Components/DashUsers";
import DashComments from "../Components/DashComments";
import DashDash from "../Components/DashDash";

function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get("tab");
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-56">
                {/* Sidebar */}
                <DashSideBar />
            </div>
            {/* profile... */}
            {tab === "profile" && <DashProfile />}
            {/* posts */}
            {tab === "posts" && <DashPosts />}
            {/* Users */}
            {tab === "users" && <DashUsers />}
            {/* comments */}
            {tab === "comments" && <DashComments />}
            {/* Dashboard */}
            {tab === "dash" && <DashDash />}
        </div>
    );
}

export default Dashboard;
