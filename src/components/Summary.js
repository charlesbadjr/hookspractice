import React from 'react';



const Summary = props => {
    return (
        <div>
            <h1> {props.name} </h1>
            <p>
                Gender: <span className="sumary__output"> {props.gender} </span>
            </p>
            <p>
                Height: <span className="sumary__output"> {props.height} </span>
            </p>
            <p>
                Hair Color / Skin Color: {' '}
                 <span className="sumary__output"> {props.hairColor} </span>/{ ' ' }
                 <span className="sumary__output"> {props.skinColor} </span>
            </p>
            <p>
                Appears in # Movies:{ ' ' }
                <span className="summary__output"> {props.movieCount} </span>
            </p>
        </div>
    );
};

export default Summary;
