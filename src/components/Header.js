import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import Menu from "./Menu"
import { motion } from "framer-motion"


class Header extends React.Component {
  toggleMenu() {
    this.childMenu.open()
  }
  render() {
    return (
      <HeaderContainer>
      <Nav>
        <NameLink to="/">Paul Pinto</NameLink>
        <Menu ref={el => (this.childMenu = el)} />
        <Bars onClick={() => this.toggleMenu()} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
                {item.title}
            </NavLink>
          ))}
        </NavMenu>
      </Nav>
      </HeaderContainer>
    )
  }
}

export default Header

const HeaderContainer = styled.header`
  height: 80px;
  z-index: 200;
  position: sticky;
  top: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  background-color: rgba(255,255,255,0.7);
  width: 100%;
`

const NameLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  height: 100%;
  padding-left: 1rem;
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 800;
  font-style: italic;

  &:hover{
    color: #eeb902;
  }
`

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  font-family: 'Raleway', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;

  &:hover{
    font-size: 1.8rem;
    font-weight: 600;
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  padding-top: 0.5rem;
  right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  } 
`