import ProjectItem from "./ProjectItem";
import superMarket from "../assets/C SuperMarket.jpg";
import airline from "../assets/cpp Airline.jpg";
import games from "../assets/Games.jpg";
import portfolio from "../assets/React Portfolio.jpg";


const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8"> 
                A taste for some of my projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-12"> 
                <ProjectItem img={superMarket} title='Supermarket' tech='C'/>
                <ProjectItem img={games} title='Games' tech='Unity C#'/>
                <ProjectItem img={portfolio} title='Portfolio' tech='React'/>
                <ProjectItem img={airline} title='Airline' tech='CPP'/>
            </div>

        </div>
    );
};

export default Projects;
