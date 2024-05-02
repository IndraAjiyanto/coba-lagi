import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Movie from "./pages/Movie"

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App