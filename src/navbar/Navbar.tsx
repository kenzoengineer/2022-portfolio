import "./Navbar.css";

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
        <div className="resume-button">Resume</div>
    )
}

const Navbar = () => {
    const resumeClick = () => {
        window.open("");
    }
    return (
        <div className="navbar-container">
            <NavbarItem index="a" text="Home" href="#home"></NavbarItem>
            <NavbarItem index="b" text="About" href="#intro"></NavbarItem>
            <NavbarItem index="c" text="Experience" href="#intro"></NavbarItem>
            <ResumeItem></ResumeItem>
        </div>
    );
}

export default Navbar;