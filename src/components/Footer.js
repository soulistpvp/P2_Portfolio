import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <ContactContainer>
                <p>Let's connect! Feel free to email me anytime at</p>
                <Email href="mailto:paulpinto.gamedesign@gmail.com">paulpinto.gamedesign@gmail.com</Email>
            </ContactContainer>
            <LinksContainer>
                <a href="mailto:paulpinto.gamedesign@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/paul-pinto-game-design">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1nypHRYx9ksAlSql9SSHYU5lslMTQgbMo/view?usp=sharing">Resume</a>
            </LinksContainer>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100%;
    height: 40vh;
    padding: 5rem 17rem;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

const ContactContainer = styled.div`
    position: relative;
    margin: 0;
    padding: 0;

    p {
        margin-bottom: 3rem;
        color: #000;
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        align-content: center;
        justify-content: center;

        p {
        margin-bottom: 3rem;
        font-size: 4vw;
        }
    }
`

const Email = styled.a`
    font-size: 2.7rem;
    font-family: 'Roboto';
    font-weight: 800;
    position: absolute;
    top: 2rem;
    text-decoration: none;
    color: #000;

    &:hover{
        color: #eeb902;
    }

    @media screen and (max-width: 768px) {
        font-size: 5vw;
        top: 1.2rem;
    }
    
`

const LinksContainer = styled.div`
    display: block;
    width: 100%;
    right: 0;

    a:nth-child(n) {
        font-family: "Raleway";
        font-weight: 400;
        font-size: 1.2rem;
        color: #000;
        padding: 0 1rem;
        float: right;
        text-decoration: none;

        &:hover{
            font-size: 1.4rem;
            font-weight: 600;
        }
    }

    a:nth-child(1) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        align-content: center;
        justify-content: center;
        
        a:nth-child(1) {
            display: block;
        }
    }

`