import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import CheckErrorInCode from "./components/CheckErrorInCode";
import CheckTimeComplexity from "./components/CheckTimeComplexity";
import Article from "./components/Article";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/code-error-finder" element={<CheckErrorInCode />} />
        <Route path="/check-complexity" element={<CheckTimeComplexity />} />
        <Route path="/article-generator" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
