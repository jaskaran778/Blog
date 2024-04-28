import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import Foot from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import CreatePost from "./Pages/CreatePost";
import OnlyAdmin from "./Components/OnlyAdmin";
import UpdatePost from "./Pages/UpdatePost";
import Post from "./Pages/Post";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./Pages/Search";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<OnlyAdmin />}>
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route
                        path="/update-post/:postId"
                        element={<UpdatePost />}
                    />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<Search />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/post/:postSlug" element={<Post />} />
            </Routes>
            <Foot />
        </BrowserRouter>
    );
}

export default App;
