# Travel Booking Application - Backend

This is the backend part of the Travel Booking Application, built using PHP. The backend is responsible for handling API requests, managing user authentication, and processing bookings.

## Project Structure

- **public/index.php**: The entry point for the PHP application. It handles incoming requests and routes them to the appropriate controllers.
- **src/Controllers**: Contains the controllers that handle the business logic for authentication and bookings.
  - **AuthController.php**: Manages user authentication (login, registration).
  - **BookingController.php**: Handles booking-related actions (create, update, delete bookings).
- **src/Models**: Contains the data models for the application.
  - **User.php**: Represents the user model.
  - **Booking.php**: Represents the booking model.
- **src/Routes/api.php**: Defines the API routes for the application, mapping endpoints to controller methods.
- **src/Services**: Contains services for handling specific functionalities.
  - **PaymentService.php**: Manages payment processing logic.
- **config/database.php**: Contains the database configuration settings for connecting to the database.
- **migrations/create_bookings_table.sql**: SQL script for creating the bookings table in the database.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd travel-booking-app/backend
   ```
3. Install dependencies using Composer:
   ```
   composer install
   ```
4. Set up your environment variables in the `.env` file.
5. Run the migrations to set up the database:
   ```
   php artisan migrate
   ```

## Usage

- Start the PHP server:
  ```
  php -S localhost:8000 -t public
  ```
- The API will be available at `http://localhost:8000/api`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.