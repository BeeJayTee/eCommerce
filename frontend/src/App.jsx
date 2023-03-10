import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Inforbar from "./components/global/Infobar";
import Navbar from "./components/global/Navbar";
Navbar;

function App() {
  return (
    <div className="App">
      <Router>
        <Inforbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
