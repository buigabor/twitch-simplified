/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import { useActions } from '../state/hooks/useActions';

const googleAuthStyles = css`
  .google-auth-btn {
    border: none;
    background-color: #eb3c3c;
    color: #fff;
    border-radius: 6px;
    padding: 10px 17px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #d63434;
    }
    span {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin-left: 6px;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
`;
declare global {
  interface Window {
    gapi: any;
  }
}

export const GoogleAuth = () => {
  // const [auth, setAuth] = useState<null | any>(null);
  // const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef<any>();
  const {signIn, signOut} = useActions()
  const isSignedIn = useSelector((state:RootState) => state.auth?.isSignedIn)

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="google-auth-btn">
          <i className="fab fa-google">
            <span> Sign Out</span>
          </i>
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="google-auth-btn">
          <i className="fab fa-google">
            <span> Sign In With Google</span>
          </i>
        </button>
      );
    }
  };

  const onAuthChange = (isSignedIn:boolean) => {
    if(isSignedIn){
      signIn()
    } else {
      signOut()
    }
  };

  const onSignInClick = ()=>{
    auth.current.signIn();
  }
  const onSignOutClick = ()=>{
    auth.current.signOut();
  }

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '793063093865-enoojjfdhog0e1lor0dook6gs678rkvu.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get())
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  return <div css={googleAuthStyles}>{renderAuthButton()}</div>;
};
