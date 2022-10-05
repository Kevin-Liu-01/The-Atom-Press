import Head from "next/head";
import Category from "../components/Category";
import Footer from "../components/Footer";
import React from "react";

const articles = [
  {
    name: "Daddy Yankee is the Best Rapper",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "Black Panther 2: Wakanda Forever Trailer",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "Avatar Deserves its Sequel (And an Oscar) ",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "What is Happening to Marvel?",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
];

function App() {
  return (
    <>
      <Category title="Entertainment" articles={articles} />

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
