import React from "react";
import LandingPage from "./components/landing-page";
import Postview from "./components/postview";
import Upload from "./components/upload";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Nav from "./components/nav";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/postview" element={<><Nav/><Postview/></>}/>
            <Route path="/upload" element={<><Nav/><Upload/></>}/>
          </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
