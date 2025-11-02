<?php

class Booking {
    private $id;
    private $userId;
    private $travelDetails;
    private $bookingDate;
    private $status;

    public function __construct($userId, $travelDetails, $bookingDate, $status = 'pending') {
        $this->userId = $userId;
        $this->travelDetails = $travelDetails;
        $this->bookingDate = $bookingDate;
        $this->status = $status;
    }

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getUserId() {
        return $this->userId;
    }

    public function getTravelDetails() {
        return $this->travelDetails;
    }

    public function getBookingDate() {
        return $this->bookingDate;
    }

    public function getStatus() {
        return $this->status;
    }

    public function setStatus($status) {
        $this->status = $status;
    }

    public function save() {
        // Logic to save booking to the database
    }

    public static function find($id) {
        // Logic to find a booking by ID
    }

    public static function all() {
        // Logic to retrieve all bookings
    }
}