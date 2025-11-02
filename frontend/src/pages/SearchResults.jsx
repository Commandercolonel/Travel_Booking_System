import React from 'react';
import { useBooking } from '../context/BookingContext';
import HotelCard from '../components/HotelCard';

export default function SearchResults() {
  const { searchResults } = useBooking();
  return (
    <main className="container">
      <h1>Search results</h1>
      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid">
          {searchResults.map(h => <HotelCard key={h.id} hotel={h} />)}
        </div>
      )}
    </main>
  );
}