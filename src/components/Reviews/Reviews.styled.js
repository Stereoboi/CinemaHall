import styled from "styled-components";

export const ErrorTitle = styled.h3`
    margin-top:40px;
    font-size: 40px;
    text-transform: uppercase;
`

export const ReviewList = styled.ul`
  margin-top:35px;
  height: 100%;

`;

export const ReviewItem = styled.li`
  border-bottom: 2px solid lightgrey;
  overflow: auto;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewAuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ReviewAuthorName = styled.b`
  text-transform: uppercase;
  color: var(--color-dark-grey);
`;

export const ReviewContent = styled.p`
  padding: 20px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.67;
  color: var(--color-dark-grey);
`;

export const NotFoundMessage = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  color: red;
`;