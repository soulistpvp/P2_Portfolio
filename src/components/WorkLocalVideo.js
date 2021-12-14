import React from "react"
import styled from "styled-components"

const WorkLocalVideo = ({ content, videoSrcURL, videoTitle, ...props }) => (
  <SectionContainer>
  <VideoContainer>
    <VideoPlayer controls>
      <source src={videoSrcURL} type="video/mp4" />
    </VideoPlayer>
  </VideoContainer>
  </SectionContainer>
)

export default WorkLocalVideo

const SectionContainer = styled.div`
  padding: 0 17rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 1200px) {
        padding: 0;
  }
`

const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

`
const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`