// import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useSearchParams } from "react-router-dom";

import detailsMoviesApi from "../DetailsMoviesApi";


const MovieDetailsPage = () => {    
    const { movieId } = useParams();
     
    useEffect(() => {
        //---HTTP запрос, если нужно
        const fetchMovieDetails = async () => {
            try {                  
                const response = await detailsMoviesApi(movieId);
                console.log(response);                    
                return response;
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    // if (!movies) {
    //     return <p className="text-center mt-6">Loading...</p>;
    // };
    
    return (
        <div>
            <div className="p-6">          
                <h1 className="text-3xl font-bold mb-4">{movieId.original_title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
                    alt={movieId.title}
                    className="w-96 rounded-lg mb-4"
                />
                <p className="mb-2"><span className="font-semibold">Overview:</span> {movieId.overview}</p>
                <p className="mb-2"><span className="font-semibold">Release Date:</span> {movieId.release_date}</p>
                <p className="mb-2"><span className="font-semibold">Rating:</span> {movieId.vote_average}</p>
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                <ul className="flex gap-4 mb-6">
                    <li><NavLink to="cast" className="text-blue-600 hover:underline">Cast</NavLink></li>
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