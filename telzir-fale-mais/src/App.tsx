import React from "react";
import Home from "./pages/home/home";
import GlobalStyle from "./styles/global";

const App: React.FC = () =>{
  return (
    <>
      <Home/>
      <GlobalStyle/>    
    </>
  ); 
  
};

export default App;