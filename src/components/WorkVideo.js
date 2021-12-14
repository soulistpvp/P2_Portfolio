import React from "react"
import styled from "styled-components"

const WorkVideo = ({ videoSrcURL, videoTitle, ...props }) => (
  <SectionContainer>
  <VideoContainer>
    <VideoPlayer
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
  </SectionContainer>
)

export default WorkVideo

const SectionContainer = styled.div`
  padding: 0 17rem;
  padding-bottom: 6rem;
  
  @media screen and (max-width: 1200px) {
    padding: 0;
    padding-bottom: 6rem;
  }
`

const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

`
const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`