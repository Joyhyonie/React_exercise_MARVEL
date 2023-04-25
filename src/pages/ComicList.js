import { useEffect, useState } from "react";
import { getComicList } from "../API/MarvelAPI";
import customStyle from '../css/Common.module.css';

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
        <div className={ customStyle.ComicItem }>
            { comicList && comicList.map(comic => <ComicItem comic={ comic } key={ comic.id }/>)}
        </div>
    );
}

export default ComicList;