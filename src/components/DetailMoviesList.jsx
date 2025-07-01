const DetailMoviesList = ({movie}) => {
    return (
        <div className="p-6">            
                <div key={movie.id}>
                    <h1 className="text-3xl font-bold mb-4">{movie.original_title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                        alt={movie.title}
                        className="w-96 rounded-lg mb-4"
                    />
                    <p className="mb-2"><span className="font-semibold">Overview:</span> {movie.overview}</p>
                    <p className="mb-2"><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {movie.vote_average}</p>
                </div>
            
        </div>
    );
};
export default DetailMoviesList;