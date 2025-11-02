import React, { createContext, useContext, useState, useEffect } from 'react';
import { HOTELS, FLIGHTS, BUSES, TRAINS, TOURS } from '../data/mockData';

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [searchResults, setSearchResults] = useState(HOTELS);
  const [bookings, setBookings] = useState(() => {
    try {
      const raw = localStorage.getItem('bookings');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // persist bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bookings', JSON.stringify(bookings));
    } catch (e) {
      // ignore write errors
    }
  }, [bookings]);

  function search({ destination }) {
    const q = (destination || '').toLowerCase();
    // Search across hotels and tours for location/name matches (simple implementation)
    const hotelResults = HOTELS.filter(h => h.name.toLowerCase().includes(q) || h.location.toLowerCase().includes(q));
    const tourResults = TOURS.filter(t => t.name.toLowerCase().includes(q) || (t.location||'').toLowerCase().includes(q));
    setSearchResults([...hotelResults, ...tourResults]);
  }

  function getHotelById(id) {
    return HOTELS.find(h => h.id === id);
  }

  function getItemByAnyId(id) {
    if (!id) return null;
    const prefix = id[0];
    if (prefix === 'h') return { type: 'hotel', item: HOTELS.find(x => x.id === id) };
    if (prefix === 'f') return { type: 'flight', item: FLIGHTS.find(x => x.id === id) };
    if (prefix === 'b') return { type: 'bus', item: BUSES.find(x => x.id === id) };
    if (prefix === 't') return { type: 'train', item: TRAINS.find(x => x.id === id) };
    if (prefix === 'p') return { type: 'tour', item: TOURS.find(x => x.id === id) };
    // fallback - search all
    const all = [...HOTELS, ...FLIGHTS, ...BUSES, ...TRAINS, ...TOURS];
    const found = all.find(x => x.id === id);
    return found ? { type: 'unknown', item: found } : null;
  }

  function createBooking(data) {
    // data may contain: itemId, itemType (optional), name, email, passengers/guests, checkin, checkout, travelDate, class
    const id = `bk${Date.now()}`;
    const itemLookup = getItemByAnyId(data.itemId);
    const item = itemLookup?.item || null;
    const itemType = itemLookup?.type || data.itemType || 'unknown';

    // compute total
    let total = 0;
    const count = Number(data.passengers ?? data.guests ?? data.travelers ?? 1) || 1;
    if (!item) total = 0;
    else if (itemType === 'hotel') {
      // compute nights if dates provided
      let nights = 1;
      if (data.checkin && data.checkout) {
        const ci = new Date(data.checkin);
        const co = new Date(data.checkout);
        const diff = Math.ceil((co - ci) / (1000 * 60 * 60 * 24));
        nights = diff > 0 ? diff : 1;
      }
      total = (item.price || 0) * nights * count;
    } else if (['flight', 'bus', 'train', 'tour'].includes(itemType)) {
      total = (item.price || 0) * count;
    } else {
      total = (item.price || 0) * count;
    }

    const booking = {
      id,
      itemType,
      item,
      name: data.name,
      email: data.email,
      passengers: count,
      checkin: data.checkin || null,
      checkout: data.checkout || null,
      travelDate: data.travelDate || data.checkin || null,
      extra: data.extra || null,
      total
    };

    setBookings(prev => [booking, ...prev]);
    return booking;
  }

  function removeBooking(id) {
    setBookings(prev => prev.filter(b => b.id !== id));
  }

  function getBookingById(id) {
    return bookings.find(b => b.id === id);
  }

  return (
    <BookingContext.Provider value={{ searchResults, search, createBooking, getHotelById, getItemByAnyId, getBookingById, bookings, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
