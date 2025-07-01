import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import movieReviewsApi from "../Search/MovieReviews";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieReview, setMovieReview] = useState([]);
    useEffect(() => {
        const fetchmovieReview = async () => {
            try {
                const response = await movieReviewsApi(movieId);
                console.log(response);
                
                setMovieReview(response);
            } catch (error) {
                console.log(error);
                throw error;
                
            }
        }
        fetchmovieReview();
    }, [movieId]);
    return (
        <div>
            <p></p>
        </div>
    )
}
export default MovieReviews;