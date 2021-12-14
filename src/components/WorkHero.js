import React from 'react'
import styled from "styled-components"

const WorkHero = ({title, herodata}) => {
    return (
        <HeroContainer>
            <HeroTitle>
                {title}
            </HeroTitle>
            <HeroDetailContainer>
                <DetailContainer>
                    <p>Role</p> <p>{herodata.role}</p> <p>{herodata.role2}</p> 
                </DetailContainer>
                <DetailContainer>
                    <p>Skills</p> <p>{herodata.skills}</p> <p>{herodata.skills2}</p>
                </DetailContainer>
                <DetailContainer>
                    <p>Genres</p> <p>{herodata.genre}</p> <p>{herodata.genre2}</p>
                </DetailContainer>
                <DetailContainer>
                    <p>Links</p> <a href={herodata.linkurl}>{herodata.linkname}</a>
                </DetailContainer>
            </HeroDetailContainer>
        </HeroContainer>
    )
}

export default WorkHero

const HeroContainer = styled.div`
    padding: 5rem 17rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        padding: 2rem;
        width: 100%;
        height: 100%;
    }
`

const HeroTitle = styled.div`
    font-family: "Montserrat";
    font-size: 4rem;
    font-weight: 700;

    @media screen and (max-width: 1200px) {
        font-size: 10vw;
        padding-bottom: 2rem;
    }
`

const HeroDetailContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const DetailContainer = styled.div`
    font-family: "Roboto";
    font-size: 1rem;
    padding-bottom: 2rem;

    p:nth-child(1){
        font-weight: 600;
        font-size: 1.4rem;

    }

    a {
        font-family: "Raleway";
        text-decoration: none;
        color: black;
        font-weight: 500;

        &:hover{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`