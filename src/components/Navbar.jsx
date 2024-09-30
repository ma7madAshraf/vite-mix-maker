import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo">MixMaster</div>
      <div className="nav-links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/newsletter">
          Newsletter
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  padding: 10px 20px;
  background: var(--white);

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .logo {
      font-size: clamp(1.5rem, 3vw, 3rem);
      color: var(--primary-500);
      font-weight: 700;
      letter-spacing: 2px;
    }
    .nav-links {
      padding-left: 10px;
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
