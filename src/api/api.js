import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const API_IMG = {
  IMAGE_URL: 'https://image.tmdb.org/t/p',
}

export const fetchFilms = async page => {
    const response = await axios.get('/trending/movie/week', {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
        page: page
      }
    })
    
    return response;
};

export const fetchFilmsByGenre = async () => {
    const response = await axios.get('/genre/movie/list', {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
        
      }
    })
    
  return response ;
};

export const fetchFilmsById = async (id) => {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
    return response.data;
};
export const fetchFilmsByExternalId = async (id) => {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
    return response.data;
};

export const fetchFilmsByCredits = async (id) => {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
    return response.data.cast;
};

export const fetchFilmsReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
  return response.data.results;
};

export const fetchFilmsByQuery = async (query, page) => {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
        query: query,
        page: page,
      }
    })
  
  return response;
};

export const fetchVideo = async id => {
  const response = await axios.get(`/movie/${id}/videos`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    }
  );
  return response.data.results;
};


  


