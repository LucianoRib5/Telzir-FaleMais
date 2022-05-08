import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/homePage";
import FormPage from "../pages/formPage";
import ResultPage from "../pages/resultpage";
import GlobalStyle from "../styles/global";

const MainRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/formulario" element={<FormPage/>}/>
                <Route path="/formulario/resultado" element={<ResultPage/>}/>
            </Routes>
            <GlobalStyle/>
        </BrowserRouter>
    );
};

export default MainRoutes;