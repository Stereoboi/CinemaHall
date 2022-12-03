import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsReviews } from "api/api";
import * as Scroll from 'react-scroll';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderWrapper } from "components/Cast/Cast.styled";
import {
  ReviewList,
  ReviewItem,
  ReviewAuthorWrapper,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewContent,
} from "./Reviews.styled";
import { API_IMG } from "api/api";
import Default from "../../Images/Default.png"
import { InfoTitle } from "pages/Collection/Collection.styled";

const Reviews = () => { 
const { movieId } = useParams();
const [reviewsData, setReviewsData] = useState([]); 
const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
const [status, setStatus] = useState("idle")

  useEffect(() => {
   setStatus("pending"); 
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsReviews(movieId);
        if (!result.length) {
          throw new Error("Reviews not found");
        }
        setReviewsData(result)
        setStatus("resolved");
        Scroll.animateScroll.scrollMore(500); 
      } catch (err) {
        console.log(err);
        setStatus("rejected"); 
      }
    }
    getFetchCast();
 },[movieId])
 
  const userAvatar = (avatarPath) => {
    let avatar = Default;

    if (avatarPath) {
      avatar = avatarPath.startsWith("/http")
        ? avatarPath.slice(1)
        : `${API_IMG.IMAGE_URL}/w200/${avatarPath}`;
    }

    return avatar;
  };

  if (status === "idle") {
    <></>
  }

  if (status === "pending") {
    return (
      <LoaderWrapper>
        <CircularProgress color="success" />
      </LoaderWrapper>
    )
  }

  if (status === "resolved") {
    return (
    <ReviewList >
          {reviewsData.map(({ id, author, author_details, content }) => {
            const avatar = userAvatar(author_details.avatar_path);

            return (
              <ReviewItem key={id}>
                <ReviewAuthorWrapper>
                  <ReviewAuthorAvatar
                    src={isAvatarLoaded ? avatar : Default}
                    width="50"
                    height="50"
                    onLoad={() => setIsAvatarLoaded(true)}
                  />
                  <ReviewAuthorName>{author}</ReviewAuthorName>
                </ReviewAuthorWrapper>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
      </ReviewList>
  )
  }
  
  if (status === "rejected") {
    return <InfoTitle>There is no reviews.¯\_(ツ)_/¯</InfoTitle> 
  }
  
}

export default Reviews