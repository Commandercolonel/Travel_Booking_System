import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const BookingForm = () => {
    const { createBooking, getItemByAnyId } = useBooking();
    const loc = useLocation();
    const itemId = loc.state?.itemId || loc.state?.hotelId || '';
    const lookup = itemId ? getItemByAnyId(itemId) : null;
    const item = lookup?.item || null;
    const itemType = lookup?.type || (item ? 'unknown' : null);

    const initial = {
        itemId,
        name: '',
        email: '',
        passengers: 1,
        checkin: '',
        checkout: '',
        travelDate: ''
    };

    const [formData, setFormData] = useState(initial);
    const [confirmation, setConfirmation] = useState(null);

    useEffect(() => {
        if (itemId) setFormData(fd => ({ ...fd, itemId }));
    }, [itemId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        // normalize field names for context
        if (itemType === 'hotel') {
            data.guests = Number(formData.passengers || formData.guests || 1);
        } else {
            data.passengers = Number(formData.passengers || 1);
        }
        const booking = createBooking(data);
        setConfirmation(booking);
    };

    if (confirmation) {
        return (
            <div className="container">
                <h2>Booking confirmed</h2>
                <p>Booking ID: {confirmation.id}</p>
                <p>Item: {confirmation.item?.name || confirmation.item?.airline || confirmation.item?.operator}</p>
                <p>Total: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(confirmation.total)}</p>
            </div>
        );
    }

    return (
        <form className="booking-form container" onSubmit={handleSubmit}>
            <h2>Book {item ? `- ${item.name || item.airline || item.operator}` : ''}</h2>
            {!item && (
                <input name="itemId" placeholder="Item ID (e.g. h1, f1, b1, t1, p1)" value={formData.itemId} onChange={handleChange} />
            )}

            <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />

            {/* Conditional fields based on item type */}
            {itemType === 'hotel' ? (
                <>
                    <label>Guests</label>
                    <input name="passengers" type="number" min="1" value={formData.passengers} onChange={handleChange} />
                    <label>Check-in</label>
                    <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} />
                    <label>Check-out</label>
                    <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} />
                </>
            ) : (
                <>
                    <label>Passengers</label>
                    <input name="passengers" type="number" min="1" value={formData.passengers} onChange={handleChange} />
                    <label>Travel Date</label>
                    <input name="travelDate" type="date" value={formData.travelDate} onChange={handleChange} />
                </>
            )}

            <button type="submit">Confirm booking</button>
        </form>
    );
};

export default BookingForm;