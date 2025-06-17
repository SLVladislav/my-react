import axios from "axios";



axios.defaults.baseURL = "https://api.unsplash.com";  
axios.defaults.headers.common['Authorization'] = "Client-ID 9EAxAt8Mvp0PI6gU1Y7LgJXP1cV1dF8Yl_68FbbpRUQ"
export  const  fetchArticlesWithTopic = async topic => {
    const response = await axios.get(`/search/photos?&page=1&per_page=10&query=${topic}`);   
    
    return response.data;
}