import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("s"));
    
    // useEffect(() => {
    //     //---HTTP запрос, если нужно
    // }, [])
    return (
        <div>
            <input type="text" />
            <ul>{["dog-1", "dog-2", "dog-3", "dog-4", "dog-5"].map((dog) => {
                return (
                    <li key={dog}>
                        <Link to={`${dog}`}>{dog}</Link>
                    </li>
                )
            })}</ul>
        </div>
    );
};
export default MoviesPage;