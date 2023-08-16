import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      
      <div className="card-container">
        <Card title="Card 1" content="Card content 1" />
        <Card title="Card 2" content="Card content 2" />
        <Card title="Card 3" content="Car d content 3" />
        <Card title="Card 4" content="Card content 4" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
