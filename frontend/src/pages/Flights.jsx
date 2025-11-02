import React from 'react';
import { FLIGHTS } from '../data/mockData';
import FlightCard from '../components/FlightCard';

export default function Flights() {
  return (
    <main className="container">
      <h2>Flights</h2>
      <div className="grid">
        {FLIGHTS.map(f => <FlightCard key={f.id} flight={f} />)}
      </div>
    </main>
  );
}
