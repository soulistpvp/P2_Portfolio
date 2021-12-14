import React from 'react'
import styled from "styled-components"

const WorkImage = ({imagedata}) => {
    return (
        <ImageContainer>
            <Image src={imagedata.src.publicURL} />
            <Caption>
                {imagedata.caption}
            </Caption>
        </ImageContainer>
    )
}

export default WorkImage

const ImageContainer = styled.div`
    padding: 0 17rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @media screen and (max-width: 1200px) {
        padding: 0;
    }
`


const Image = styled.img`
    width: 100%;
`

const Caption = styled.div`
    padding: 2rem 0;
    font-family: "Roboto";
    font-size: 1rem;

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }
`