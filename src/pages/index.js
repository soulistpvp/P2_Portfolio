import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Works from "../components/DisplayWorks"
import MiniAbout from "../components/MiniAbout"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <MiniAbout intro="Hello, my name is" title="Paul Pinto." paragraph=" A game designer and developer with experience in Unity, Unreal Engine 4, Godot, and prototyping. With a passion in all things tabletop games, card games, and video games, I love discovering interactions and emergent gameplay between players and the game mechanics." />
    <Works heading="Featured Works"/>
  </Layout>
)

export default IndexPage
