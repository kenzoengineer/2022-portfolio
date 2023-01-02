import "./Projects.css";
import Card from "../common/Card"
import CardProps from "../interfaces"

const prj_1: CardProps = {
    image: "",
    title: "TextTrack",
    small: "MongoDB, Node.js, Discord.js",
    subtitle: "Phrase Frequency Tracking and Visualizing Discord Bot",
    description: [
        "Used MongoDB's document based storage for flexible schema, aiding in evolvability",
        "Leveraged quickchart.js to generate procedural web based charts",
        "Build with extensiblility in mind to allow for sharding and distribution of load over multiple nodes",
        "Deployed on AWS's EC2 for high uptime"
    ],
    href: "https://github.com/kenzoengineer/TextTracker"
}

const prj_2: CardProps = {
    image: "",
    title: "inPrint",
    small: "Java, Node.js",
    subtitle: "Biometric Authenticated Password Autofilling App",
    description: [
        "Used fingerprint data from the phone to authenticate users more securely than a master password",
        "Connected the app with a chrome extension to autofill credentials drastically speeding up login time",
        "Designed with UI in mind prioritizing a polished product to present to judges",
        "Won 2nd place overall at MasseyHacks"
    ],
    href: "https://github.com/cneryx/InPrint"
}

const prj_3: CardProps = {
    image: "",
    title: "Portfolio",
    small: "Typescript, React, CSS",
    subtitle: "Personal Website, Showcasing Experiences and Skills",
    description: [
        "Created reusable and extensible components in Typescript",
        "Utilized interfaces and strong typing to ensure consistency between files",
        "Designed components and styling from scratch for a personalized look",
        "Programmed with responsiveness in mind allowing for viewing on all platforms"
    ],
    href: "https://github.com/kenzoengineer/2022-portfolio"
}

const projects: CardProps[] = [prj_1, prj_2, prj_3];

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <div className="projects-title">Projects</div>
            <div className="project-card-holder">
                {projects.map(x => <Card {...x}></Card>)}
            </div>
        </div>
    );
}

export default Projects;