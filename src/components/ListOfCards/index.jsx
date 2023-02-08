import React from "react";
import { Card } from "../Card";
import { data } from "../../../data.json";

const ListOfCards = () => {
  return (
    <ul>
      {data.map((data) => (
        <li key={data.name}>
          <Card {...data} />
        </li>
      ))}
    </ul>
  );
};

export { ListOfCards };
