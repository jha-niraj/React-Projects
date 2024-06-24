import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { projectList } from "../assets/projectList";
import Input from "../components/Input";
import Button from "../components/Button";

import { MountainIcon } from "lucide-react";

export default () => {
    const [ searchQuery, setSearchQuery ] = useState("");

    const [ filteredProjects, setFilteredProjects ] = useState(projectList);

    const filterProjects = (query) => {
        const filtered = filteredProjects.filter((project) => project.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredProjects(filtered);
    }
    const handleSearchFunction = (value) => {
        if(value.trim() === "") {
            setFilteredProjects(projectList);
        } else {
            filterProjects(value);
        }
    }

    return (
        <section className="flex flex-col gap-3">
            <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Projects
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Clients
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex items-center flex-col justify-center w-full gap-5">
                <div className="max-w-6xl w-[97%] mx-auto flex items-center gap-4">
                    <form className="flex-1">
                        <Input placeholder="Search projects..." onChange={handleSearchFunction} />
                    </form>
                    <Button>Add New</Button>
                </div>
                <div className="w-[97%] grid gap-5 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        filteredProjects.map((project, index) => {
                                return (
                                    <ProjectCard key={index} image={project.image} title={project.title} description={project.description} navigateTo={project.navigateTo} externalLink={project.externalLink} />
                                )
                        })
                    }
                </div>
            </main>
            <footer>

            </footer>
        </section>
    )
}

const ProjectCard = ({ image, title, description, navigateTo, externalLink }) => {
    const navigate = useNavigate();
    console.log(externalLink);

    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-3 shadow-2xl rounded-lg p-2">
                <div className="h-48 w-full">
                    <img className="h-full w-full rounded-md" src={image} alt={title} />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-medium">{title}</h1>
                    <p className="font-tini text-md text-left">{description}</p>
                </div>
                <div className="flex items-start gap-2 justify-start">
                    <Link target="_blank" to={`${externalLink && externalLink ? externalLink : "https://github.com/jha-niraj/Small-React-Projects/tree/master/src/projects"}`} className="bg-black p-2 w-32 text-center text-white rounded-lg hover:bg-gray-800 transition-all duration-300">View Code</Link>
                    <button onClick={() => navigate(`${navigateTo}`)} className="bg-black p-2 w-32 text-white rounded-lg hover:bg-gray-800 transition-all duration-300">View Project</button>
                </div>
            </div>
        </div>
    )
}