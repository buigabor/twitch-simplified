import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    gapi: any;
  }
}

export const GoogleAuth = () => {
  // const [auth, setAuth] = useState<null | any>(null);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef<any>()

  const renderAuthButton = ()=>{
    if(isSignedIn === null){
      return null;
    } else if(isSignedIn){
      return (
        <button>
          <i className="fab fa-google"></i>
        </button>
      );
    } else {
      return <div>I am signed out!</div>;
    }
  }

  const onAuthChange = ()=>{
    setIsSignedIn(auth.current.isSignedIn.get());
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
          auth.current = window.gapi.auth2.getAuthInstance()
          setIsSignedIn(auth.current?.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange)
        });
    });
  }, []);

  return <div>{renderAuthButton()}</div>;
};
