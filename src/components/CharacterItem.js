import customStyle from '../css/Common.module.css';

function CharacterItem({ character }) {

    const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (
        <div>
            <h3>캐릭터의 ID : { character.id }</h3>
            <h3>캐릭터의 이름 : { character.name }</h3>
            <img src={ imageUrl }></img>

        </div>
    );
}

export default CharacterItem;