import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NaviBar from "./components/NaviBar"
import Footer from "./components/Footer"
import HomePagge from "./components/MainPagEs/HomePagge"
import AboutUsPage from "./components/MainPagEs/AboutUsPage"
import ProducePage from "./components/MainPagEs/ProducePage"
import ReccipesPage from "./components/MainPagEs/ReccipesPage"
import KidsCornerPage from "./components/MainPagEs/KidsCornerPage"
import ContactUsPage from "./components/MainPagEs/ContactUsPage"

function App() {


  return (
    <>
    <Router>
    <NaviBar/>
<Routes>
  <Route exact path="/" element={<HomePagge/>} />
  <Route exact path="aboutuspage" element={<AboutUsPage/>} />
  <Route exact path="producepage" element={<ProducePage/>} />
  <Route exact path="reccipespage" element={<ReccipesPage/>} />
  <Route exact path="kidscornerpage" element={<KidsCornerPage/>} />
  <Route exact path="contactuspage" element={<ContactUsPage/>} />
</Routes>
  <Footer/>
    </Router>
 
    </>
  )
}

export default App
