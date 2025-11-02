import React from 'react';
import { Link } from 'react-router-dom';

export default function HotelCard({ hotel }) {
  return (
    <div className="hotel-card" role="article" aria-label={hotel.name}>
  <img src={hotel.img} alt={hotel.name} loading="lazy" />
  <div className="price-badge">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(hotel.price)}</div>
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p className="muted">{hotel.location}</p>
        <p className="muted">{hotel.description}</p>
        <div className="meta">
          <span className="rating-badge">⭐ {hotel.rating}</span>
          <Link to={{ pathname: '/book', state: { itemId: hotel.id } }} className="btn">View / Book</Link>
        </div>
      </div>
    </div>
  );
}
