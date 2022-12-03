import { GoogleAuthProvider, signInWithPopup,FacebookAuthProvider, updateProfile, } from 'firebase/auth';
import { auth} from '../../utils/firebase.js'
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { UserContext } from 'components/hooks/userContext.js';
import { useContext } from 'react';

import {
  AuthWrapper,
  AuthTitleH2,
  AuthTitleH3,
  AuthBtnWrapper,
  AuthButton,
  Wrapper,
  ButtonBox,
  ButtonText,
} from './LoginForm.styled.js';


export default function SignIn() {
  
  const { setUserUid} = useContext(UserContext);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUserUid(result.user.providerData[0].uid)
      const userKey = result.user.providerData[0].uid
      localStorage.setItem('USER_KEY', userKey);
    } catch (error) {
      console.log(error);
    }
  }

  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      setUserUid(result.user.providerData[0].uid)
      const userKey = result.user.providerData[0].uid
      localStorage.setItem('USER_KEY', userKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper >
      <Wrapper >
      <AuthTitleH2 >Join today</AuthTitleH2>
        <AuthTitleH3 >Sign in with one of the providers</AuthTitleH3>
        <AuthBtnWrapper>
          <AuthButton
            onClick={GoogleLogin}
          >
            <ButtonBox>
              <FcGoogle size={18} />
              
              <ButtonText>  
                Sign in with Google
              </ButtonText>
            </ButtonBox>
          </AuthButton>
          <AuthButton
            onClick={FacebookLogin}
          >
            <ButtonBox>
              <AiFillFacebook size={20} color={"#1977F3"} />
              <ButtonText>  
                Sign in with Facebook
              </ButtonText>
           </ButtonBox>
          </AuthButton>
        </AuthBtnWrapper>
      </Wrapper>
    </AuthWrapper>
  );
}

