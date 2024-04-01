import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Create from "./components/Create"
import Edit from "./components/Edit"
import Delete from "./components/Delete"
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
            <Route path="/profile" element={<Profile/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/delete/:id" element={<Delete/>} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
