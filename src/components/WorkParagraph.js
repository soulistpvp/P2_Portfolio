import React from 'react'
import styled from "styled-components"

const WorkParagraph = ({title , paragraph}) => {
    return (
        <ParaContainer>
            <ParaTitleContainer title={title}>
                <ParaTitle>
                    {title}
                </ParaTitle>
            </ParaTitleContainer>
            <ParaText>
                {paragraph}
            </ParaText>
        </ParaContainer>
    )
}

export default WorkParagraph

const ParaContainer = styled.div`
    padding: 0 17rem;
    padding-bottom: 6rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @media screen and (max-width: 1200px) {
        padding: 0 2rem;
    }

`
const ParaTitleContainer = styled.div`
    width: 60%;
    display: ${props => props.title ? "block" : "none"};
`

const ParaTitle = styled.div`
    font-family: "Montserrat";
    font-size: 1.6rem;
    padding: 2rem 0;
`

const ParaText = styled.div`
    line-height: 2rem;
    width: 60%;
    font-family: "Roboto";
    font-size: 1.2rem;
    padding-bottom: 2rem;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`