import React, { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("apparel");
  const [catNb, setCatNb] = useState(0);
  const [catName, setCatName] = useState("Landmarks");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCatNb={setCatNb}
                setCategory={setCategory}
                setCatName={setCatName}
              />
            }
          ></Route>
          <Route
            path="/game"
            element={
              <Game catNb={catNb} category={category} catName={catName} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
