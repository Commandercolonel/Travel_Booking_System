<?php

class PaymentService {
    private $apiKey;
    private $apiUrl;

    public function __construct($apiKey, $apiUrl) {
        $this->apiKey = $apiKey;
        $this->apiUrl = $apiUrl;
    }

    public function processPayment($amount, $currency, $paymentMethod) {
        // Logic to process payment using the payment gateway API
        $data = [
            'amount' => $amount,
            'currency' => $currency,
            'payment_method' => $paymentMethod,
        ];

        $ch = curl_init($this->apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey,
        ]);

        $response = curl_exec($ch);
        curl_close($ch);

        return json_decode($response, true);
    }
}