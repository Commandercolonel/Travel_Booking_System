export const HOTELS = [
  { id: 'h1', name: 'Taj Mahal Palace', location: 'Mumbai, India', price: 15000, rating: 4.8, img: './images/1.jpg', description: 'Iconic luxury hotel in Mumbai.' },
  { id: 'h2', name: 'The Oberoi', location: 'New Delhi, India', price: 14000, rating: 4.7, img: './images/2.jpg', description: 'Elegant hotel near business district.' },
  { id: 'h3', name: 'ITC Grand Chola', location: 'Chennai, India', price: 12000, rating: 4.6, img: './images/3.jpg', description: 'Palatial hotel with premium amenities.' },
  { id: 'h4', name: 'The Leela Palace', location: 'Bengaluru, India', price: 11000, rating: 4.6, img: './images/4.jpg', description: 'Luxury stay with urban convenience.' },
  { id: 'h5', name: 'JW Marriott', location: 'Kochi, India', price: 9000, rating: 4.4, img: './images/5.jpg', description: 'Comfortable business & leisure hotel.' },
  { id: 'h6', name: 'The Park', location: 'Hyderabad, India', price: 8000, rating: 4.3, img: './images/6.jpg', description: 'Stylish hotel with modern amenities.' },
  { id: 'h7', name: 'Radisson Blu', location: 'Pune, India', price: 7000, rating: 4.2, img: './images/7.jpg', description: 'Reliable upscale hotel in Pune.' },
  { id: 'h8', name: 'The Lalit', location: 'Kolkata, India', price: 6500, rating: 4.1, img: './images/8.jpg', description: 'Luxurious comfort in the city.' },
  { id: 'h9', name: 'Fortune Park', location: 'Ahmedabad, India', price: 5000, rating: 4.0, img: './images/9.jpg', description: 'Good value hotel for travelers.' },
  
  // 11 additional hotels; 5 located in Tamil Nadu with prices between ₹5,000 - ₹6,500
  { id: 'h11', name: 'Hotel Breeze', location: 'Chennai, Tamil Nadu', price: 6200, rating: 4.2, img: './images/11.jpg', description: 'Comfortable stay close to the marina.' },
  { id: 'h12', name: 'Coimbatore Central', location: 'Coimbatore, Tamil Nadu', price: 5400, rating: 4.0, img: './images/12.jpg', description: 'Business-friendly hotel with great connectivity.' },
  { id: 'h13', name: 'Madurai Heritage Hotel', location: 'Madurai, Tamil Nadu', price: 5000, rating: 4.1, img: './images/13.jpg', description: 'Close to temples and local markets.' },
  { id: 'h14', name: 'Ooty Hills Resort', location: 'Ooty, Tamil Nadu', price: 6500, rating: 4.3, img: './images/14.jpg', description: 'Hill resort with valley views.' },
  { id: 'h15', name: 'Kodaikanal View Inn', location: 'Kodaikanal, Tamil Nadu', price: 5800, rating: 4.2, img: './images/15.jpg', description: 'Scenic stay with lake access.' },
  // 6 more hotels across India
  { id: 'h16', name: 'Ginger Hotel', location: 'Bhubaneswar, India', price: 4800, rating: 3.9, img: './images/16.jpg', description: 'Affordable, clean and convenient.' }

];

