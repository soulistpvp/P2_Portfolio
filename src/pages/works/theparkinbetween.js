import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Video from "../../components/WorkVideo"
import WorkHero from "../../components/WorkHero"
import WorkParagraph from "../../components/WorkParagraph"
import WorkImage from "../../components/WorkImage"
import { useStaticQuery, graphql } from 'gatsby'
import WorkLocalVideo from "../../components/WorkLocalVideo"
import Trailer from "../../assets/videos/TheParkSound.mp4"


const TheParkInbetweenPage = () => {
  const data = useStaticQuery(graphql`
    query TheParkInbetweenContentQuery {
      allWorksJson {
        edges {
          node {
            content {
              paragraph
              title
            }
            images {
              caption
              src {
                publicURL
              }
            }
            herodata {
              genre
              linkname
              linkurl
              role
              skills
              genre2
              role2
              skills2
            }
          }
        }
      }
    }
  `)
  
  const HeroData = data.allWorksJson.edges[1].node.herodata
  const Content = data.allWorksJson.edges[1].node.content
  const Images = data.allWorksJson.edges[1].node.images

  return (
    <Layout>
      <Seo title="The Park In-between" />
      <WorkHero title="THE PARK IN-BETWEEN" herodata={HeroData[0]}/>
      <Video 
        videoSrcURL="https://www.youtube.com/embed/1QgwaqQI4LU" 
        videoTitle="The Park In-between Demo"
      />
      <WorkParagraph title={Content[0].title} paragraph={Content[0].paragraph} />
      <WorkImage imagedata={Images[0]} />
      <WorkParagraph title={Content[1].title} paragraph={Content[1].paragraph} />
      <WorkImage imagedata={Images[1]} />
      <WorkParagraph title={Content[2].title} paragraph={Content[2].paragraph} />
      <WorkLocalVideo 
        videoSrcURL={Trailer} 
        videoTitle="Ghost Sound Cue"/>
      <WorkParagraph title={Content[3].title} paragraph={Content[3].paragraph} />
    </Layout>
  )
}

export default TheParkInbetweenPage

