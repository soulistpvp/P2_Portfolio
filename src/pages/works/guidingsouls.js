import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Video from "../../components/WorkVideo"
import WorkHero from "../../components/WorkHero"
import WorkParagraph from "../../components/WorkParagraph"
import WorkImage from "../../components/WorkImage"
import WorkImageTri from "../../components/WorkImageTri"
import { useStaticQuery, graphql } from 'gatsby'


const GuidingSoulsPage = () => {
  const data = useStaticQuery(graphql`
    query GuidingSoulsContentQuery {
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
  
  const HeroData = data.allWorksJson.edges[2].node.herodata
  const Content = data.allWorksJson.edges[2].node.content
  const Images = data.allWorksJson.edges[2].node.images

  return (
    <Layout>
      <Seo title="Guiding Souls" />
      <WorkHero title="GUIDING SOULS" herodata={HeroData[0]}/>
      <Video 
        videoSrcURL="https://www.youtube.com/embed/h1-V-hK0pFw" 
        videoTitle="Guiding Souls Demo"
      />
      <WorkParagraph title={Content[0].title} paragraph={Content[0].paragraph} />
      <WorkImage imagedata={Images[0]} />
      <WorkParagraph title={Content[1].title} paragraph={Content[2].paragraph} />
      <WorkImageTri imagedata1={Images[1]} imagedata2={Images[2]} imagedata3={Images[3]} />
      <WorkParagraph title={Content[2].title} paragraph={Content[3].paragraph} />
      <WorkImage imagedata={Images[4]} />
      <WorkParagraph title={Content[3].title} paragraph={Content[3].paragraph} />
      <WorkImage imagedata={Images[5]} />
    </Layout>
  )
}

export default GuidingSoulsPage

