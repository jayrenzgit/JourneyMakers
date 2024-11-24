import React from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { RecentClients } from '../components/RecentClients';
import { Contact } from '../components/Contact';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SearchBar />
      <RecentClients />
      <Contact />
    </div>
  );
}

export default Home;