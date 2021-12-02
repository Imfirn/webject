import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Home from './components/pages/HomePage/Home';
import MovieimgNow from './components/movieDataNow';
import Buyticket from './components/pages/Buyticket/Buyticket';
import axios from "axios";

function App() {
  const [nameMovie, setNameMovie] = useState(null);
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/Detail/").then((res) => {
      setNameMovie(res.data);
    });
  }, []);
  if (!nameMovie) return "error";
  return (
    <div id="main">
    <Router>
      <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/Buyticket/:id" element={<Buyticket data={nameMovie}/>}/>      
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
