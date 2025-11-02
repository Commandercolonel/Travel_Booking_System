import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function Bookings() {
  const { bookings, removeBooking } = useBooking();

  if (!bookings || bookings.length === 0) {
    return (
      <main className="container">
        <h1>Your bookings</h1>
        <p>You have no bookings yet.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Your bookings</h1>
      <div className="bookings-list">
        {bookings.map(b => (
          <div className="booking-card" key={b.id}>
            <div className="booking-left">
              <img src={b.hotel?.img} alt={b.hotel?.name} />
            </div>
            <div className="booking-body">
              <h3>{b.hotel?.name}</h3>
              <p>{b.hotel?.location}</p>
              <p>Guest: {b.name} · Email: {b.email}</p>
              <p>Check-in: {b.checkin || 'N/A'} — Check-out: {b.checkout || 'N/A'}</p>
              <p>Total: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(b.total)}</p>
              <div className="booking-actions">
                <button className="btn btn-secondary" onClick={() => removeBooking(b.id)}>Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
