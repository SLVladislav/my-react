import Layout from "./Layout";
import Dogs from "pages/Dogs";
import DogsDetails from "pages/DogsDetails";
import Home from "pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";




export default function App() {
  
 
 

  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogsDetails />} />
      </Route>
    </Routes>
  );
}



