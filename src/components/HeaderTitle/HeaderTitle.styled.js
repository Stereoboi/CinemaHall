import styled from "styled-components";

export const Title = styled.p`
  font-size:35px;
  
  ${'' /* font-family: 'Rubik Glitch', cursive; */}
  font-family: 'Dancing Script', cursive;
  color:#BF2727;
  margin-left: 250px;

  @media screen and (max-width: 767px) {
    display:none;
    font-size: 28px;
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 32px;
    margin-left: 70px;
  }
  

`

export const TextWrapper = styled.span`
  
  color: var(--color-green);
`