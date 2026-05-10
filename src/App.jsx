import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ColorScheme from "./components/ColorScheme";
import Loader from "./components/Loader";
import Sidebarmenu from "./components/Sidebarmenu/Sidebarmenu";
import PopupSearchBox from "./components/PopupSearchBox";
import Header from "./components/Header/Header";
import { BiHome } from "react-icons/bi";
import Mobilemenu from "./components/Mobilemenu";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import NotFound from "./components/NotFound";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Gallery from "./pages/Gallery/Gallery";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ColorScheme />
        {/* <Loader/> */}
        <Sidebarmenu />
        <PopupSearchBox />
        <Mobilemenu closeMenu={closeMenu} menuOpen={menuOpen} />
        <Header toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServicesDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
