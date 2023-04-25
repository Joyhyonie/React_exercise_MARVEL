import { useEffect, useState } from "react";
import { getCharacterList } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';
import CharacterItem from "../components/CharacterItem";
import { useNavigate } from "react-router-dom";


function CharacterList() {
    
    const [characterList, setCharacterList] = useState();
    const [searchValue, setSearchValue] = useState();

    const navigate = useNavigate();

    useEffect(
        ()=> {
            getCharacterList()
                .then(data => {setCharacterList(data)})
        },[]
    )

    console.log(characterList);

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickHandler = () => {
        navigate(`/characters/search?characterNameStartWith=${ searchValue }`)
    }

    return (
        <>
            <h1 className={ customStyle.Subject }>ALL CHARACTERS</h1>
            <div class={ customStyle.SearchBox }>
            <input 
                type="text" 
                value={ searchValue }
                onChange={ onChangeHandler }
            />
            <button onClick={ onClickHandler }>SEARCH</button>
            </div>
            <div className={ customStyle.CharacterCard }>
                { characterList && characterList.map(character => <CharacterItem character={ character } key={ character.id }/>)}
            </div>
        </>
    );
}

export default CharacterList;