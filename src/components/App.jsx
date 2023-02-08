import React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import "../styles/main.scss";
import { Aside } from "./Aside";
import { Suggestion } from "./Suggestion";
import { Footer } from "./Footer";
import { ListOfCards } from "./ListOfCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="max-centered">
        <Aside />
        <ListOfCards />
        <Suggestion />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </>
  );
};

export { App };
