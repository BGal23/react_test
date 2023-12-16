import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import css from "./header.module.css";
import { Suspense } from "react";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    display: block;
    background-color: darkmagenta;
    padding: 5px;
    color: white;
    border-radius: 6px;
  }
`;

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.logo}>🇺🇳 Countries Page 🇺🇳</div>
        <div className={css.nav}>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/countries">Countries</StyledLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
