import Head from "next/head";
import Category from "../components/Category";
import Footer from "../components/Footer";
import React from "react";

const articles = [
  {
    name: "Why the Bengals Should've Won",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "Women's Soccer: England v.s. USA",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "Spikeball: High Tech's Official Sport",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
  {
    name: "The NBA should Eliminate the 3-Pointer",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol... (read more)",
  },
];

function App() {
  return (
    <>
      <Category title="Sports" articles={articles} />

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
