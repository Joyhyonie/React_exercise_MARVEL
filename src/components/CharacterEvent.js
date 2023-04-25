function CharacterEvent({ event }) {

    const imageUrl = `${event.thumbnail.path}.${event.thumbnail.extension}`;

    return (
        <div>
            <h1>{ event.title }</h1>
            <img src={ imageUrl }></img>
            <p>{ event.description }</p>
        </div>
    );
}

export default CharacterEvent;