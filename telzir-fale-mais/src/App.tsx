import React from "react";
import FormPage from "./pages/formPage/index";
import GlobalStyle from "./styles/global";

const App: React.FC = () =>{
  return (
    <>
      <FormPage/>
      <GlobalStyle/>    
    </>
  ); 
  
};

export default App;