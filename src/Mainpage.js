import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import HomeView from "./views/HomeView";
import QuoteView from "./views/QuoteView";
import smooth from "./utils/smooth";
import link from "./utils/link"

const App = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);
  
   return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contact" element={<QuoteView />} />           
        </Routes>
    </BrowserRouter>
    
    );
};

export default App;
