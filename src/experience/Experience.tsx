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
        "Designed new features and pages for the in-house CRM solution",
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
        "Developed an Engineering Change Notice management web app system",
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
        "Contributed to the development of our manufacturing data visualization software",
        "Created and validated unit tests in Jest and Enzyme, achieving 96% code coverage over 5+ features",
        "Built 5+ API endpoints in C# using Nancy, fetching data from PostgreSQL with response times under 50ms, boosting page metrics on 20+ pages",
        "Developed a settings management system with inheritance and overriding for over 10 views, taking advantage of tree and map data structures, greatly improving ease of configuration",
        "Synthesized a React component to dynamically handle 100+ routing configurations simplifying future developement"        
    ]
}

const ss = {
    image: SS,
    title: "Senstar",
    small: "Jan 2023 - Apr 2023",
    subtitle: "Software Developer",
    description: [
        "Advanced the C# based desktop surveillance video management client",
        "Integrated a digital hardware I/O device into the client with reusable interfaces and endpoints in order to allow for total control of third party rules, alarms and commands",
        "Built a generic upgrade pipeline to upgrade old hardware device implementations to newer integrations stored in PostgreSQL and SQL Server, increasing client security and feature adoption",
        "Upgraded a TCP-based security system event handler to naively support 100+ concurrent connections using multi threaded sockets, greatly simplifying configuration by the end user"
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