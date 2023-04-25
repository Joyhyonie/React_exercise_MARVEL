import customStyle from '../css/Common.module.css';

function CharacterItem({ character }) {

    const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (
        <div>
            <h2>{ character.name }</h2>
            <img src={ imageUrl }></img>
            <p>[{ character.id }]</p>
        </div>
    );
}

export default CharacterItem;