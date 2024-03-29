import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Inforbar from "./components/global/Infobar";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Product from "./pages/Product";
import Products from "./pages/Products";
Navbar;

function App() {
  return (
    <div className="App">
      <Router>
        <Inforbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
