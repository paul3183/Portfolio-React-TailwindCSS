import React from "react"
import Works from "./components/Works"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Technologies from "./components/Technologies"
// import Valores from "./components/Valores"

import AboutMe from "./components/AboutMe"
import CertificatedWorks from "./components/CertificatedWorks"
import CertificatedStudent from "./components/CertificatedStudent"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <div className="text-center pt-12 ">
        <h2 className="text-3xl text-black pb-12">About Me</h2>
        <AboutMe />
      </div>
      <div className=" text-center text-3xl m-3 pt-12" id='technologies'>
        <h2 className=" text-black pb-12">Technologies</h2>
        <Technologies />
      </div>
      {/* <Valores /> */}
      <div className=" text-center text-3xl m-3 pt-24">
        <h2 className="text-black">Certificated</h2>
      </div>
      <CertificatedWorks />
      <CertificatedStudent />

      <div className=" text-center text-3xl m-3 pt-24">
        <h2 className=" text-black pb-12">Projects</h2>
      </div>
      <Works />
      <Footer />
    </div>
  )
}

export default App
