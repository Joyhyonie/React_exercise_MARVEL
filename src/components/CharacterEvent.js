function CharacterEvent({ event }) {

    const imageUrl = `${event.thumbnail.path}.${event.thumbnail.extension}`;

    return (
        <div>
            <h2>{ event.title }</h2>
            <img src={ imageUrl }></img>
            <p>{ event.description }</p>
        </div>
    );
}

export default CharacterEvent;