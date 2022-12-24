import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Themeswap.css"

const Themeswap = () => {
    // 0 - Dark
    // 1 - Light
    const [theme, setTheme] = useState(0);

    let r = document.querySelector(":root") as HTMLElement;
    let a = document.querySelector(".swap-container") as HTMLElement;
    const swap = () => {
        setTheme(theme ^ 1);
        if (!theme) {
            r.style.setProperty("--background", "#FFFCDC");
            r.style.setProperty("--tertiary", "#F5E8C4");
            r.style.setProperty("--secondary", "#808080");
            r.style.setProperty("--primary", "#282c34");
            r.style.setProperty("--brightness", "0");
            a.style.setProperty("animation", "10s linear 1s infinite spin");
        } else {
            r.style.setProperty("--background", "#101215");
            r.style.setProperty("--tertiary", "#141619");
            r.style.setProperty("--secondary", "#a6acb8");
            r.style.setProperty("--primary", "#e2e7ec");
            r.style.setProperty("--brightness", "1");
            a.style.setProperty("animation", "5s ease-in-out 1s infinite wane");
        }
    }

    return (
        <div className="swap-container" onClick={swap}>
            <FontAwesomeIcon icon={theme ? "sun" : "moon"}></FontAwesomeIcon>
        </div>
    );
}

export default Themeswap;