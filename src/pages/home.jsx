import * as React from "react";
import Button from "../components/Button.jsx";
import Title from "../components/Title.jsx";
import Space from "../components/Space.jsx";
import { useLocation } from "wouter";
import '../styles/home.css';

const Hero = () => {
  const [location, navigate] = useLocation();
  return (
    <div className="content hero">
      <h2 className="hero-text">My name is <b>Nang Khai,</b> a self-taught</h2>
      <h1 className="hero-title">Full-Stack Developer</h1>
      <h2 className="hero-text">prefering backend development.</h2>
      <div className="hero-buttons">
        <Button content={"View Projects"} onClick={() => navigate("#projects")} />
        <Button content="Contact Me" style="secondary" onClick={() => navigate("#contact")} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <div id="projects" className="projects">
        <Title title="Projects"/>
        
      </div>
      
    </>
  );
}
