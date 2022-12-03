import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--color-light-grey);
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
    margin-right: 50px;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
  color: var(--color-dark-grey);
`;

export const Info = styled.div``;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.p`
  width: 200px;
  color: var(--color-light-grey);
`;

export const Rating = styled.span`
  display: inline-block;
  border-radius: 5px;
  font-style: normal;
  font-size: 12px;
  text-align: center;
  line-height: 1.42;
  color: #fff;
  background-color: ${props => {
  if (props.rating <= 4) {
    return `tomato`
  }
  if (props.rating <= 7) {
    return `#F78D05`
  }
  if (props.rating <= 10) {
    return `var(--color-green)`
  }
  } };
  width: 36px;
  height: 16px;
`;

export const Content = styled.p`
  color: var(--color-dark-grey);
  width: 100%;
`;

export const TitleH3 = styled.h3`
  margin-bottom: 20px;
  color: var(--color-dark-grey);
`;

export const Overview = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.67;
  color: var(--color-dark-grey);
`;

export const AdditionalLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;

`;

export const LinkItem = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    text-align:center;
    font-size: 20px;
    font-weight: 500;
    margin-right: 15px;
    color: var(--color-dark-grey);
    transition: all 250ms ease-in-out;
  &:hover {
    color: white;
    background-color: var(--color-green);
  }
  &.active {
    color: white;
    background-color: var(--color-green);
  }
`;
export const LinkItemCollection = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-align:center;
    text-decoration: none;
    font-size:20px;
    font-weight: 500;
    margin-right: 15px;
    color: var(--color-dark-grey);
    transition: all 250ms ease-in-out;
  &:hover {
    color: white;
    background-color: var(--color-green);
  }
  
`;