// css files
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/home/Home.jsx";
import Sneakers from "./components/Sneakers/Sneakers.jsx";
import Apparels from "./components/Apparels/Apparels.jsx";
import Protect from "./components/Protect/Protect.jsx";
import LegitCheck from "./components/LegitCheck/LegitCheck.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Login from "./components/LoginSignUp/Login.jsx";
import SignUp from "./components/LoginSignUp/SignUp.jsx";
import ErrorPage from "./components/common/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="apparels" element={<Apparels />} />
          <Route path="protect" element={<Protect />} />
          <Route path="legitCheck" element={<LegitCheck />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// {/* <Home /> */}
// {/* <Sneakers /> */}
// {/* <Apparels /> */}
// {/* <Protect /> */}
// {/* <LegitCheck /> */}
// {/* <AboutUs /> */}
