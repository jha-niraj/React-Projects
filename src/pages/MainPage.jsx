import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Heart, Github, Linkedin, Instagram, Twitter } from "lucide-react";

import AccordianImage from "../assets/accordian.jpg";
import RandomColorImage from "../assets/randomColor.png";
import GitProfileFinderImage from "../assets/gitProfileFinder.png";

const MainPage = () => {

    return (
        <section className="flex flex-col gap-10 h-screen">
            <section className="bg-gradient-to-r from-cyan-200 via-red-300 to-blue-200">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-4xl font-mono">
                        PROJECTS
                    </div>
                    <div className="flex gap-5 items-center justify-center">
                        <a className="text-2xl font-medium hover:bg-cyan-100 p-2 m-3 rounded-lg cursor-pointer transition-all">Home</a>
                        <a className="text-2xl font-medium hover:bg-gray-300 p-2 m-3 rounded-lg cursor-pointer transition-all">Home</a>
                        <a className="text-2xl font-medium hover:bg-gray-300 p-2 m-3 rounded-lg cursor-pointer transition-all">Home</a>
                        <a className="text-2xl font-medium hover:bg-red-200 p-2 m-3 rounded-lg cursor-pointer transition-all">Home</a>
                    </div>
                </div>
            </section>
            <section className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <ProjectNameButton image={AccordianImage} name="Accordian" />
                <ProjectNameButton image={RandomColorImage} name="Random Color" />
                <ProjectNameButton image={GitProfileFinderImage} name="Git Profile Finder" />
            </section>
            <section className="w-full flex items-center justify-center flex-col bg-gradient-to-r from-slate-300 via-gray-300 to-slate-300">
                <div className="w-full flex items-center justify-center gap-3 font-bold text-3xl font-serif m-3">
                    <h1 className="w-full text-center">Made with &hearts; by Niraj Kumar Jha</h1>
                </div>
                <div className="flex items-center justify-center gap-5 w-full">
                    <a href="https://www.linkedin.com/in/nirajjha31/" target="_blank" className="hover:scale-125 cursor-pointer hover:bg-blue-300 p-2 m-3 rounded-lg transition-all"><Linkedin className="stroke-2" /></a>
                    <a href="https://github.com/jha-niraj" target="_blank" className="hover:scale-125 cursor-pointer hover:bg-blue-300 p-2 m-3 rounded-lg transition-all"><Github /></a>
                    <a href="https://www.instagram.com/code.niraj/" target="_blank" className="hover:scale-125 cursor-pointer hover:bg-blue-300 p-2 m-3 rounded-lg transition-all"><Instagram /></a>
                    <a href="https://twitter.com/NirajJh80472344" target="_blank" className="hover:scale-125 cursor-pointer hover:bg-blue-300 p-2 m-3 rounded-lg transition-all"><Twitter /></a>
                </div>
            </section>
        </section>
    )
}

const ProjectNameButton = ({ image, name }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        const finalDestination = name.toLowerCase();
        let stringWithoutSpace = finalDestination.replace(/\s/g, '');
        navigate(`/${stringWithoutSpace}`);
    }

    const [titleVisible, setTitleVisible] = useState(false);

    return (
        <div className="flex items-center justify-center flex-col cursor-pointer relative">
            <div className="shadow-2xl relative" onClick={handleNavigation}>
                <img src={image} onMouseEnter={() => setTitleVisible(current => !current)} onMouseLeave={() => setTitleVisible(current => !current)} className="rounded-lg opacity- hover:opacity-100 hover:scale-115 transition-all" alt="Accordian Image" />
                <div className={`accordion-content ${titleVisible ? '' : "hovered"} flex items-start justify-center`}>
                    <button className="text-2xl font-semibold text-white py-2 px-4">{name}</button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;