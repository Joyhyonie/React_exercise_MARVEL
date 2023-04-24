import customStyle from '../css/Common.module.css';

function Header() {

    return (
        <div className={ customStyle.Header }>
            <img src="/images/logo.png"/>
        </div>
    );
}

export default Header;