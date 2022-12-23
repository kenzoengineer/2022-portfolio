import "./BadgeContainer.css"

interface BadgeProps {
    text: string[];
}

const BadgeContainer = (props: BadgeProps) => {
    return (
        <div className="badge-container">
            {props.text.map(x => <div className="badge">{x}</div>)}
        </div>
    )
}

export default BadgeContainer;