import { Link } from 'react-router-dom';
import customStyle from '../css/Common.module.css';

function Header() {

    return (
        <Link to="/">
            <div className={ customStyle.Header }>
                <img src="/images/logo.png"/>
            </div>
        </Link>
    );
}

export default Header;