<?php

namespace App\Controllers;

use App\Models\Booking;

class BookingController
{
    public function createBooking($request)
    {
        // Logic to create a new booking
        $bookingData = $request->getParsedBody();
        $booking = new Booking($bookingData);
        $booking->save();

        return json_encode(['message' => 'Booking created successfully', 'booking' => $booking]);
    }

    public function getBooking($id)
    {
        // Logic to retrieve a booking by ID
        $booking = Booking::find($id);
        if (!$booking) {
            return json_encode(['message' => 'Booking not found'], 404);
        }

        return json_encode($booking);
    }

    public function updateBooking($id, $request)
    {
        // Logic to update an existing booking
        $bookingData = $request->getParsedBody();
        $booking = Booking::find($id);
        if (!$booking) {
            return json_encode(['message' => 'Booking not found'], 404);
        }

        $booking->update($bookingData);
        return json_encode(['message' => 'Booking updated successfully', 'booking' => $booking]);
    }

    public function deleteBooking($id)
    {
        // Logic to delete a booking
        $booking = Booking::find($id);
        if (!$booking) {
            return json_encode(['message' => 'Booking not found'], 404);
        }

        $booking->delete();
        return json_encode(['message' => 'Booking deleted successfully']);
    }
}