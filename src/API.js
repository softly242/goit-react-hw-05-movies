const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a55c18ac154a966c26e6806cf2228fab';

export const getMovieTrending = () => {
  return fetch(
    `${URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Нет фильмов с таким названием'));
  });
};

export const getMovieSearch = (query, page) => {
  return fetch(
    `${URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Нет фильмов с таким названием'));
  });
};

export const getMovieId = id => {
  return fetch(`${URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Нет фильмов с таким названием'));
    }
  );
};

export const getMovieCast = id => {
  return fetch(`${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Нет фильмов с таким названием'));
    }
  );
};

export const getMovieReviews = id => {
  
  return fetch(`${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Нет фильмов с таким названием'));
    }
  );
};