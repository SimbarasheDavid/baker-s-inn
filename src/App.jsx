import React from "react"
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import HomePage from "./components/MainPages/HomePage"
import AboutPage from "./components/MainPages/AboutPage"
import ProductsPages from "./components/MainPages/ProductsPages"
import RecipesPage from "./components/MainPages/RecipesPage"
import KidsCornerPage from "./components/MainPages/KidsCornerPage.Jsx"



function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutpage" element={<AboutPage/>}/>
          <Route exact path="/productspages" element={<ProductsPages/>}/>
          <Route exact path="/recipespage" element={<RecipesPage/>}/>
          <Route exact path="/kidscornerpage" element={<KidsCornerPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
