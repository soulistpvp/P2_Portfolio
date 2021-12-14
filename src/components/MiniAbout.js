import React from 'react'
import styled from 'styled-components'

const MiniAbout = ({intro, title, paragraph}) => {
    return (
        <AboutContainer>
            <AboutText>
                {intro}
                <NameText> {title} <br></br> </NameText>
                {paragraph}
            </AboutText>
        </AboutContainer>
    )
}

export default MiniAbout

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

const AboutText = styled.div`
    font-size: 2rem;
    font-family: 'Roboto';
    color: #000;
    line-height: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 5vw;
        line-height: 3.2rem;
    } 
`

const NameText = styled.p`
    font-size: 4rem;
    font-weight: bold;
    color: #000;

    @media screen and (max-width: 768px) {
        font-size: 10vw;
    } 
`