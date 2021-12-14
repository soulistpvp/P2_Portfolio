import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Video from "../../components/WorkLocalVideo"
import WorkHero from "../../components/WorkHero"
import WorkParagraph from "../../components/WorkParagraph"
import WorkImage from "../../components/WorkImage"
import { useStaticQuery, graphql } from 'gatsby'
import WorkImageTri from "../../components/WorkImageTri"
import Trailer from "../../assets/videos/LumeraTrailer.mp4"

const LumeraPage = () => {
  const data = useStaticQuery(graphql`
    query LumeraContentQuery {
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
  
  const HeroData = data.allWorksJson.edges[3].node.herodata
  const Content = data.allWorksJson.edges[3].node.content
  const Images = data.allWorksJson.edges[3].node.images

  return (
    <Layout>
      <Seo title="Lumera" />
      <WorkHero title="LUMERA" herodata={HeroData[0]}/>
      <Video 
        videoSrcURL={Trailer} 
        videoTitle="Lumera Trailer"
      />
      <WorkParagraph title={Content[0].title} paragraph={Content[0].paragraph} />
      <WorkImage imagedata={Images[0]} />
      <WorkParagraph title={Content[1].title} paragraph={Content[1].paragraph} />
      <WorkImageTri imagedata1={Images[1]} imagedata2={Images[2]} imagedata3={Images[3]} />
      <WorkParagraph title={Content[2].title} paragraph={Content[2].paragraph} />
      <WorkImage imagedata={Images[4]} />
    </Layout>
  )
}

export default LumeraPage

