import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieCastApi from "../Search/MovieCastApi";

const MovieCast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);
    console.log(movieCast);
    

    useEffect(() => {
        const fetchMovieCast = async () => {
            try {
                const response = await movieCastApi(movieId);
                setMovieCast(response)
            } catch (error) {
                console.log(error);
                throw error;
                
            }
        }
        fetchMovieCast();
    }, [movieId]);

    return (
        <div>
            <button type="button">Go back</button>
            <ul>
                {movieCast.map((actor) => (
                    <li key={actor.id}>
                        <p>{actor.name}</p>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" />
                    </li>                    
               ))}
            </ul>
           

        </div>
    );
}
export default MovieCast;