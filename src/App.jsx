import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NaviBar from "./components/NaviBar"
import Banner from "./components/Banner"
import AboutUs from "./components/AboutUs"
import Product from "./components/Product"
import Factory from "./components/Factory"
import Donnations from "./components/Donnations"

function App() {


  return (
    <>
  <NaviBar/>
  <Banner/>
  <AboutUs/>
  <Product/>
  <Factory/>
  <Donnations/>
    </>
  )
}

export default App
