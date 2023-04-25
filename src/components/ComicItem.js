import { Link } from 'react-router-dom';

function ComicItem ({ comic }) {

    const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    return (
        <Link to={ `/comics/${ comic.id }` }>
        <div>
            <h2>{ comic.title }</h2>
            <img src={ imageUrl }></img>
        </div>
        </Link>
    );
}

export default ComicItem;