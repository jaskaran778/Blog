import React from "react";
import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../Components/PostCard";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();
    const handleShowMore = async () => {
        const numberOfPosts = posts.length;
        const startIndex = numberOfPosts;
        const urlParams = new URLSearchParams(location.search);
        urlParams.set("startIndex", startIndex);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/route/post/getposts?${searchQuery}`);
        if (!res.ok) {
            return;
        }
        if (res.ok) {
            const data = await res.json();
            setPosts([...posts, ...data.posts]);
            if (data.posts.length === 9) {
                setShowMore(true);
            } else {
                setShowMore(false);
            }
        }
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        const sortFromUrl = urlParams.get("sort");
        const categoryFromUrl = urlParams.get("category");
        if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
            setSidebarData({
                ...sidebarData,
                searchTerm: searchTermFromUrl,
                sort: sortFromUrl,
                category: categoryFromUrl,
            });
        }

        const fetchPosts = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/route/post/getposts?${searchQuery}`);
            if (!res.ok) {
                setLoading(false);
                return;
            }
            if (res.ok) {
                const data = await res.json();
                setPosts(data.posts);
                setLoading(false);
                if (data.posts.length === 9) {
                    setShowMore(true);
                } else {
                    setShowMore(false);
                }
            }
        };
        fetchPosts();
    }, [location.search]);

    return (
        <div>
            <div className="w-full">
                <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
                    All Posts:
                </h1>
                <div className="p-7 flex flex-wrap gap-4 justify-center">
                    {!loading && posts.length === 0 && (
                        <p className="text-xl text-gray-500">No posts found.</p>
                    )}
                    {loading && (
                        <p className="text-xl text-gray-500">Loading...</p>
                    )}
                    {!loading &&
                        posts &&
                        posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    {showMore && (
                        <button
                            onClick={handleShowMore}
                            className="text-teal-500 text-lg hover:underline p-7 w-full"
                        >
                            Show More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllPosts;
