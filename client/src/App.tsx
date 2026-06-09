import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cakes from "./pages/Cakes"
import Drinks from "./pages/Drinks"
import Breads from "./pages/Breads"
import Cookies from "./pages/Cookies"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu-category/cakes" element={<Cakes />} />
      <Route path="/menu-category/drinks" element={<Drinks />} />
      <Route path="/menu-category/breads" element={<Breads />} />
      <Route path="/menu-category/cookies" element={<Cookies />} />
    </Routes>
  )
}