import React from "react";
import "./Title.css"

const Title = props => (
    <div className="title-section">
    <img src={ require('./pokemon.png') } />
        <h1>Clicky Game</h1>
        <h3>Gotta catch 'em all (but only once!)</h3>
        <p>Click on an image to earn points, but don't click on an image any more than once!</p>
    </div>
);

export default Title;