export const FLIGHTS = [
  { id: 'f1', airline: 'Air India', flightNumber: 'AI-101', from: 'Mumbai', to: 'New Delhi', departure: '06:00', arrival: '08:15', duration: '2h 15m', price: 6500, img: './images/43.webp', description: 'Early morning non-stop service with generous legroom and complimentary snacks.' },
  { id: 'f2', airline: 'IndiGo', flightNumber: '6E-452', from: 'Bengaluru', to: 'Mumbai', departure: '09:30', arrival: '11:00', duration: '1h 30m', price: 4500, img: './images/44.webp', description: 'Reliable daytime flight with on-time performance and priority boarding options.' },
  { id: 'f3', airline: 'Vistara', flightNumber: 'UK-205', from: 'Chennai', to: 'Bengaluru', departure: '14:00', arrival: '15:05', duration: '1h 5m', price: 4000, img: './images/45.webp', description: 'Premium cabin comfort and refined in-flight service for a relaxed journey.' },
  { id: 'f4', airline: 'SpiceJet', flightNumber: 'SG-320', from: 'Kolkata', to: 'Hyderabad', departure: '18:45', arrival: '21:20', duration: '2h 35m', price: 7200, img: './images/46.webp', description: 'Evening service with flexible fare classes and extra baggage options.' },
  { id: 'f5', airline: 'GoAir', flightNumber: 'G8-118', from: 'Pune', to: 'Goa', departure: '07:15', arrival: '08:00', duration: '0h 45m', price: 3200, img: './images/47.webp', description: 'Short hop to the coast — perfect for weekend getaways with fast check-in.' },
  { id: 'f6', airline: 'Vistara', flightNumber: 'UK-512', from: 'Delhi', to: 'Goa', departure: '06:30', arrival: '08:50', duration: '2h 20m', price: 9800, img: './images/48.webp', description: 'Curated leisure service with inflight refreshments and premium seating.' },
  { id: 'f7', airline: 'IndiGo', flightNumber: '6E-210', from: 'Hyderabad', to: 'Bengaluru', departure: '12:00', arrival: '13:10', duration: '1h 10m', price: 4200, img: './images/49.webp', description: 'Business-friendly timings and quick turnaround for same-day travel.' },
  { id: 'f8', airline: 'AirAsia India', flightNumber: 'I5-345', from: 'Kochi', to: 'Bengaluru', departure: '15:40', arrival: '16:45', duration: '1h 5m', price: 3600, img: './images/50.webp', description: 'Budget-conscious fares with optional add-ons and transparent pricing.' },
  { id: 'f9', airline: 'SpiceJet', flightNumber: 'SG-410', from: 'Mumbai', to: 'Hyderabad', departure: '20:30', arrival: '22:00', duration: '1h 30m', price: 4900, img: './images/51.webp', description: 'Convenient late-evening departures and comfortable recline seats.' }
  
];

export const BUSES = [
  { id: 'b1', operator: 'RedBus Express', busNumber: 'RB-01', from: 'Bengaluru', to: 'Mysuru', departure: '07:00', arrival: '09:30', duration: '2h 30m', price: 400, img: './images/77.jpg', description: 'Comfortable semi-sleeper coaches with onboard Wi-Fi and courteous staff.' },
  { id: 'b2', operator: 'State Travels', busNumber: 'ST-120', from: 'Chennai', to: 'Pondicherry', departure: '10:00', arrival: '12:30', duration: '2h 30m', price: 350, img: './images/75.jpg', description: 'Affordable state-run service with frequent stops and good coverage.' },
  { id: 'b3', operator: 'Night Link', busNumber: 'NL-9', from: 'New Delhi', to: 'Jaipur', departure: '22:00', arrival: '02:30', duration: '4h 30m', price: 650, img: './images/73.jpg', description: 'Night service with recliner seats and onboard security for safe travel.' },
  { id: 'b4', operator: 'ComfortLines', busNumber: 'CL-45', from: 'Mumbai', to: 'Pune', departure: '08:00', arrival: '10:30', duration: '2h 30m', price: 450, img: './images/80.jpg', description: 'Premium coaches with extra legroom and complimentary bottled water.' },
  { id: 'b5', operator: 'GreenTours', busNumber: 'GT-77', from: 'Goa', to: 'Kolhapur', departure: '06:30', arrival: '12:30', duration: '6h 0m', price: 700, img: './images/75.jpg', description: 'Tour-friendly routes with luggage space and scenic stops.' },
  { id: 'b6', operator: 'ExpressWay', busNumber: 'EW-11', from: 'Hyderabad', to: 'Vijayawada', departure: '13:00', arrival: '16:20', duration: '3h 20m', price: 520, img: './images/79.jpg', description: 'Express intercity service with priority boarding and punctual departures.' },
  { id: 'b7', operator: 'Volvo Lux', busNumber: 'VL-08', from: 'Bengaluru', to: 'Goa', departure: '20:00', arrival: '06:00', duration: '10h 0m', price: 1200, img: './images/73.jpg', description: 'Overnight Volvo sleepers with individual reading lights and privacy curtains.' },
  { id: 'b8', operator: 'MetroLink', busNumber: 'ML-03', from: 'Kolkata', to: 'Digha', departure: '09:30', arrival: '13:15', duration: '3h 45m', price: 380, img: './images/77.jpg', description: 'Coastal route with comfortable seating and driver-friendly schedules.' },
  { id: 'b9', operator: 'RapidMove', busNumber: 'RM-21', from: 'Chandigarh', to: 'Amritsar', departure: '11:00', arrival: '13:30', duration: '2h 30m', price: 300, img: './images/80.jpg', description: 'Fast commuter service with limited stops and smooth highways.' }
  
];

