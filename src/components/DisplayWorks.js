import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

const DisplayWorks = ({heading}) => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allWorksJson {
        edges {
          node {
            alt
            button
            name
            info
            link
            img {
              publicURL
            }
          }
        }
      }
    }
`)

function getWorks(data){
  const worksArray = []
  data.allWorksJson.edges.forEach((item, index) => {
    worksArray.push(
      <WorkLink key={index} to={item.node.link}>
        <WorkCard key={index} image={item.node.img.publicURL}>
            <CardInfo>
              <p>{item.node.name}</p>
              <p>{item.node.info}</p>
              <p>{item.node.button}</p>
            </CardInfo>
        </WorkCard>
      </WorkLink>
    )
  })
  return worksArray
}

  return (
    <WorksContainer>
      <WorksHeading>{heading}</WorksHeading>
      <WorkWrapper>{getWorks(data)}</WorkWrapper>
    </WorksContainer>
  )
}

export default DisplayWorks

const WorksContainer = styled.div`
    padding: 5rem 17rem;
    background: #fff;
    color: #fff;
    height: 100vh;
    position: relative;

    @media screen and (max-width: 1600px) {
      height: 100%;
    }

    @media screen and (max-width: 1200px) {
      padding: 5rem 2rem;
    }
`

const WorksHeading = styled.div`
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-family: 'Montserrat';
    font-weight: 500;
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

const WorkCard = styled.div`
  box-shadow: 0 2px 20px #000;
  border-radius: 10px;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  transition: width 2s;

  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  filter: brightness(80%);
  transition: 0.4s cubic-bezier(0.075, 0.2, 0.165, 1);

  &:hover{
    filter: brightness(100%);
    div:nth-child(1){
      width: 30vw;
      visibility: visible;

      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    height: 50vh;
  }
`
const CardInfo = styled.div`
  visibility: hidden;
  background: #fff;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  color: #000;
  text-decoration: none;
  border-radius: 10px;

  p:nth-child(1){
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.8rem;
  }

  p:nth-child(2){
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.4rem;
  }

  p:nth-child(3){
    font-family: 'Roboto';
    font-weight: 200;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1200px) {
        margin: 0;

        p:nth-child(1){
          font-size: 1.2rem;
        }

        p:nth-child(2){
          font-size: 1rem;
        }

        p:nth-child(3){
          font-size: 1rem;
        }
  }
`

const WorkLink = styled(Link)`
  text-decoration: none;
`