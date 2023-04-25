import { Link, NavLink } from 'react-router-dom';
import customStyle from '../css/Common.module.css';

function Navbar() {

    const linkStyle = { textDecoration: "none" }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={ customStyle.Navbar } >
                <Link to="characters" style={ linkStyle }><div>CHARACTERS</div></Link>
                <Link to="comics" style={ linkStyle }><div>COMICS</div></Link>
            </div>
            <img 
                src="/images/totop.png" 
                className={ customStyle.ToTop } 
                onClick={ handleScrollToTop }
            />
        </>
    );
}

export default Navbar;