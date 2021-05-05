/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';

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
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef<any>();

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="google-auth-btn">
          <i className="fab fa-google">
            <span> Sign Out</span>
          </i>
        </button>
      );
    } else {
      return <div>I am signed out!</div>;
    }
  };

  const onAuthChange = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };

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
          setIsSignedIn(auth.current?.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  return <div css={googleAuthStyles}>{renderAuthButton()}</div>;
};
