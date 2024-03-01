import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Create from "./components/Create"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
