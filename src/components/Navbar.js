import { Link, NavLink } from 'react-router-dom';
import customStyle from '../css/Common.module.css';

function Navbar() {

    const linkStyle = { textDecoration: "none" }

    return (
        <div className={ customStyle.Navbar } >
            <Link to="characters" style={ linkStyle }><div>CHARACTERS</div></Link>
            <Link to="comics" style={ linkStyle }><div>COMICS</div></Link>
        </div>
    );
}

export default Navbar;