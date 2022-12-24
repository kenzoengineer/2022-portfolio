import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

interface CardProps {
    image: string,
    company: string,
    date: string,
    role: string,
    description: string[]
}

const Card = (props: CardProps) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="card-image" src={props.image}></img>
            </div>
            <div className="card-content">
                <div className="card-date">{props.date}</div>
                <div className="card-title">{props.company}</div>
                <div className="card-role">{props.role}</div>
                <div className="card-list">
                    {props.description.map(x => <div className="card-item">{"- " + x}</div>)}
                </div>
            </div>
        </div>
    );
}

export default Card