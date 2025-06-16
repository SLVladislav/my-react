
import { fetchArticlesWithTopic } from "../../photoSearch-api";
import { SearchBar } from "./SearchBar/SearchBar";

export const AppPhotoSearch = () => {
    const response = fetchArticlesWithTopic()
    console.log(response.data);
    

    return (
        <div>
            <SearchBar/>
        </div>
    );
}



// Access Key  9EAxAt8Mvp0PI6gU1Y7LgJXP1cV1dF8Yl_68FbbpRUQ

// Secret key rzlqtADLYs6uw7EuVt0_nI3bfNQOXMKTsGMk-WJdcz4

// Application ID 764935