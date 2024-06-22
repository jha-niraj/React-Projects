import { Sun, Search, MapPin, Twitter, Home } from "lucide-react";
import profileImage from "../assets/accordian.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const GitProfileFinder = () => {
    const [username, setUsername] = useState("");
    const [debouncedUsername, setDebouncedUsername] = useState("");

    const [userDetails, setUserDetails] = useState({});
    // const [ repo, setRepo ] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedUsername(username);
        }, 500);
        return () => clearTimeout(timerId);
    }, [username]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const userAPi = `https://api.github.com/users/${debouncedUsername || "jha-niraj"}`;
            // const repoAPi = `https://api.github.com/users/${debouncedUsername || "jha-niraj"}/repos`;
            const userApiResponse = await axios.get(userAPi);
            // const repoApiResponse = await axios.get(repoAPi);
            setUserDetails(userApiResponse.data);
            // setRepo(repoApiResponse.data.length);
        }
        fetchUserDetails();
    }, [debouncedUsername])

    console.log(userDetails);

    return (
        <section className=" bg-gray-800 text-white flex items-center justify-center h-screen">
            <div className="flex items-center justify-center flex-col gap-10 w-[100%]">
                <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 className="text-3xl font-bold">Github Profile Finder</h1>
                    <div className="flex items-center justify-center gap-5">
                        <h1 className="text-xl font-semibold">Light</h1>
                        <Sun className="fill-white" />
                    </div>
                </div>
                <div className="flex items-center justify-between shadow-2xl bg-gray-700 p-3 rounded-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <div className="flex items-center justify-start gap-3 w-full">
                        <Search className="text-blue-500" />
                        <input type="text" placeholder="Enter your GitHub Username" onChange={(e) => setUsername(e.target.value)} className="bg-transparent pl-3 h-10 w-[100%] placeholder:w-full" />
                    </div>
                </div>
                <div className="flex justify-center gap-5 flex-col shadow-2xl bg-gray-700 rounded-lg p-5 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <div className="flex ">
                        <div className="flex items-start flex-col justify-around w-full">
                            <div>
                                <h1 className="text-3xl font-semibold">{userDetails.name}</h1>
                                <a className="underline text-blue-500">@{userDetails.login}</a>
                            </div>
                            <div>
                                <h1>{userDetails.created_at}</h1>
                            </div>
                        </div>
                        <div className="flex items-start justify-center">
                            <img className="rounded-full w-48" src={userDetails.avatar_url} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-5 w-[100%]">
                        <div className="flex items-start ">
                            <p className="">{userDetails.bio}
                            </p>
                        </div>
                        <div className="bg-black p-5 rounded-lg w-[100%] flex items-center justify-center">
                            <button className="w-full flex flex-col items-center justify-center">
                                <h1 className="text-md font-semibold">Repos</h1>
                                <p className="font-bold">{userDetails.public_repos}</p>
                            </button>
                            <button className="w-full flex flex-col items-center justify-center">
                                <h1 className="text-md font-semibold">Followers</h1>
                                <p className="font-bold">{userDetails.followers}</p>
                            </button>
                            <button className="w-full flex flex-col items-center justify-center">
                                <h1 className="text-md font-semibold">Following</h1>
                                <p className="font-bold">{userDetails.following}</p>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center gap-5 w-full">
                            <div className="flex w-full items-center justify-center gap-4">
                                <MapPin />
                                <h1>{userDetails.location}</h1>
                            </div>
                            <div className="flex w-full items-center justify-center gap-4">
                                <Twitter />
                                <Link to="#">{userDetails.twitter_username || "Not Available"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GitProfileFinder;