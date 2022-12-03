import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const [user, loading] = useAuthState(auth)

  return user ? <Navigate to={redirectTo} /> : Component;
};