import { Link } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";
import Marquee from "../Components/Marquee";
import Video from "../Components/Video";
import Me from "../Components/Me";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/route/post/getPosts?limit=3");
            const data = await res.json();
            setPosts(data.posts);
        };
        fetchPosts();
    }, []);
    return (
        <div>
            <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
                <h1 className="text-3xl font-bold lg:text-6xl">
                    Welcome to Blog
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm">
                    Here you'll find a variety of articles and tutorials on
                    topics such as web development, software engineering, and
                    programming languages.
                </p>
            </div>
            <div className="min-h-screen w-full ">
                <Video />
            </div>
            <div className="p-3">
                <Marquee />
            </div>
            <div className="m-3">
                <Me />
            </div>
            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
                {posts && posts.length > 0 && (
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl font-semibold text-center">
                            Recent Posts
                        </h2>
                        <div className="flex  gap-6">
                            {posts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                        <Link
                            to={"/posts"}
                            className="text-lg text-teal-500 hover:underline text-center"
                        >
                            View all posts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
