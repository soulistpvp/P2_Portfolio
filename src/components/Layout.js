import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import { motion } from "framer-motion"

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle/>
        <motion.main
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 0.2,
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.5
          }}
        >
          <Header/>
        </motion.main>
        <motion.main
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{
            delay: 1,
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.5
          }}
        >
          {children}
        </motion.main>
      
      <Footer/>
    </>
  )
}

export default Layout