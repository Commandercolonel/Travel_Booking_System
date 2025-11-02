import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainCard({ train }) {
  return (
    <div className="hotel-card" role="article" aria-label={`${train.operator} ${train.trainNumber}`}>
      <img src={train.img} alt={`${train.operator} ${train.trainNumber}`} />
      <div className="price-badge">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(train.price)}</div>
      <div className="hotel-info">
        <h3>{train.operator} — {train.trainNumber}</h3>
        <p className="muted">{train.from} → {train.to}</p>
        <p className="muted">Dep: {train.departure} • Arr: {train.arrival} • {train.duration}</p>
        <div className="meta">
          <Link to={{ pathname: '/book', state: { itemId: train.id } }} className="btn">View / Book</Link>
        </div>
      </div>
    </div>
  );
}
