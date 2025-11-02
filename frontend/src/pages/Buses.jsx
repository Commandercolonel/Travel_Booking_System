import React from 'react';
import { BUSES } from '../data/mockData';
import BusCard from '../components/BusCard';

export default function Buses() {
  return (
    <main className="container">
      <h2>Buses</h2>
      <div className="grid">
        {BUSES.map(b => <BusCard key={b.id} bus={b} />)}
      </div>
    </main>
  );
}
