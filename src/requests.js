const API_KEY = "8858cb72014b2b1f433ed39e60ae4cb4"; 

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/trending/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/trending/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/trending/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;