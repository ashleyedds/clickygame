import React from "react";
import "./PokeCard.css";

const PokeCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.catchIt(props.type)}
             className={props.currentScore === 0 ? "shake" : null}
            >
            <img alt={props.type} src={props.image} />
        </a>
        </div>
    </div>
);

export default PokeCard;