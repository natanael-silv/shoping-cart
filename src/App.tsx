import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoriesName" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
