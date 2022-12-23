import React from "react";
import "./JokeCard.css";

const JokeCard = (props) => {
    return (
        <>
        <div className="joke-card">{props.quote}</div>
        </>
    )
}

export default JokeCard;