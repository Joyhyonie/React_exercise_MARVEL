import { useParams } from "react-router-dom";
import { getComicDetail } from "../API/MarvelAPI";
import { useEffect, useState } from "react";
import customStyle from '../css/Common.module.css';
import CharacterItem from "../components/CharacterItem";

function ComicDetail () {

    const { id } = useParams();
    console.log(id);

    const [detail, setDetail] = useState();

    useEffect(
        ()=> {
            getComicDetail(id)
                .then(data => setDetail(data));
        },[]
    );

    console.log(detail)

    return (
        <>
            <h1 className={ customStyle.Subject }>ALL CHARACTERS IN THIS COMIC</h1>
            <div className={ customStyle.CharacterCard }>
                    { detail && detail.map(character => <CharacterItem character={ character } key={ character.id }/>)}
            </div>
        </>
    );
}

export default ComicDetail;