import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    
    <div className="App">
      <div className="header">
        <Navbar/>
      </div>
      <div className="main">
        <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
