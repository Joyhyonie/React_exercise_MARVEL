import { Link } from 'react-router-dom';

function ComicItem ({ comic }) {

    const linkStyle = { color: "black" }

    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <Link to={ `/comics/${ comic.id }` } style={ linkStyle }>
        <div>
            <h2>{ comic.title }</h2>
            <img src={ imageUrl }></img>
        </div>
        </Link>
    );
}

export default ComicItem;