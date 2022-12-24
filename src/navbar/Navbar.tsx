import "./Navbar.css";
import PDF from "./External-02.pdf";
import Themeswap from "../themeswap/Themeswap";

interface NavbarItemProps {
    index: string;
    text: string;
    href: string;
}

const NavbarItem = (props: NavbarItemProps) => {
    return (
        <a className="navbar-item" href={props.href}>
            <span className="number">{`${props.index})`}</span>{props.text}
        </a>
    );
}

const ResumeItem = () => {
    return (
        <a href={PDF} target="_blank" className="resume-button">Resume</a>
    )
}

const Navbar = () => {
    return (
        <div className="navbar-container">
            <NavbarItem index="a" text="Home" href="#home"></NavbarItem>
            <NavbarItem index="b" text="About" href="#intro"></NavbarItem>
            <NavbarItem index="c" text="Experience" href="#experience"></NavbarItem>
            <NavbarItem index="d" text="Projects" href="#projects"></NavbarItem>
            <ResumeItem></ResumeItem>
            <Themeswap></Themeswap>
        </div>
    );
}

export default Navbar;