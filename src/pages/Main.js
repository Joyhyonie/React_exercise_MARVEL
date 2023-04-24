import customStyle from '../css/Common.module.css';
import { Link } from "react-router-dom";

function Main() {

    return (
        <Link to="https://developer.marvel.com/">
        <div className={ customStyle.Main }>
            <img src="/images/marvel1.gif"/>
            <img src="/images/marvel2.gif"/>
            <img src="/images/marvel3.gif"/>
            <img src="/images/marvel4.gif"/>
            <img src="/images/marvel5.gif"/>
            <img src="/images/marvel6.gif"/>
            <img src="/images/marvel7.gif"/>
            <img src="/images/marvel8.gif"/>
            <img src="/images/marvel9.gif"/>
            <img src="/images/marvel10.gif"/>
        </div>
        </Link>
    );
}

export default Main;