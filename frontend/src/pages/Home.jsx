import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { HOTELS } from '../data/mockData';
import HotelCard from '../components/HotelCard';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Discover and book your perfect stay</h1>
        <p className="muted">Handpicked hotels, transparent prices, and instant booking confirmations.</p>
        <div style={{marginTop:12}}>
          <Link to="/search" className="btn">Search hotels</Link>
        </div>
      </section>

      <SearchBar />

      <h2 style={{marginTop:20}}>Featured stays</h2>
      <div className="grid">
        {HOTELS.map(h => <HotelCard key={h.id} hotel={h} />)}
      </div>
    </main>
  );
}