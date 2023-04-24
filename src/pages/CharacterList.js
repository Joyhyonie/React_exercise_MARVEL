import { useEffect, useState } from "react";
import { getCharacterList } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';
import CharacterItem from "../components/CharacterItem";


function CharacterList() {
    
    const [characterList, setCharacterList] = useState();

    useEffect(
        ()=> {
            getCharacterList()
                .then(data => {setCharacterList(data)})
        },[]
    )

    console.log(characterList);


    return (
        <div className={ customStyle.CharacterCard }>
            { characterList && characterList.map(character => <CharacterItem character={ character } key={ character.id }/>)}
        </div>
    );
}

export default CharacterList;