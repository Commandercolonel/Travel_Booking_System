import React from 'react';
import { TOURS } from '../data/mockData';
import TourCard from '../components/TourCard';

export default function Tours() {
  return (
    <main className="container">
      <h2>Tours & Packages</h2>
      <div className="grid">
        {TOURS.map(t => <TourCard key={t.id} tour={t} />)}
      </div>
    </main>
  );
}
