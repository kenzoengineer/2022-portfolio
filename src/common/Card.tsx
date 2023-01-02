import "./Card.css";
import CardProps from "../interfaces";
import Icon from "./Icon";

const Card = (props: CardProps) => {
    return (
        <div className="card-container">
            {props.image && <div className="card-image-container card-bordered">
                <img className="card-image" src={props.image} alt="logo"></img>
            </div>}
            <div className="card-content">
                <div className="card-date">{props.small}</div>
                <div className="card-title-area">
                    <div className="card-title">{props.title}</div>
                    {props.href && <span className="card-icon"><Icon type="fab" icon="github" href={props.href}></Icon></span>}
                </div>
                <div className={`card-role ${!props.image && "card-bordered"}`}>{props.subtitle}</div>
                <div className="card-list">
                    {props.description.map(x => <div className="card-item">{"- " + x}</div>)}
                </div>
            </div>
        </div>
    );
}

export default Card