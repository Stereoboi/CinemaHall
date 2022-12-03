import { List} from '../../components/MovieList/MovieList.styled'
import { MovieItem } from 'components/MovieItem/MovieItem.jsx';
import { collection, getDocs } from "firebase/firestore"; 
import { db  } from '../../utils/firebase.js'
import { useState, useEffect } from "react";
import { UserContext } from 'components/hooks/userContext.js';
import { useContext } from 'react';
import { InfoTitle } from './Collection.styled';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderWrapper } from 'components/Cast/Cast.styled';

const Collection = () => {
  
  const [stateId, setStateId] = useState([]);
  const [status, setStatus] = useState("idle")
  const { userUid } = useContext(UserContext);
  const userKey = localStorage.getItem("USER_KEY");


  useEffect(() => {
    setStatus("pending")
    const FireBase = async () => {

        const querySnapshot = await getDocs(collection(db, userUid || userKey));
        let arr = [];
        querySnapshot.forEach((doc) => {  
        arr.push(doc.data())
        });
        setStateId(arr)
        arr.length === 0 ? setStatus("rejected") : setStatus("resolved")

  }
  FireBase ();
  }, [userKey, userUid])
  if (status === 'pending') {
    return (
      <LoaderWrapper>
        <CircularProgress color="success" />
      </LoaderWrapper>
    )
  }
  
  if (status === "resolved") {
    return (
      <List>
      {stateId.map(({ title, rating, posterPath, id, releaseDate, genres }) => {
        return (
            <MovieItem
              key={id}
              id={id}
              posterPath={posterPath}
              title={title}
              releaseDate={releaseDate || '\u2015'}
              rating={rating}
              genres={genres || '\u2015'}
            />
          )
      })}
    </List>
  )
}
if (status === "rejected") {
  return (
    <InfoTitle>To create collection you should to add few movies</InfoTitle>
  )
}
  
}

export default Collection