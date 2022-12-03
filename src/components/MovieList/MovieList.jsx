import { List } from "./MovieList.styled"
import { MovieItem } from "components/MovieItem/MovieItem"
import { useState, useEffect } from "react"
import { fetchFilmsByGenre } from "api/api"
import PropTypes from 'prop-types';

export const MovieList = ({ trendingFils }) => {

  const [genreList, setGenreList] = useState([])
  
  useEffect(() => {

    const getFetch = async () => {
      try {
        const result = await fetchFilmsByGenre();
        setGenreList(result.data.genres)
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();
  }, [])
  
  return (
      <List>
      {trendingFils.map(
        ({ id, poster_path, title, release_date, vote_average, genre_ids }) => {
          
          const movieGenres = genreList
            .filter((genre) => genre_ids.includes(genre.id))
            .map((genre) => genre.name)
            .join(', ')

          return (
            <MovieItem
              key={id}
              id={id}
              posterPath={poster_path}
              title={title}
              releaseDate={release_date || '\u2015'}
              rating={vote_average}
              genres={movieGenres || '\u2015'}
            />
          )
        },
      )}
    </List>
    )
}

MovieList.propTypes = { 
  trendingFils: PropTypes.array
}