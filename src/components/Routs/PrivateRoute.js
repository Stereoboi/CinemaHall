import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const [user, loading] = useAuthState(auth)
  if (user !== null) {
    localStorage.setItem("logIn" , true)
  }
  const logdIn = localStorage.getItem("logIn");

  return !logdIn ? <Navigate to={redirectTo} /> : Component ;

};