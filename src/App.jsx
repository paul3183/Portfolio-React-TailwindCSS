import React from "react"
import Works from "./components/Works"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Technologies from "./components/Technologies"
import Valores from "./components/Valores"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <div className=" text-center text-3xl m-3">
        <h2 className=" text-black">Technologies</h2>
        <Technologies />
      </div>
      <Valores />
      <div className=" text-center text-3xl m-3">
        <h2 className=" text-black">Projects</h2>
      </div>
      <Works />
      <Footer />
    </div>
  )
}

export default App
