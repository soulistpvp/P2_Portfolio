import React from 'react'
import styled from "styled-components"
import Image from '../assets/images/Profile_Pic.jpg'

const AboutHero = ({paragraph}) => {
    return (
        <HeroContainer>
            <HeroCardContainer>
                <HeroImage src={Image} alt="Profile Picture Of Paul Pinto"/>
                <HeroDetailContainer>
                    <p>Paul Pinto</p>
                    <a href="mailto:paulpinto.gamedesign@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/paul-pinto-game-design">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1nypHRYx9ksAlSql9SSHYU5lslMTQgbMo/view?usp=sharing">Resume</a>
                </HeroDetailContainer>
            </HeroCardContainer>
            <AboutInfo>
                {paragraph}
            </AboutInfo>
        </HeroContainer>
    )
}

export default AboutHero

const HeroContainer = styled.div`
    padding: 2rem 17rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        width: 100%;
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 2rem;
    }
`

const HeroCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    box-shadow: 0 2px 20px #000;
    border-radius: 10px;
    width: 750px;
    height: 500px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        width: 100%;
        height: 100%;
    }
`

const HeroImage = styled.img`
    object-fit: cover;
    width: 400px;
    height: 400px;
    margin-left: 50px;
    border: solid;

    @media screen and (max-width: 1200px) {
        width: 40vw;
        height: 40vw;
        margin-left: 0;
        margin-top: 2rem;
    }
`

const HeroDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-left: solid;
    padding-left: 2rem;
    font-family: "Roboto";
    font-size: 1rem;

    p:nth-child(1){
        font-weight: 600;
        font-size: 1.4rem;
        padding: 2rem 0;
    }

    a {
        padding-bottom: 2rem;
        font-family: "Raleway";
        text-decoration: none;
        color: black;
        font-weight: 500;

        &:hover{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }

    @media screen and (max-width: 1200px) {
        border-left: none;
        padding-left: 0;
        
        p:nth-child(1){
            font-weight: 600;
            font-size: 1rem;
            padding: 1rem 0;
        }

        a {
            padding-bottom: 1rem;
            font-family: "Raleway";
            text-decoration: none;
            color: black;
            font-weight: 500;

            &:hover{
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
    }
`

const AboutInfo = styled.div`
    padding-left: 4rem;
    font-size: 2rem;
    font-family: 'Roboto';
    color: #000;
    line-height: 3.2rem;

    @media screen and (max-width: 1200px) {
        padding: 0;
    }

    @media screen and (max-width: 768px) {
        font-size: 5vw;
        padding-top: 5rem;
    } 
`