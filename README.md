Venue Booking System 🎉
A full-stack web application designed to simplify the venue booking process for conference halls, banquet rooms, and meeting spaces. The system offers a user-friendly interface, dynamic availability management, and backend functionality for seamless bookings.
________________________________________
Features 🚀
•	Responsive front-end built with JavaScript and Bootstrap.
•	Backend powered by Node.js and Express.js for CRUD operations.
•	Database integration using MySQL.
•	Availability calendar to display booked slots.
•	Dynamic form handling for user-friendly bookings.
•	Clean and organized codebase for easy collaboration and maintenance.
________________________________________
Prerequisites ⚙️
Ensure you have the following installed:
•	Node.js (v16 or higher recommended)
•	MySQL
•	A code editor (e.g., Visual Studio Code)
________________________________________
Installation and Setup 🛠️
Follow these steps to set up the project locally:
1.	Clone the Repository
bash
Copy code
git clone https://github.com/Omkar-66/venue-booking-system.git
cd venue-booking-system
2.	Install Dependencies
bash
Copy code
npm install
3.	Set Up the Database
o	Open your MySQL client.
o	Create a new database:
sql
Copy code
CREATE DATABASE venue_booking;
o	Import the database schema from the db/schema.sql file:
bash
Copy code
mysql -u your_username -p venue_booking < db/schema.sql
4.	Configure Environment Variables
o	Create a .env file in the root directory. Add the following variables:
env
Copy code
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=venue_booking
PORT=3000
5.	Start the Server
bash
Copy code
npm start
6.	Access the Application
Open your browser and navigate to http://localhost:3000.
________________________________________
Usage Instructions 🖥️
•	View Available Venues: Navigate to the homepage to see listed venues.
•	Check Availability: Use the "Check Availability" button to view available slots.
•	Book a Venue: Fill out the booking form with your details.
•	Manage Bookings: Admins can add, edit, or delete venues and bookings.
________________________________________
Project Structure 📂
bash
Copy code
venue-booking-system/
├── public/               # Static files (CSS, JavaScript, images)
├── routes/               # API and web routes
├── views/                # HTML templates (using EJS or similar)
├── db/                   # Database scripts
├── .env                  # Environment variables
├── server.js             # Main server file
└── package.json          # Project metadata and dependencies
________________________________________
Contributing 🤝
Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
________________________________________
License 📜
This project is licensed under the MIT License.

