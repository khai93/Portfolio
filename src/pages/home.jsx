import * as React from "react";
import Button from "../components/Button.jsx";
import Title from "../components/Title.jsx";
import Space from "../components/Space.jsx";
import Project from "../components/Project.jsx";
import AboutCard from "../components/AboutCard.jsx";
import ContactForm from "../components/ContactForm.jsx";
import projects from "../projects.json";
import '../styles/home.css';

const Hero = () => {
  return (
    <div className="content hero">
      <h2 className="hero-text">My name is <b>Nang Khai,</b> a self-taught</h2>
      <h1 className="hero-title">Full-Stack Developer</h1>
      <h2 className="hero-text">prefering backend development.</h2>
      <div className="hero-buttons">
        <Button content={"View Projects"} onClick={() => window.location.replace("#projects")} />
        <Button content="Contact Me" style="secondary" onClick={() => window.location.replace("#contact")} />
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
        <Space height="10px" />
        {
          projects && projects.length > 0 && projects.map(v => <Project key={v.name} name={v.name} image={v.image} description={v.description} sourceLink={v.sourceLink} previewLink={v.previewLink} technologies={v.technologies} />)
        }
      </div>
      <Space height="8em" />
      <div id="about" className="about">
        <Title title="About" />
        <p className="about-main">
          I love transforming ideas into reality. Solving problems during the development process
          along with new technologies are what drives me to pursue programming.
          I strive to create clean architecture using design patterns while following SOLID.
          Whenever possible, I’ll follow TDD and keep my code tested.
        </p>
        <div className="aboutCards">
          <AboutCard iconUrl="https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/heart-icon.svg?v=1649279300824" name="Self-Confident" description="You can be sure that any task you require, I will try my best to finish it independently." />
          <AboutCard iconUrl="https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/gear-icon.svg?v=1649279430355" name="Open-Minded" description="When I am bewildered by a problem, I’ll seek mentorship to fully understand the solution." />
          <AboutCard iconUrl="https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/check-icon.svg?v=1649279504436" name="Perfectionist" description="All tasks assigned to me will be solved with the best practices that I can manage." />
        </div>
        <Space height="8em" />
      </div>
      <div id="contact">
        <Title title="Contact" />
        <ContactForm />
        <Space height="8em" />
      </div>
    </>
  );
}
