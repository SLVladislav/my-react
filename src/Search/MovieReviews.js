import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";  
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQ2YTM0Yzg3YzdlYTNjN2U1ODNhYjVjZTZmM2JlNCIsIm5iZiI6MTY4MTMyMDMxMS4yMTcsInN1YiI6IjY0MzZlOTc3OTQ1ZDM2MDA3N2JmYzEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhaumNpBnW6adsL0L8GvMZ7Vd_WmWzHSge-heDLzdA8";

const movieReviewsApi = async movieId => {
  
   
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching details movies:', error);
    throw error;
  }
};




export default movieReviewsApi;