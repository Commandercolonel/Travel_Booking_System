import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function SearchBar() {
  const [destination, setDestination] = useState('');
  const { search } = useBooking();
  const history = useHistory();

  function submit(e) {
    e.preventDefault();
    search({ destination });
    history.push('/search');
  }

  return (
    <form className="search-bar" onSubmit={submit}>
      <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination or hotel name" />
      <button type="submit">Search</button>
    </form>
  );
}
