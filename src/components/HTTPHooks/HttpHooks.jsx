import axios from "axios";

import { useEffect,  useState } from "react";
import { ArticlesList } from "./ArticlesList";
import { fetchArticlesWithTopic } from "../../articles-api";
import { SearchForm } from "./SearchForm";

export const HttpState = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    // useEffect(() => {
    //     async function fetchArticles() {
    //         try {
    //             setLoading(true);
    //             setError(false);
    //             const data = fetchArticlesWithTopic("css");                
    //             setArticles(data);
                
    //         } catch (error) {
    //             setError(true);
    //             console.error(error);
    //         } finally {
    //             setLoading(false);
    //         }
            
    //     }
    //     fetchArticles();
    // }, [])

    const handleSearch = async topic => {
        try {
            setArticles([]);
            setError(false);
            setLoading(true);
            const data = await fetchArticlesWithTopic(topic);
            setArticles(data);
        } catch (error) {
            console.error(error);            
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            {/* <h1>Laters articles</h1> */}
            <SearchForm onSearch={ handleSearch} />
            {loading && <p>Loading data, please wait...</p>}
            {error && (
                <p>Whoops, something went wrong! Please try reloading this page!</p>
            )}
            {articles.length > 0 && <ArticlesList items={articles} />}
            
        </div>
    );
}