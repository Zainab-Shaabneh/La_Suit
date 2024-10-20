import './App.css'
import { Route, Routes } from "react-router-dom";
//import Header from "./components/MainPage/Header";
//import PromoCard from "./components/MainPage/PromoCard";
//import ServicesList from "./components/MainPage/ServicesList";
import VariantButtonGroup from "./components/ServicePage/Services";
import ServicesList from './components/MainPage/ServicesList';
import Header from './components/MainPage/Header'
 function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/ServicesList" element={<ServicesList />}></Route>
        <Route path="/Services" element={<VariantButtonGroup />}></Route>
      </Routes>
    </>
  );
}
export default App;
