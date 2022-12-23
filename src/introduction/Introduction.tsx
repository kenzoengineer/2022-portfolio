import Icon from "../common/Icon"
import BadgeContainer from "./BadgeContainer";
import "./Introduction.css"

const languages = ["C", "C++", "C#", "Python", "Java", "Javascript", "Typescript", "HTML", "CSS"];
const libs = ["React", ".NET", "Node", "Jest", "Node", "MSSQL", "PostgreSQL", "MongoDB", "Stylus", "SASS"];
const tools = ["Git", "Github", "Gitlab", "Jira", "AWS", "Docker", "Unity"];

const Introduction = () => {
    return (
        <div id="intro" className="intro-container">
            <div className="intro-content">
                <h1 className="intro-header">Hello!</h1>
                Welcome to my portfolio. My name is Ken and I am currently in my 3rd year of Computer Engineering at the University of Waterloo. I am a skilled and experienced software developer with a passion for tackling difficult problems and coming up with innovative solutions.
                <br />
                <br />
                With more than a year of internship experience, I've had the opportunity to work on a wide range of products, from small-scale in-house solutions to large scale enteprise solutions. I learn something new every day and am looking forward to beginning my first full time career when I graduate.
            </div>
            <div className="intro-experience">
                <h1>Technical Experience</h1>
                <h2>Languages</h2>
                <BadgeContainer text={languages}></BadgeContainer>
                <h2>Frameworks/Libraries</h2>
                <BadgeContainer text={libs}></BadgeContainer>
                <h2>Tools</h2>
                <BadgeContainer text={tools}></BadgeContainer>
            </div >
        </div >
    )
}

export default Introduction