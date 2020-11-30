import React from "react";

// import pages
import Home from "./pages/Home";

//import style
import GlobalStyle from './GlobalStyle'
//animation
import {AnimatePresence} from 'framer-motion';
function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <GlobalStyle/>
      <Home />
      </AnimatePresence>
      
    </div>
  );
}

export default App;
