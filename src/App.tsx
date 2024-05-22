import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./features/Main";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>Ini Footer</footer>
    </BrowserRouter>
  );
}

export default App;
