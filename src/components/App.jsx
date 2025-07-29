// import HomePage from "pages/HomePage";
// import MoviesPage from "pages/MoviesPage";

import { Route, Routes } from "react-router-dom";
// import MovieDetailsPage from "pages/MovieDetailsPage";
import Navigation from "./Navigation";
// import MovieCast from "./MovieCast";
// import MovieReviews from "./MovieReviews";
import NotFound from "pages/NotFound";
import { AppPhoneBook } from "./Phonebook/AppPhoneBook/AppPhoneBook";
import { PrivateRoute } from "@/PrivateRouter/PrivateRouter";
// import { PrivateRoute } from "PrivateRouter/PrivateRouter";








export default function App() {  
  
  

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<PrivateRoute ><AppPhoneBook/></PrivateRoute>} />
        {/* <Route path="register" element={< />} />
       <Route path="login" element={< />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}



