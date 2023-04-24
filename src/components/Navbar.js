import customStyle from '../css/Common.module.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className={ customStyle.Navbar } >
            <div>ALL CHARACTERS</div>
            <div>COMICS</div>
        </div>
    );
}

export default Navbar;