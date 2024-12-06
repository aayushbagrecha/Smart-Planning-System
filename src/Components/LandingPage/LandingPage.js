// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
