import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  // background-image: linear-gradient(to right, white, #424242);
  // background: rgba(255, 255, 255);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 2;
`;
const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  height: 65px;
  line-height: 65px;
  margin: 0 30px;
  color: #fff;
  font-family: Poppins, sans-serif;
`;
const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Navigation = styled.div`
  float: left;
  height: 65px;
  margin-left: 30px;
  > a {
    display: inline-block;
    height: 60px;
    margin-right: 25px;
    text-decoration: none;
    font-weight: 700;
    font-size: 24px;
    color: #424242 !important;
  }
  > button {
    height: 65px;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 18px;
  }
  > button:hover,
  a:hover {
    border-bottom: 5px solid #4f585b;
    transition-property: border-bottom;
    transition-duration: 0.2s;
    cursor: pointer;
  }
  > a:visited {
    color: black;
    text-decoration: none;
  }
`;

export default function NavBar() {
  return (
    <Header>
      <StyledMenu>
        <StyledNav>
          <Navigation>
            <Link to="/">Main</Link>
            <Link to="/login">Login</Link>
            <Link to="/member/1">Mypage</Link>
          </Navigation>
        </StyledNav>
      </StyledMenu>
    </Header>
  );
}
