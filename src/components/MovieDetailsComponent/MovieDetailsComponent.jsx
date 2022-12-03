import { useLocation } from "react-router-dom";
import { useState, useEffect, createRef } from "react";
import defaultImage from "../../Images/defaultImage.png"
import { API_IMG } from "api/api";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from '../../utils/firebase.js'
import { UserContext } from 'components/hooks/userContext.js';
import { useContext } from 'react';
import { useFetchVideo } from "components/hooks/useFetchVideo";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types';
import {
  MovieWrapper,
  Image,
  ContentWrapper,
  MovieTitle,
  Info,
  List,
  Item,
  Title,
  Rating,
  Content,
  TitleH3,
  Overview,
  AdditionalLinksWrapper,
  LinkItem,
  LinkItemCollection,
  
} from "./MovieDetailsComponent.styled";

export const MovieDetailsComponent = ({
  posterPath,
  title,
  originalTitle,
  genres,
  releaseDate,
  rating,
  voteCount,
  popularity,
  overview,
  id,
  collectionHandle,
}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [user, loading] = useAuthState(auth);
  const [isAdded, setIsAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { userUid } = useContext(UserContext);
  const userKey = localStorage.getItem("USER_KEY");
  const { video, status } = useFetchVideo(id);
  const ref = createRef();

  // Перевіряю чи фільм доданий в колекцію

  useEffect(() => { 
    
    const FireBase = async () => {
    const querySnapshot = await getDocs(collection(db, userUid || userKey));
    let arr = [];
    querySnapshot.forEach((doc) => {  
    arr.push(doc.data())
    });
      arr.map(el => {
        if (el.id === id) {
        setIsAdded(true)
      }
    })  
  }  
  FireBase ();
  },[id, userKey, userUid])
  
  const openModal = () => {
    setModalOpen(prevState => !prevState);
    
  };

  const handleClick = (e) => {
    e.preventDefault();
    
    collectionHandle(
        posterPath,
        title,
        originalTitle,
        genres,
        releaseDate,
        rating,
        id,
    );
    setIsAdded(true)
  }

  const deleteFilm = () => {
    const docRef = doc(db, userUid || userKey, `${id}`);
    setIsAdded(false)
    deleteDoc(docRef)
        .then(() => {
        console.log("Entire Document has been deleted successfully.")
      })
  }

  return (
    <>
      <MovieWrapper>
        <Image
          src={
            posterPath && isLoaded
              ? `${API_IMG.IMAGE_URL}/original${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsLoaded(true)}
          width="300"
          height="450"
        />

        <ContentWrapper>
          <MovieTitle>{`${title} (${releaseDate.slice(0, 4)})`}</MovieTitle>

          <Info>
            <List>
              <Item>
                <Title>Vote / Votes</Title>
                <Content>
                  <Rating rating={rating}>{rating}</Rating> / {voteCount}
                </Content>
              </Item>

              <Item>
                <Title>Popularity</Title>
                <Content>{popularity}</Content>
              </Item>

              <Item>
                <Title>Original Title</Title>
                <Content>{originalTitle}</Content>
              </Item>

              <Item>
                <Title>Genres</Title>
                <Content>{genres}</Content>
              </Item>
            </List>
          </Info>

          <TitleH3>About</TitleH3>

          <Overview>{overview}</Overview>

          <AdditionalLinksWrapper>
            <LinkItem to='cast' state={{from: backLinkHref}} end>
              Cast
            </LinkItem>
            <LinkItem to='reviews' state={{from: backLinkHref}} >
              Reviews
            </LinkItem>
            {user && (
            <>
            {isAdded ? (
            <LinkItemCollection 
            id={id} 
            onClick={deleteFilm} 
            >
              Remove from collection
            </LinkItemCollection>
            ) : (
            <LinkItemCollection 
            id={id} 
            onClick={handleClick} 
            >
              Add to collection
            </LinkItemCollection>
            ) }
            <LinkItemCollection
            onClick={openModal}
             >
              Trailer
            </LinkItemCollection>
            </>
            )}
          </AdditionalLinksWrapper>
        </ContentWrapper>
        <Modal
        ref={ref}
        onClose={openModal}
        isModalOpen={modalOpen}
        trailer={video}
        status={status}
      />
      </MovieWrapper>
    </>
  )
}

MovieDetailsComponent.propTypes = {
  posterPath: PropTypes.string ,
  title:PropTypes.string,
  originalTitle:PropTypes.string,
  genres:PropTypes.array,
  releaseDate:PropTypes.string,
  rating:PropTypes.number,
  voteCount:PropTypes.number,
  popularity:PropTypes.number,
  overview:PropTypes.string,
  id:PropTypes.number,
  collectionHandle:PropTypes.func,
} 
  