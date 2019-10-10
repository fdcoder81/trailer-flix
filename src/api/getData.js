const key = "31e3c537946929f18904b39eeb3f7e1a";

export const getMoviesNow = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1'`
  );
  const data = await response.json();
  return data.results;
};

export const getTvSeries = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1'`
  );
  const data = await response.json();
  return data.results;
};

export const getMoviesByGenre = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=31e3c537946929f18904b39eeb3f7e1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieID = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
  );
  const data = await response.json();
   if(data.status_code !== 34) {
    return data.results[0].key;
   } else return null;
};
