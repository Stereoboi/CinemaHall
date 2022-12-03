import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  ${'' /* max-width: 1400px;
  margin: 0 auto; */}
  ${'' /* background-color:#E9E9E9;
   box-shadow: -2px 1px 22px 1px rgba(18,110,33,0.71) inset; */}
   min-height:100vh;
`;

export const Header = styled.header`
  height: 60px;
  box-shadow: -2px 1px 22px 1px rgba(18,110,33,0.71) ;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  ${'' /* background-color: #3C6687; */}
`;

export const Wrapper = styled.div`
   margin-right: 70px;
   margin-left: auto;
`

export const Navigation = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 70px;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--color-dark-grey);
  font-weight: 500;
  font-family: Ubuntu;  
  &.active {
    color: white;
    background-color: var(--color-green);
  }
`;

export const LinkLog = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--color-dark-grey);
  font-weight: 500;
  font-family: Ubuntu;
  transition: all 250ms ease-in-out;  
  &:hover,
  &:focus {
    color: white;
    background-color: var(--color-green);
  }
`;