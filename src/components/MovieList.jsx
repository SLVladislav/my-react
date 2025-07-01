import { NavLink } from "react-router-dom";

const MovieList = ({movies}) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
           <li key={movie.id} className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
           <NavLink to={`/movies/${movie.id}`} rel="noopener noreferrer" movies={movies}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.title} className="w-full h-72 object-cover"/>
                    <p className="mt-2 text-center font-semibold text-lg px-2 py-1 truncate">{movie.original_title}</p>
           </NavLink>
       </li>
     ))}
        
    </ul>
    )
}
export default MovieList;