import styled from "styled-components";


export const AuthWrapper = styled.div`
  width:450px;
  margin-top:150px;
  font-weight:700;
  border-radius: 4px;
  box-shadow: 0px 5px 14px 2px rgb(0 0 0 / 55%);
  margin-left:auto;
  margin-right:auto;
   @media screen and (max-width: 515px) {
    width:320px;
    display:flex;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    padding-right: 1px;
    padding-left: 1px;
    ${'' /* justify-content:center; */}
  }
`
export const AuthTitleH2 = styled.h2`
  text-align:center;
  padding-top:10px;
  padding-bottom:10px;
  color: var(--color-dark-grey);
  @media screen and (max-width: 767px) {
    font-size:20px;
    ${'' /* justify-content:center; */}
  }
`
export const AuthTitleH3 = styled.h3`
  text-align:center;
  padding-top:10px;
  padding-bottom:10px;
  color: var(--color-dark-grey);
  @media screen and (max-width: 767px) {
    font-size:18px;
    ${'' /* justify-content:center; */}
  }
`
export const AuthBtnWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  padding-bottom:35px;
`
export const AuthButton = styled.button`
    align-items: center;
    ${'' /* padding: 10px 28px 10px 29px; */}
    border-radius: 4px;
    border: 2px solid transparent;
    width: 250px;
    height: 40px;
    font-weight: 700;
    line-height: 1.88;
    color: white;
    background-color: #364150;
    cursor: pointer;
    font-family: inherit;
    transition: all 250ms ease-in-out;
    &:not(:last-child) {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      ${'' /* transform: scale(1.05) translateY(-5px); */}
      box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
    }
`
export const Wrapper = styled.div`
  padding: 15px;
`
export const ButtonBox = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
   
`
export const ButtonText = styled.span`
  padding-left: 10px;
   
`

