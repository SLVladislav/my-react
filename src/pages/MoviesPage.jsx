import { useState } from "react";
import searchMoviesApi from "../SearchMoviesApi";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {   
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    const updateQueryString = (evt) => {
        const idValue = evt.target.value;
        const nextParams = idValue !== "" ? {id: idValue } : {};
        setSearchParams(nextParams);
    }
 

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const searchQuery = form.elements.query.value;
        console.log(searchQuery);

        if (searchQuery.trim() === "") {
            alert("Please enter search term!");
            return;
        };

        const fetchSearchMovies = async () => {
            try {
                const data = await searchMoviesApi(searchQuery);
                console.log(data);
                setMovies(data);
            } catch (error) {
                console.log(error);
            }
        };
       
    
        fetchSearchMovies();

        form.reset();

    }
    return (
        <div>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center gap-4"
                >
                    <input
                        type="text"
                        name="query"
                        placeholder="Search films"
                        value={id ?? ""}
                        autoFocus
                        autoComplete="off"
                        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={updateQueryString}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div>
                <MovieList movies={movies}/>              
            </div>
        </div>
    );
};
export default MoviesPage;