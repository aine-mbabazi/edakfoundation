"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <About/>
      <Programs/>
      <Gallery/>
      <Contacts/>
      
      <Footer/>
    </div>
  );
}