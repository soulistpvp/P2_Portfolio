import React from 'react'
import styled from "styled-components"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroItems>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} {<strong> GAME DESIGNER  </strong>} </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
                <p> WELCOME TO MY {<br />} PORTFOLIO, I'M A {<br />} GAME DESIGNER </p>
            </HeroItems>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -80px; 
    overflow: hidden;
`

const HeroItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    height: 100vh;
    margin-top: 80px;
    padding: 2.5rem;
    color: #000;
    line-height: 1.1;

    p:nth-child(n) {
        font-size: 3.34vw;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem;
        grid-template-columns: 1fr;

        p:nth-child(n+0):nth-child(-n+2) {
            display: none;
        }

        p:nth-child(n+7):nth-child(-n+9) {
            display: none;
        }

        p:nth-child(n) {
            font-size: 7vw;
        }
    }
`