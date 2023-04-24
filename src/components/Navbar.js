import customStyle from '../css/Common.module.css';

function Navbar() {

    return (
        <div className={ customStyle.Navbar } >
            <div>ALL CHARACTERS</div>
            <div>COMICS</div>
        </div>
    );
}

export default Navbar;