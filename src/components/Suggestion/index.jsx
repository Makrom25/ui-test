import React from "react";
import people from "../../assets/img/bg-people.png";

const Suggestion = () => {
  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      <img
        sizes="(min-width: 750px) 1440px, 100vw"
        className="banner__background"
        src={people}
        alt=""
        role="none"
      />
      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta">Submit a name</button>
      </div>
    </aside>
  );
};

export { Suggestion };
