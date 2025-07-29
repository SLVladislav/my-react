import { useEffect, useState } from "react";
import trendingMoviesApi from "../Search/TrandingMoviesApi";
import MovieList from "../components/MovieList";

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
            <MovieList movies={movies} />
        </div>
    )
};
export default HomePage;

