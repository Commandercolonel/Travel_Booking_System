import React from 'react';
import { Link } from 'react-router-dom';

export default function FlightCard({ flight }) {
  return (
    <div className="hotel-card" role="article" aria-label={`${flight.airline} ${flight.flightNumber}`}>
      <img src={flight.img} alt={`${flight.airline} ${flight.flightNumber}`} />
      <div className="price-badge">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(flight.price)}</div>
      <div className="hotel-info">
        <h3>{flight.airline} — {flight.flightNumber}</h3>
        <p className="muted">{flight.from} → {flight.to}</p>
        <p className="muted">Dep: {flight.departure} • Arr: {flight.arrival} • {flight.duration}</p>
        <div className="meta">
          <span className="rating-badge">✈️ {flight.class || 'Economy'}</span>
          <Link to={{ pathname: '/book', state: { itemId: flight.id } }} className="btn">View / Book</Link>
        </div>
      </div>
    </div>
  );
}
