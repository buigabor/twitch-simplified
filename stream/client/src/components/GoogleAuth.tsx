import React, { useEffect } from 'react';

declare global {
  interface Window {
    gapi: any;
  }
}

export const GoogleAuth = () => {
  useEffect(()=>{
    window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init({
          clientId:
            '793063093865-enoojjfdhog0e1lor0dook6gs678rkvu.apps.googleusercontent.com',
          scope:'profile'
        });
    })
  }, [])
  return (
    <div>

    </div>
  )
}
