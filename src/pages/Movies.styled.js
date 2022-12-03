import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: orangered;
  }
`;

export const Text = styled.p`
  padding: 8px 0;
  font-size: 20px;
  display: inline-block;
`;
export const ListItem = styled.li`
  
`;

export const Title = styled.h1`
  padding: 8px 0;
  font-size: 40px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin-top: 15px;
`;

export const Wrapper = styled.main`
  min-height: 100%;
  display:flex;
  flex-direction: column;
  flex: 1 1 auto;
`;