import Card from "../common/Card";
import "./Experience.css";

import QB from "../images/qbuild.svg";
import SLX from "../images/shoplogix.svg";
import SS from "../images/senstar.svg";

const qb1 = {
    image: QB,
    title: "QBuild",
    small: "Jan 2021 - Apr 2021",
    subtitle: "Application Developer",
    description: [
        "Overhauled SQL Server View and Stored Procedure implementations leading to 30 times improvements in data fetching speeds",
        "Created a script to parse 1000+ spreadsheets and transfer invoice data into our database vastly improving sales employee efficiency",
        "Automated creation of sales quotes in our CRM improving generation times by 60 times"
      ]
}

const qb2 = {
    image: QB,
    title: "QBuild",
    small: "Sep 2021 - Dec 2021",
    subtitle: "Application Developer",
    description: [
        "Improved an Engineering Change Notice management web app to simplify design iteration and logistics",
        "Parallelized initial data fetching with task-based logic to speed up latency by up to 15 times",
        "Created a responsive image upload feature which processed files into SQL Server in under 100ms for a seamless user experience",
        "Built an extensible comments section from scratch using Telerik UI, complete with email notifications and employee tagging"
      ]
}

const slx = {
    image: SLX,
    title: "Shoplogix",
    small: "May 2022 - Aug 2022",
    subtitle: "Software Developer",
    description: [
        "Developed an extensible settings management system in C# and TypeScript, allowing plant, area, and machine level configuration with support for overriding and inheritance massively simplifying company-wide customization",
        "Built 5+ API endpoints in C# with Nancy which fetch data from PostgreSQL, exposing per user configuration options and simplifying machine OPC data collection",
        "Synthesized a React component to dynamically handle 100+ routing combinations simplifying future development",
        "Created and validated unit tests in Jest and Enzyme, achieving 96% code coverage over 5+ features"
      ]
}

const ss = {
    image: SS,
    title: "Senstar",
    small: "Jan 2023 - Apr 2023",
    subtitle: "Software Developer",
    description: [
        "Owned design and development of all hardware device integrations into Senstar's client allowing for seamless addition of new perimeter security hardware through a .NET C# and C++ back-end",
        "Built a reusable upgrade pipeline automatically converting legacy hardware implementations to newer integrations stored in PostgreSQL and SQL Server, increasing client security, feature adoption",
        "Enhanced a TCP-based access control security system event handler to support 100+ concurrent connections using multi-threaded sockets, allowing many clients to send security commands simultaneously",
        "Revamped a TypeScript canvas control to allow for precise pixel-level masking of video feeds, allowing a user to restrict the processing region of face recognition and license plate detection increasing speed and accuracy"
      ]
}

const experiences = [qb1, qb2, slx, ss];

const Experience = () => {
    return (
        <div id="experience" className="experience-container">
            <div className="experience-title">Experience</div>
            <div className="experience-card-holder">
                {experiences.map(x => <Card {...x}></Card>)}
            </div>
        </div>
    );
}

export default Experience;