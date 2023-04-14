import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Qoute from "./Components/Qoute";
import Tags from "./Components/Tags";
import Bookmark from "./Components/Bookmark";
import Navbar from "./Navbar";
function App() {
  return (
    <div class="bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden  ...">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/random" element={<Qoute />} />

        <Route path="/tag" element={<Tags />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
