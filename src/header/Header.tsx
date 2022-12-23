import './Header.css';
import Icon from '../common/Icon';

const image = require("./header_image.jpg");

const Header = () => {

    return (
        <div id="home" className="header-container">
            <div className="left-half">
                <div className="text-container">
                    <div className="small-name">江华燚</div>
                    <div className="big-name">KEN JIANG</div>
                    <div className="tagline">Computer Engineering @ UWaterloo</div>
                </div>
                <div className="icon-container">
                    <Icon type="fab" icon="linkedin" href="https://www.linkedin.com/in/ken-jiang/" />
                    <Icon type="fab" icon="github" href="https://github.com/kenzoengineer" />
                    <Icon type="fab" icon="instagram" href="https://www.instagram.com/kenzoengineer/" />
                    <Icon type="fab" icon="artstation" href="https://www.artstation.com/kenzoengineer" />
                </div>
            </div>
            <div className="right-half">
                <div className="animated-banner">
                    <div className="stripe-1"></div>
                    <div className="stripe-2"></div>
                    <div className="stripe-3"></div>
                    <div className="stripe-4"></div>
                    <div className="stripe-5"></div>
                </div>
                <div className="portrait-glow"></div>
                <img src={image} className="big-portrait" alt="Ken's Portrait"></img>
            </div>
        </div >
    );
}

export default Header;