export const TRAINS = [
  { id: 't1', operator: 'IRCTC', trainNumber: '12627', from: 'New Delhi', to: 'Varanasi', departure: '16:30', arrival: '06:20', duration: '13h 50m', price: 900, img: './images/22.jpg', description: 'Overnight express with comfortable sleepers and reliable catering.' },
  { id: 't2', operator: 'Indian Railways', trainNumber: '12001', from: 'Mumbai', to: 'Pune', departure: '06:15', arrival: '09:00', duration: '2h 45m', price: 250, img: './images/24.jpg', description: 'High-frequency commuter service with reserved seats available.' },
  { id: 't3', operator: 'Shatabdi', trainNumber: '12036', from: 'Bengaluru', to: 'Mysuru', departure: '07:45', arrival: '09:30', duration: '1h 45m', price: 500, img: './images/28.jpg', description: 'Premium day-train offers fast connections and onboard meals.' },
  { id: 't4', operator: 'Rajdhani', trainNumber: '12423', from: 'New Delhi', to: 'Mumbai', departure: '17:00', arrival: '07:30', duration: '14h 30m', price: 2200, img: './images/27.jpg', description: 'Top-tier service with AC sleepers and attentive staff.' },
  { id: 't5', operator: 'Duronto', trainNumber: '12215', from: 'Howrah', to: 'New Delhi', departure: '20:00', arrival: '12:30', duration: '16h 30m', price: 1800, img: './images/26.jpg', description: 'Non-stop express connecting major metros with swift transit.' },
  { id: 't6', operator: 'Garib Rath', trainNumber: '12209', from: 'Mumbai', to: 'Patna', departure: '10:40', arrival: '09:00', duration: '22h 20m', price: 950, img: './images/25.jpg', description: 'Value-oriented AC travel with good cost-to-comfort ratio.' },
  { id: 't7', operator: 'Intercity Express', trainNumber: '12629', from: 'Chennai', to: 'Bengaluru', departure: '06:50', arrival: '11:20', duration: '4h 30m', price: 600, img: './images/24.jpg', description: 'Frequent intercity link suited for business commuters.' },
  { id: 't8', operator: 'Vande Bharat', trainNumber: '22436', from: 'New Delhi', to: 'Varanasi', departure: '07:00', arrival: '11:45', duration: '4h 45m', price: 1600, img: './images/23.jpg', description: 'Semi-high-speed modern train with superior onboard amenities.' },
  { id: 't9', operator: 'Express', trainNumber: '15007', from: 'Ahmedabad', to: 'Jaipur', departure: '08:30', arrival: '18:50', duration: '10h 20m', price: 750, img: './images/22.jpg', description: 'Reliable long-distance express connecting western and northern cities.' }
  
];

export const TOURS = [
  { id: 'p1', name: 'Golden Triangle Tour', location: 'Delhi — Agra — Jaipur', duration: '4 days', price: 18000, img: './images/53.webp', description: 'A curated tour covering India\'s classical highlights including the Taj Mahal and Jaipur forts with comfortable 4-star stays.' },
  { id: 'p2', name: 'Kerala Backwaters', location: 'Kerala', duration: '3 days', price: 12000, img: './images/54.webp', description: 'Houseboat stay and authentic local cuisine with guided village walks.' },
  { id: 'p3', name: 'Himalayan Escape', location: 'Manali & Leh', duration: '7 days', price: 45000, img: './images/55.webp', description: 'High-altitude adventure featuring guided treks, acclimatisation support and scenic drives.' },
  { id: 'p4', name: 'Rajasthan Heritage Circuit', location: 'Udaipur — Jodhpur — Jaisalmer', duration: '6 days', price: 32000, img: './images/56.webp', description: 'Luxury heritage stays, palace visits and curated cultural experiences.' },
  { id: 'p5', name: 'Andaman Island Retreat', location: 'Port Blair & Havelock', duration: '5 days', price: 38000, img: './images/57.webp', description: 'Island hopping, snorkeling and pristine beaches with premium transfers.' },
  { id: 'p6', name: 'Kerala Tea Trails', location: 'Munnar & Thekkady', duration: '4 days', price: 15000, img: './images/58.webp', description: 'Tea estate walks, spice gardens and comfortable boutique stays.' },
  { id: 'p7', name: 'Goa Coastal Leisure', location: 'North & South Goa', duration: '4 days', price: 14000, img: './images/59.webp', description: 'Beachfront stays, water sports options and curated nightlife recommendations.' },
  { id: 'p8', name: 'Spiti Valley Adventure', location: 'Spiti, Himachal Pradesh', duration: '7 days', price: 46000, img: './images/60.webp', description: 'High-altitude scenic drives, monastery visits and expert local guides.' },
  { id: 'p9', name: 'Sundarbans Wildlife Cruise', location: 'Sundarbans', duration: '3 days', price: 21000, img: './images/61.webp', description: 'Guided river safaris with experienced naturalists and comfortable boat cabins.' }
  
];
