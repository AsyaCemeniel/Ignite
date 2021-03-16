import React from "react";
//Components and Pages
import Home from "./pages/Home";
//Style
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
