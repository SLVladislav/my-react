import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";

import { Route, Routes } from "react-router-dom";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Navigation from "./Navigation";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import NotFound from "pages/NotFound";
import { AppPhoneBook } from "./Phonebook/AppPhoneBook/AppPhoneBook";





export default function App() {  
  
  

  return (
    <div>
      <AppPhoneBook/>
      {/* <AppAsyncRedux/> */}
    </div>
    // <Routes>
    //   <Route path="/" element={<Navigation/>}>
    //     <Route index element={<HomePage />} />
    //     <Route path="movies" element={<MoviesPage />} />
    //     <Route path="movies/:movieId" element={<MovieDetailsPage />} >
    //       <Route path="cast" element={ <MovieCast/>} />
    //       <Route path="reviews" element={ <MovieReviews/>} />
    //     </Route>
    //     <Route path="*" element={<NotFound/>} />
    //   </Route>
    // </Routes>
  )
}



