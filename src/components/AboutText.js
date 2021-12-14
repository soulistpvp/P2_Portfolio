import React from 'react'
import styled from 'styled-components'

const AboutText = ({paragraph}) => {
    return (
        <AboutContainer>
            <AboutTextDiv>
                {paragraph}
            </AboutTextDiv>
        </AboutContainer>
    )
}

export default AboutText

const AboutContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 5rem 17rem;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        padding: 2rem;
        width: 100%;
        height: 100%;
    }

`

const AboutTextDiv = styled.div`
    font-size: 2rem;
    font-family: 'Roboto';
    color: #000;
    line-height: 3.2rem;

    @media screen and (max-width: 768px) {
        font-size: 5vw;
    } 
`