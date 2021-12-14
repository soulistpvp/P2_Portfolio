import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MiniAbout from "../components/MiniAbout"
import AboutHero from "../components/AboutHero"
import AboutText from "../components/AboutText"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <MiniAbout intro="Hello, I'm" title="Paul Pinto, a game designer and developer." paragraph="I am a graduate from Simon Fraser University where I recieved a Bachelor of Science degree in Interactive Arts and Technology with a concentration in design and interactive systems. From when I first started university creating a simple text adventure in Python, I've gained more experience in creating games in Unity, Unreal Engine 4, Godot, and Tabletop Simulator."/>
    <AboutHero paragraph="I fell in love with games ever since I was a child whether it be playground games, role playing, or video games, I found that exploring new worlds, experiencing unique interactions, and trying my best competively was truly riveting. As I grew older, I found more ways to play games from card games to tabletop games to console games to mobile games." />
    <AboutText paragraph="Being born and raised in Vanouver, BC, I am fortunate enough to experience many different opportunies that have influenced my style and methodolgies. I love to focus on the key interactions between a player and the mechanics of a game. As these moments bring out the best of a player as they try to overcome any challenge that comes their way. I can't wait for the opportunities to work on various projects and embrace new insights and understandings." />
  </Layout>
)

export default AboutPage
