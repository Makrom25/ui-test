import React from "react";
import thumbsUp from "../../assets/img/thumbs-up.svg";
import thumbsDown from "../../assets/img/thumbs-down.svg";

const Card = ({ name, description, picture, votes }) => (
  <div className="main-container">
    <aside className="card-container">
      <h1 className="card-name">{name}</h1>
      <p className="card-description">{description}</p>
      <img src={picture} alt="card image" className="card-img" />

      <button className="card-button-up" aria-label="thumbs up">
        <img src={thumbsUp} alt="thumbs up" />
      </button>
      <button className="card-button-down" aria-label="thumbs down">
        <img src={thumbsDown} alt="thumbs up" />
      </button>
      <button className="vote-button">Vote Now</button>
      <span className="thumbs-up--gaurage-bar">
        <img src={thumbsUp} alt="" />
      </span>
      <span className="thumbs-down--gaurage-bar">
        <img src={thumbsDown} alt="" />
      </span>
    </aside>
  </div>
);

export { Card };
