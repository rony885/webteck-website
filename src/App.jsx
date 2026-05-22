// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./App.css";
// // import ColorScheme from "./components/ColorScheme";
// import Loader from "./components/Loader";
// import NotFound from "./components/NotFound";
// import Sidebarmenu from "./components/Sidebarmenu/Sidebarmenu";
// import PopupSearchBox from "./components/PopupSearchBox";
// import Header from "./components/Header/Header";
// import Mobilemenu from "./components/Mobilemenu";
// import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";

// import Services from "./pages/Services/Services";
// import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";

// import Portfolio from "./pages/Portfolio/Portfolio";
// import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";

// import Blog from "./pages/Blog/Blog";
// import BlogDetails from "./pages/BlogDetails/BlogDetails";

// import Contact from "./pages/Contact/Contact";

// import Team from "./pages/Team/Team";
// import TeamDetails from "./pages/TeamDetails/TeamDetails";
// import Gallery from "./pages/Gallery/Gallery";
// import Pricing from "./pages/Pricing/Pricing";
// import Faq from "./pages/Faq/Faq";
// // import gsap from "gsap";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   // useEffect(() => {
//   //   gsap.to(".box", {
//   //     x: 100,
//   //     duration: 1,
//   //   });
//   // }, []);

//   return (
//     <div className="App">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <BrowserRouter>
//           {/* <ColorScheme /> */}
//           <Sidebarmenu />
//           <PopupSearchBox />
//           <Mobilemenu closeMenu={closeMenu} menuOpen={menuOpen} />
//           <Header toggleMenu={toggleMenu} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />

//             <Route path="/services" element={<Services />} />
//             <Route path="/service-details" element={<ServicesDetails />} />

//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/portfolio-details" element={<PortfolioDetails />} />

//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog-details" element={<BlogDetails />} />

//             <Route path="/contact" element={<Contact />} />

//             <Route path="/team" element={<Team />} />
//             <Route path="/team-details" element={<TeamDetails />} />

//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/faq" element={<Faq />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Footer />
//           <ScrollToTop />
//         </BrowserRouter>
//       )}
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import Sidebarmenu from "./components/Sidebarmenu/Sidebarmenu";
import PopupSearchBox from "./components/PopupSearchBox";
import Header from "./components/Header/Header";
import Mobilemenu from "./components/Mobilemenu";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Top from "./components/Top";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
import Gallery from "./pages/Gallery/Gallery";
import Pricing from "./pages/Pricing/Pricing";
import Faq from "./pages/Faq/Faq";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebarmenu />
        <PopupSearchBox />
        <Mobilemenu closeMenu={closeMenu} menuOpen={menuOpen} />
        <Header toggleMenu={toggleMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route
            path="/services/service-details/:id"
            element={<ServicesDetails />}
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog-details/:id" element={<BlogDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/team" element={<Team />} />
          <Route path="/team/team-details/:id" element={<TeamDetails />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <Top />
      </div>
    </BrowserRouter>
  );
}

export default App;
