import Card from "./Card";
import "./Experience.css";

import QB from "../images/qbuild.svg";
import SLX from "../images/shoplogix.svg";
import SS from "../images/senstar.svg";

const qb1 = {
    image: QB,
    company: "QBuild",
    date: "Jan 2021 - Apr 2021",
    role: "Application Developer",
    description: [
        "Designed new features and pages for our in-house CRM solution",
        "Overhauled SQL Server View and Stored Procedure implementations leading to 30 times improvements in data fetching speeds",
        "Updated .NET codebase with better usage of OOP paradigms such as inheritance and polymorphism increasing maintainability and readability"
    ]
}

const qb2 = {
    image: QB,
    company: "QBuild",
    date: "Sep 2021 - Dec 2021",
    role: "Application Developer",
    description: [
        "Developed the company’s Engineering Change Notice management web app system",
        "Revamped initial load with asynchronous logic in C# to improve loading performance by 15 times",
        "Created a responsive image upload feature which processed files into SQL Server in under 500ms",
        "wBuilt a fully fledged comments section using Telerik UI, complete with email notifications and mentions"
    ]
}

const slx = {
    image: SLX,
    company: "Shoplogix",
    date: "May 2022 - Aug 2022",
    role: "Software Developer",
    description: [
        "Contributed to the development of our manufacturing data visualization software",
        "Created and validated unit tests in Jest and Enzyme, achieving 96% code coverage over 5+ features",
        "Built 5+ API endpoints in C# using Nancy, fetching data from PostgreSQL with response times under 50ms",
        "Developed a settings management system with inheritance and overriding for over 10 views, taking advantage of tree and map data structures",
        "Synthesized a React component to parse 10+ custom URL parameters, simplifying product deployment to clients"
    ]
}

const ss = {
    image: SS,
    company: "Senstar",
    date: "Jan 2023 - Apr 2023",
    role: "Software Developer",
    description: ["Current position"]
}

const Experience = () => {
    return (
        <div id="experience" className="experience-container">
            <div className="experience-title">Experience</div>
            <div className="experience-card-holder">
                <Card {...qb1}></Card>
                <Card {...qb2}></Card>
                <Card {...slx}></Card>
                <Card {...ss}></Card>
            </div>
        </div>
    );
}

export default Experience;