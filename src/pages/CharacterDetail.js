import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';
import CharacterEvent from "../components/CharacterEvent";

function CharacterDetail() {

    const { id } = useParams();
    console.log(id);

    const [detail, setDetail] = useState();

    useEffect(
        ()=> {
            getCharacterDetail(id)
                .then(data => setDetail(data));
        },[]
    );

    console.log(detail)

    return(
        <>
            <h1 className={ customStyle.Subject }>THIS CHARACTER'S EVENT</h1>
            <div className={ customStyle.CharacterEvent }>
            { detail && detail.map(event => <CharacterEvent event={ event } key={ event.id }/>)}
            </div>
        </>
    );
}

export default CharacterDetail;