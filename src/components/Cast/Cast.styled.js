import styled from "styled-components";


export const Wrapper = styled.div`
  margin-top:35px;
`
export const TextWrapper = styled.div`
  padding:10px;
  
`
export const PageTitle = styled.h2`
  margin-top:15px;
`
export const Poster = styled.img`
    height:300px;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid rgb(204, 204, 204);
`
export const Title = styled.h3`
    margin-bottom: 5px;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
`

export const Text = styled.p`
  margin: auto;
    height: 100%;
    font-size: 18px;
    text-align: center;
    color: dark-grey;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px 10px;
`;

export const ListItem = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 2px 5px 0px, rgb(0 0 0 / 12%) 0px 2px 10px -1px;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`