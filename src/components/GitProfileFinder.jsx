import { Sun, Search, MapPin, Link, Twitter, Home } from "lucide-react";
import profileImage from "../assets/accordian.jpg";

const GitProfileFinder = () => {
    return (
        <section className="bg-gray-900 flex flex-col gap-10 items-center justify-center h-screen text-white">
            <div className="flex justify-between w-[50%]">
                <h1 className="text-3xl font-bold">Github Profile Finder</h1>
                <div className="flex items-center justify-center gap-5">
                    <h1 className="text-xl font-semibold">Light</h1>
                    <Sun className="fill-white" />
                </div>
            </div>
            <div className="flex items-center justify-between shadow-2xl bg-gray-700 p-3 rounded-lg w-[50%]">
                <div className="flex items-center justify-start gap-3 w-full">
                    <Search className="text-blue-500" />
                    <input type="text" placeholder="Enter your GitHub Username" className="bg-transparent pl-3 h-10 active:border-none w-[50%]" />
                </div>
                <button className="font-bold text-md rounded-lg bg-blue-500 w-24 h-10">Search</button>
            </div>
            <div className="flex justify-center shadow-2xl bg-gray-700 rounded-lg p-5 w-[50%]">
                <div className="flex items-start justify-center w-[25%]">
                    <img className="rounded-full h-32 w-32" src={profileImage} />
                </div>
                <div className="flex items-center justify-center flex-col gap-5 w-[100%]">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h1 className="text-3xl font-semibold">Niraj Jha</h1>
                            <a className="underline">@jha-niraj</a>
                        </div>                        
                        <div>
                            <h1>Joined 10 00 2022</h1>
                        </div>
                    </div>
                    <div className="">
                        <p className="p-4">I am Niraj Jha, currently pursuing Bachelor in Computer Science and Engineering from Lovely Professional University in my fourth semester.
                            I'm currently working on full-stack projects like Blogging Application, Paytm clones, Text editors, etc.
                        </p>
                    </div>  
                    <div className="bg-black p-5 rounded-lg w-[95%] flex items-center justify-center">
                        <div className="w-full flex flex-col items-center justify-center">
                            <h1 className="text-md font-semibold">Repos</h1>
                            <p className="font-bold">51</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <h1 className="text-md font-semibold">Followers</h1>
                            <p className="font-bold">1</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <h1 className="text-md font-semibold">Following</h1>
                            <p className="font-bold">3</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center gap-5 w-full">
                        <div className="flex w-full items-center justify-center gap-4">
                            <MapPin />
                            <h1>Jalandhar, India</h1>
                        </div>
                        <div className="flex w-full items-center justify-center gap-4">
                            <Link />
                            <a>Portfolio</a>
                        </div>
                        <div className="flex w-full items-center justify-center gap-4">
                            <Twitter />
                            <a>Niraj Jha</a>
                        </div>
                        <div className="flex w-full items-center justify-center gap-4">
                            <Home />
                            <a>Siraha, Nepal</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GitProfileFinder;