// import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import detailsMoviesApi from "../Search/DetailsMoviesApi";
import DetailMoviesList from "../components/DetailMoviesList";


const MovieDetailsPage = () => {    
    const { movieId } = useParams();
    const [detailMovie, setDetailMovie] = useState([]);
     
    useEffect(() => {
        //---HTTP запрос, если нужно
        const fetchMovieDetails = async () => {
            try {      
             
                const response = await detailsMoviesApi(movieId);
                
                
                setDetailMovie(response);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        }
        fetchMovieDetails();
    }, [movieId]);  
    
    return (
        <div>
            <DetailMoviesList movie={detailMovie} />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                <ul className="flex gap-4 mb-6">
                    <li><NavLink to="cast"className="text-blue-600 hover:underline" >Cast</NavLink></li>
                    <li><NavLink to="reviews" className="text-blue-600 hover:underline">Reviews</NavLink></li>
                </ul>
                <div>
                <Outlet/>
               </div>
            </div>
        </div>
    );
}
export default MovieDetailsPage;