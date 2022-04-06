import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

import "./styles/styles.css";

import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';
import NavBar from './components/NavBar.jsx';

export default function Home() {
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&family=Ruluko&display=swap" rel="stylesheet" />

      <Seo />
      <main role="main" className="wrapper">
        <NavBar active="home"></NavBar>
        <PageRouter />
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        
      </footer>
    </Router>
  );
}
