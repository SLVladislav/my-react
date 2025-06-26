import { useEffect, useState } from "react";
import trendingMoviesApi from "../Tmdb";


const HomePage = () => {
   const [movies, setMovies] = useState([])
   
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {              
                const results = await trendingMoviesApi();
                console.log(results);
                setMovies(results);                
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        }
        
        fetchTrendingMovies();
    }, []);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Tranding films</h2>
             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                   <li key={movie.id} className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                   <a href={`https://www.themoviedb.org/movie/${movie.id}`}  rel="noopener noreferrer">
                            <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.title} className="w-full h-72 object-cover"/>
                            <p className="mt-2 text-center font-semibold text-lg px-2 py-1 truncate">{movie.original_title}</p>
                   </a>
               </li>
             ))}
                
            </ul>
        </div>
    )
};
export default HomePage;