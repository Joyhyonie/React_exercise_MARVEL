import customStyle from '../css/Common.module.css';

function Error () {

    return (
        <div className={ customStyle.Error }>
        <h1>💀 404 ERROR - Page Not Found 💀</h1>
        </div>
    );
}

export default Error;