import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Create from "./components/Create"
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <NavBar 
        drawerWidth ={myWidth}
        content ={
          <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
