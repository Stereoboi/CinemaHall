import { useParams, } from "react-router-dom";
import { useEffect, useState} from "react";
import { fetchFilmsByCredits } from "api/api";
import { InfoTitle } from "pages/Collection/Collection.styled";
import CircularProgress from '@mui/material/CircularProgress';
import * as Scroll from 'react-scroll';

import {
  Title,
  Text,
  List,
  ListItem,
  Wrapper,
  Poster,
  TextWrapper,
  LoaderWrapper

} from "./Cast.styled";
import Default from "../../Images/Default.png"


const Cast = () => { 
const { movieId } = useParams();
const [castData, setCastData] = useState(null);
const [loaded, setLoaded] = useState(false);
const [status, setStatus]= useState("idle")


  useEffect(() => {
   setStatus("pending");
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsByCredits(movieId);

        if (!result.length) {
          throw new Error("Cast not found");
        }
         setCastData(result);
         setStatus("resolved")
         Scroll.animateScroll.scrollMore(500); 
      } catch (err) {
        console.log(err);
        setStatus('rejected');
      }
    }
    getFetchCast();
    
  }, [movieId])
  
  if (status === "idle") {
    return <></>
  }

  if (status === "pending") {
    return (
      <LoaderWrapper>
        <CircularProgress color="success" />
      </LoaderWrapper>
    )
  }
  if (status === 'resolved') {

    return (
    <Wrapper >
      <List  >
          {castData.map(el => (
          <ListItem key={el.id}>
              <Poster
                src={el.profile_path && loaded ?
                  `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : Default}
                alt={el.name}
                width="150"
                onLoad={() => setLoaded(true)}
                />
              <TextWrapper>
                <Title>Name</Title>
                <Text>{el.name}</Text>
                <Title>Character</Title>
                <Text>{el.character}</Text>
            </TextWrapper>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
  }
  if (status === 'rejected') {
    return (
      <InfoTitle > We don`t have information about cast, sorry ¯\_(ツ)_/¯ </InfoTitle>
    )
  }
}

export default Cast