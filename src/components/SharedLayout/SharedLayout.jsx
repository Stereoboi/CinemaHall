import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Container,  Header, Link, Navigation, Wrapper,LinkLog  } from "./SharedLayout.styled"; 
import ScalableContainer from "components/ScalableWrapper/ScalableWrapper";
import { HeaderTitle } from "components/HeaderTitle/HeaderTitle";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import { Footer } from "components/Footer/Footer";

export const SharedLayout = () => {

  const [user, loading] = useAuthState(auth);

  const logOut = () => {
    auth.signOut();
    localStorage.clear();
  }

  return (
    <div>
      <Container>
      <Header>
        <Navigation>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">
            Movies
          </Link>
          {user && (
            <Link to="/collection">
            Collection
          </Link>
          )}
        </Navigation>
        <HeaderTitle />
        <Wrapper>
          {!user && (
            <Link to="/login">
            Login
          </Link>
          )}
          {user && (
            <LinkLog
            onClick={logOut}
            >
            Log out
          </LinkLog>
          )}
        </Wrapper>
      </Header>
    <ScalableContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </ScalableContainer>
    </Container>
    <Footer/>
    </div>
  );
};