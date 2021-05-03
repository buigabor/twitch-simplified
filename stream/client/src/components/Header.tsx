/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
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
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}
