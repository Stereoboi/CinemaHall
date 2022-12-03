import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { NotFound } from "./NotFound/NotFound";
import { lazy } from "react";
import { PrivateRoute } from "./Routs/PrivateRoute";
import { RestrictedRoute } from "./Routs/RestrictedRoute";

const Home = lazy(() => import('../pages/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));
const Login = lazy(() => import('../pages/Login/Login.jsx'));
const Collection = lazy(() => import('../pages/Collection/Collection.jsx'));

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<Login />} />
              }
            /> 
          <Route
              path="collection"
              element={
                <PrivateRoute redirectTo="/login" component={<Collection />} />
              }
            />    
          <Route path="*" element={<NotFound />} />  
        </Route>
      </Routes>
    
  );
};