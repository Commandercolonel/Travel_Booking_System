import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function BookingDetails() {
  const { id } = useParams();
  const { getItemByAnyId } = useBooking();
  const lookup = getItemByAnyId(id);
  const history = useHistory();

  if (!lookup || !lookup.item) return <main className="container"><p>Item not found.</p></main>;

  const { itemType, item } = { itemType: lookup.type, item: lookup.item };

  return (
    <main className="container">
      <h1>{item.name || item.airline || item.operator || item.trainNumber}</h1>
      <img src={item.img} alt={item.name || item.airline || item.operator} style={{ maxWidth: 480 }} />
      <p className="muted">{item.location || `${item.from || ''} → ${item.to || ''}`}</p>
      {item.description && <p className="muted">{item.description}</p>}
      <p>Price: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)} {itemType === 'hotel' ? '/ night' : ''}</p>
      <button className="btn" onClick={() => history.push({ pathname: '/book', state: { itemId: item.id } })}>Book this {itemType}</button>
    </main>
  );
}