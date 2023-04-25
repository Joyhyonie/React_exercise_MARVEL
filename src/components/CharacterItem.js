import { Link } from 'react-router-dom';

function CharacterItem({ character }) {

    const linkStyle = { color: "black" }

    const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (
        <Link to={ `/characters/${ character.id }` } style={ linkStyle }>
        <div>
            <h2>{ character.name }</h2>
            <img src={ imageUrl }></img>
        </div>
        </Link>
    );
}

export default CharacterItem;