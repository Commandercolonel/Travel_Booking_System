import React from 'react';
import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
  return (
    <div className="hotel-card" role="article" aria-label={tour.name}>
      <img src={tour.img} alt={tour.name} />
      <div className="price-badge">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(tour.price)}</div>
      <div className="hotel-info">
        <h3>{tour.name}</h3>
        <p className="muted">{tour.location} • {tour.duration}</p>
        <p className="muted">{tour.description}</p>
        <div className="meta">
          <Link to={{ pathname: '/book', state: { itemId: tour.id } }} className="btn">View / Book</Link>
        </div>
      </div>
    </div>
  );
}
