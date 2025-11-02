import React from 'react';
import { TRAINS } from '../data/mockData';
import TrainCard from '../components/TrainCard';

export default function Trains() {
  return (
    <main className="container">
      <h2>Trains</h2>
      <div className="grid">
        {TRAINS.map(t => <TrainCard key={t.id} train={t} />)}
      </div>
    </main>
  );
}
