import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);

interface IconProps {
    type: IconPrefix;
    icon: IconName;
    href: string;
    content?: string;
}

const Icon = (props: IconProps) => {
    return (
        <div className="Icon-Container" onClick={() => { window.open(props.href) }}>
            <div className="Icon-Background"></div>
            <FontAwesomeIcon className="Icon" icon={[props.type, props.icon]} />
            <div>{props.content}</div>
        </div>
    );
}

export default Icon