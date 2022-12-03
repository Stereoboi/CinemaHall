import { useParams, Outlet, useLocation,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsById } from "api/api";
import { Suspense } from "react";
import { Wrapper, BackLinkItem,  } from "./MovieDetails.styled";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { MovieDetailsComponent } from "components/MovieDetailsComponent/MovieDetailsComponent";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../../utils/firebase.js'
import { UserContext } from 'components/hooks/userContext.js';
import { useContext } from 'react';


const MovieDetails = () => {
const { movieId } = useParams();
const [movieData, setMovieData] = useState(null); 
const [genres, setGenres] = useState([]);
const {userUid} = useContext(UserContext);
const location = useLocation();

const userKey = localStorage.getItem("USER_KEY");

const backLinkHref = location.state?.from ?? '/';
 
  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchFilmsById(movieId);
        
        setMovieData(result)
        setGenres(result.genres)
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();

  }, [movieId])

  const GoogleAdd = (
        posterPath,
        title,
        originalTitle,
        genres,
        releaseDate,
        rating,
        id,
    ) => {
    const MoviesRef = collection(db, userUid || userKey, );
    setDoc(doc(MoviesRef, `${id}`), {
      id: id,
      genres:genres,
      posterPath:posterPath,
      title:title,
      originalTitle:originalTitle,
      releaseDate:releaseDate,
      rating:rating,
    });
  }
  
  
  
  const collectionHandle = (posterPath,title,originalTitle,genres,releaseDate,rating,id,) => {
    GoogleAdd(
        posterPath,
        title,
        originalTitle,
        genres,
        releaseDate,
        rating,
        id,
    );
  }

  if (movieData) {
    const { 
      id,
      poster_path,
      title,
      original_title,
      release_date,
      vote_average,
      vote_count,
      popularity,
      overview,
    } = movieData;

    const genresMap = genres.map(el=>el.name + ", ")
    return (
      <Wrapper>
          <BackLinkItem to={backLinkHref} type='button'>
            <ArrowBackIosRoundedIcon/>    
            Back
          </BackLinkItem>  
        <MovieDetailsComponent
            id={id}
            posterPath={poster_path}
            title={title}
            originalTitle={original_title}
            genres={genresMap || "\u2015"}
            releaseDate={release_date || "\u2015"}
            rating={vote_average}
            voteCount={vote_count}
            popularity={popularity}
            overview={overview}
            collectionHandle={collectionHandle}
        />
        <Suspense>
          <Outlet />
        </Suspense>
      </Wrapper>
  )
  }
  return 
}

export default MovieDetails

