/* eslint-disable */
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #edc6c0;
  height: px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #e29091;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e29091;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #f9aa83;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f9aa83;
  }
`;

export const NavLogo = styled(Link)`
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  filter: invert(100%);
  margin-left: 24px;

  &.active {
    color: #e29091;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: invert(50%);
    /* filter: opacity(0.5) drop-shadow(0 0 0 #ff0000); */
  }
`;
