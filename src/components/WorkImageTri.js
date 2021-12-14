import React from 'react'
import styled from "styled-components"

const WorkImageTri = ({imagedata1,imagedata2,imagedata3}) => {
    return (
        <ImageContainer>
            <ImageTriContainer>
                <Image src={imagedata1.src.publicURL} />
                <Image src={imagedata2.src.publicURL} />
                <Image src={imagedata3.src.publicURL} />
            </ImageTriContainer>
            <CaptionTriContainer> 
                <Caption>
                    {imagedata3.caption}
                </Caption>
            </CaptionTriContainer>
        </ImageContainer>
    )
}

export default WorkImageTri

const ImageContainer = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

const ImageTriContainer = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

const Image = styled.img`
    width: 100%;
`

const CaptionTriContainer = styled.div`
    padding: 0 17rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @media screen and (max-width: 1200px) {
        padding: 0 2rem;
    }
`

const Caption = styled.div`
    padding: 2rem 0;
    font-family: "Roboto";
    font-size: 1rem;
`