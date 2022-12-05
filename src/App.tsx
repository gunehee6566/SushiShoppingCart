import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { ItemDesc } from "./pages/ItemDesc"
import './App.scss'

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:itemId" element={<ItemDesc />} />
        </Routes>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
