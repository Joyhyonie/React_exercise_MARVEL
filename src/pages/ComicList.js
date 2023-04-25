import { useEffect, useState } from "react";
import { getComicList } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';
import ComicItem from "../components/ComicItem";

function ComicList() {

    const [comicList, setComicList] = useState();

    useEffect(
        () => {
            getComicList()
                .then(data => {setComicList(data)})
        },[]
    )

    console.log(comicList);

    return (
        <>
            <h1 className={ customStyle.Subject }>ALL COMICS</h1>
            <div className={ customStyle.ComicItem }>
                { comicList && comicList.map(comic => <ComicItem comic={ comic } key={ comic.id }/>)}
            </div>
        </>
    );
}

export default ComicList;