import React from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu /> 
      <Footer />
    </>
  );
}

export default App;