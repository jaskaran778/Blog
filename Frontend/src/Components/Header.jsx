import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/Themes/themeSlice";
import { signoutSuccess } from "../Redux/User/userSlice";
import { useEffect, useState } from "react";

export default function Header() {
    const path = useLocation().pathname;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    const handleSignout = async () => {
        try {
            const res = await fetch("/route/user/signout", {
                method: "POST",
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                dispatch(signoutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set("searchTerm", searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    return (
        <Navbar className="border-b-2">
            <Link
                to="/"
                className="flex *: self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <svg
                    height="30"
                    viewBox="0 0 200.159 200.158"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m120.283 109.946q4.229 0 7.048 3.29 2.819 2.818 2.819 7.047 0 4.229-2.82 7.048-2.818 2.819-7.047 2.819h-40.877q-4.23 0-7.048-2.82-2.82-2.818-2.82-7.047 0-4.229 2.82-7.048 2.819-3.289 7.048-3.289zm-40.877-30.07q-4.23 0-7.048-2.82-2.82-2.819-2.82-7.048 0-4.228 2.82-7.047 2.819-2.82 7.048-2.82h26.311q4.23 0 7.048 2.82 2.82 2.819 2.82 7.047 0 4.23-2.82 7.048-2.819 2.82-7.048 2.82zm60.61 0v-19.735q0-12.217-8.926-21.144-8.928-8.927-21.144-8.927h-39.938q-12.216 0-21.143 8.927-8.927 8.927-8.927 21.144v70.008q0 12.216 8.927 21.143 8.927 8.928 21.143 8.928h60.142q12.216 0 21.143-8.928 8.928-8.927 8.928-21.143v-30.07q0-4.23-2.82-7.049-2.819-2.819-7.047-2.819-4.229 0-7.518-2.819-2.82-3.289-2.82-7.518zm40.41-79.876q7.987 0 13.625 6.108 6.108 5.638 6.108 13.626v160.69q0 7.988-6.108 14.096-5.638 5.638-13.625 5.638h-160.692q-7.988 0-14.096-5.638-5.638-6.108-5.638-14.095v-160.691q0-7.988 5.638-13.626 6.108-6.108 14.096-6.108z"
                        fill="#ff5722"
                    />
                    <path
                        d="m65.761 159.758c-9.336-1.198-18.475-8.041-22.832-17.097-2.83-5.884-2.645-2.554-2.645-47.377 0-37.957.033-40.075.663-42.426 2.81-10.481 11.198-18.814 21.964-21.818 2.798-.781 3.09-.79 26.87-.8 23.805-.01 24.073-.001 27.172.788 8.354 2.129 15.956 8.329 19.832 16.173 2.73 5.525 2.75 5.674 2.989 21.39l.212 13.966.92 1.944c1.766 3.734 4.045 5.183 9.215 5.857 3.881.506 5.528 1.167 7.202 2.89 2.572 2.648 2.462 1.618 2.462 23.073 0 19.225-.002 19.275-.829 21.908-1.712 5.452-4.438 9.736-8.767 13.78-4.727 4.414-9.894 6.898-16.165 7.77-3.37.469-64.59.45-68.263-.021zm58.669-30.309c2.107-.96 3.634-2.399 4.697-4.424.814-1.551.95-2.24.95-4.815.001-3.473-.572-4.885-2.994-7.38-2.923-3.013-1.437-2.856-27.244-2.865l-22.823-.008-1.822.907c-3.316 1.653-5.385 4.825-5.662 8.68-.309 4.3 1.622 7.82 5.294 9.65l1.836.915 23.177-.008c21.666-.007 23.269-.05 24.59-.652zm-14.496-50.388c3.808-1.803 5.642-4.747 5.642-9.056 0-4.286-1.88-7.305-5.642-9.065l-1.768-.827-15.405-.004c-17.745-.004-17.722-.007-20.524 2.87-1.954 2.007-2.785 4.157-2.785 7.21 0 3.969 2.654 7.903 6.174 9.153 1.153.41 4.424.512 16.984.532l15.556.024z"
                        fill="#fff"
                    />
                </svg>
                <h3 className="ml-2 text-2xl">Blog</h3>
            </Link>
            <form onSubmit={handleSubmit}>
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button
                    className="w-12 h-10 hidden sm:inline"
                    color="gray"
                    pill
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === "light" ? <FaSun /> : <FaMoon />}
                </Button>
                {currentUser ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        className="mt-1.5 ml-2"
                        label={
                            <Avatar
                                alt="user"
                                img={currentUser.profilePicture}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                UserName : <b>@{currentUser.username}</b>
                            </span>
                            <span className="block text-sm  truncate">
                                Email : <b>{currentUser.email}</b>
                            </span>
                        </Dropdown.Header>
                        <Link to={"/dashboard?tab=profile"}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleSignout}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <Link to="/signin">
                        <Button gradientDuoTone="pinkToOrange" outline>
                            Sign In
                        </Button>
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={"div"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/create-post"} as={"div"}>
                    <Link to="/create-post">Create</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/posts"} as={"div"}>
                    <Link to="/posts">Posts</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
