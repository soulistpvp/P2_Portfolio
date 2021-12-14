import React, { useImperativeHandle, useRef } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <MenuContainer
                role="button"
                tabIndex="0"
                condition={this.state.open}
                onClick={() => this.close()}
                onKeyDown={() => this.close()}
            >
                <LinksContainer>
                    <Link to="/works">Works</Link>
                    <Link to="/about">About</Link>
                    <a href="mailto:paulpinto.gamedesign@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/paul-pinto-game-design">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1nypHRYx9ksAlSql9SSHYU5lslMTQgbMo/view?usp=sharing">Resume</a>
                </LinksContainer>
                <NameLink to="/"> Paul Pinto </NameLink>
                <Times/>
            </MenuContainer>
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
}

export default React.forwardRef((props, ref) => {
    const menuRef = useRef()

    useImperativeHandle(ref, () => ({
        open() {
            menuRef.current.open()
        },
    }))

    return <Menu ref={menuRef} {...props} />
})

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #ffffff;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: left;

    transition: all 0.35s;

    cursor: pointer;

    ${props => props.condition ? "visibility: visible;" : "visibility: hidden;"}
    ${props => props.condition ? "opacity: 1;" : "opacity: 0;"}

`

const LinksContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 1rem;
    z-index: 150;

    display: flex;
    flex-direction: column;


    a:nth-child(n+1):nth-child(-n+5) {
        color: #000;
        text-decoration: none;
        padding: 1rem 1rem;
        font-family: 'Raleway', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;

        &:hover{
            font-size: 1.8rem;
            font-weight: 600;
        }
    }
`

const Times = styled(FaTimes)`
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
    z-index: 101;
  }
`

const NameLink = styled(Link)`
  color: #000;
  position: absolute;
  text-decoration: none;
  top: 0;
  left: 0;
  padding-left: 2rem;
  padding-top: 1rem;
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 800;
  font-style: italic;
  z-index: 101;

  &:hover{
    color: #eeb902;
  }
`