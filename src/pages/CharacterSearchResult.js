import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSearchCharacter } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';
import CharacterItem from "../components/CharacterItem";


function CharacterSearchResult() {

    const [searchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState();

    const navigate = useNavigate();

    const characterName = searchParams.get('characterNameStartWith');
    console.log(characterName);

    const [characterList, setCharacterList] = useState();

    useEffect(
        () => {
            getSearchCharacter(characterName)
                .then(data => {setCharacterList(data)})
        },[]
    );

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickHandler = () => {
        navigate(`/characters/search?characterNameStartWith=${ searchValue }`)
    }

    console.log(characterList)
    

    return (
        <>
            <h1 className={ customStyle.Subject }>SEARCH RESULTS AS { characterName }</h1>
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

export default CharacterSearchResult;