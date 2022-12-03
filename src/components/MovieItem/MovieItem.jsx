import { Link, useLocation } from "react-router-dom"
import { Item,Image, TitleH2, Info, Genres, Rating } from "./MovieItem.styled"
import { useState } from "react";
import { API_IMG } from "api/api";
import defaultImage from "../../Images/defaultImage.png"
import PropTypes from 'prop-types';


export const MovieItem = ({ id, posterPath, title, genres, releaseDate, rating }) => {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const location = useLocation();
  return (
    <Item>
      <Link
        to={`/movies/${id}`} state={{ from: location }}
      >
        <Image
          src={
            posterPath && isPosterLoaded
              ? `${API_IMG.IMAGE_URL}/w300${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsPosterLoaded(true)}
          width="300"
          height="450"
        />
      </Link>

      <TitleH2>{title}</TitleH2>

      <Info>
        <Genres>
          {genres} | {releaseDate.substring(0, 4)}
        </Genres>
        <Rating rating={rating} >{rating.toFixed(1)}</Rating>
      </Info>
    </Item>
  )

}


MovieItem.propTypes = { 
  id: PropTypes.number,
  posterPath: PropTypes.string ,
  title: PropTypes.string,
  genres: PropTypes.array,
  releaseDate:PropTypes.string ,
  rating:PropTypes.number ,
}