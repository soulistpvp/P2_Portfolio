import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import { motion } from "framer-motion"
import styled from "styled-components"

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle/>
        <motion.div
          initial="start"
          animate="finish"
          variants={{
            start: {
              scale: 0.2,
              opacity: 0
            },
            finish: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            },
          }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 1
          }}
          >
          <Header/>
        </motion.div>
        <motion.main
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.6
          }}
        >
          {children}
        <Footer/>
        </motion.main>
      
    </>
  )
}

export default Layout

const IntroBox = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
`