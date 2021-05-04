/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuth } from './GoogleAuth';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-weight: 600;
  border-bottom: 2.5px solid gray;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Header:React.FC = () => {
  return (
    <div css={headerStyles}>
      <div className="nav__left-side">
        <Link to="/">Streamer</Link>
      </div>
      <div className="nav__right-side">
        <Link to="/">All Streams</Link>
        <GoogleAuth/>
      </div>
    </div>
  );
}
