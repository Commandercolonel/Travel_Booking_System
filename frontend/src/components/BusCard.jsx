import React from 'react';
import { Link } from 'react-router-dom';

export default function BusCard({ bus }) {
  return (
    <div className="hotel-card" role="article" aria-label={`${bus.operator} ${bus.busNumber}`}>
      <img src={bus.img} alt={`${bus.operator} ${bus.busNumber}`} />
      <div className="price-badge">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(bus.price)}</div>
      <div className="hotel-info">
        <h3>{bus.operator}</h3>
        <p className="muted">{bus.from} → {bus.to}</p>
        <p className="muted">Dep: {bus.departure} • Arr: {bus.arrival} • {bus.duration}</p>
        <div className="meta">
          <Link to={{ pathname: '/book', state: { itemId: bus.id } }} className="btn">View / Book</Link>
        </div>
      </div>
    </div>
  );
}
