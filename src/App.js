import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App w-screen min-h-screen px-[1rem] md:px-[2rem] xl:px-0 xl:max-w-[1300px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
