# 🏛️ VenueBooking — Modern Glassmorphic Venue Booking & Management System

[![Live Demo](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://venue-booking-system-omega.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-v22+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Supabase](https://img.shields.io/badge/Supabase-Cloud_Postgres-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

**VenueBooking** is a full-stack, state-of-the-art Venue Booking & Event Management platform featuring a **Vibrant Glassmorphic UI**, **AI Concierge & Budget Generator**, **Real-Time Smart Filters**, **FullCalendar Availability**, **Razorpay/UPI Payment Gateway**, and **Supabase Cloud Database Persistence**.

---

## ✨ Key Features

### 🎨 Vibrant Glassmorphism UI & Mobile Responsive Design
- Designed with modern HSL tailwind-inspired gradients (`coral-pink #ff385c` to `violet #7c3aed`) on a sleek light canvas (`#f8fafc`).
- Pure Glassmorphic panels (`backdrop-filter: blur(16px)`), subtle micro-animations, high-contrast typography, and floating action elements.
- **100% Mobile Responsive**: Tested on desktop, tablet, and mobile browsers with sticky glass navigation and touch-friendly controls.
- Custom **Glass Toast Notification System** and **Profile Dropdown** — zero native browser `alert()` or `confirm()` dialogs.

### 🏨 32 Authentic Luxury Venues Catalog
- Extensive dataset featuring **32 diverse venues** across 4 major categories:
  - 💒 **Banquet Halls & Royal Ballrooms** (Grand Imperial Ballroom, Majestic Crystal Hall, Crystal Symphony Banquet, etc.)
  - 🏛️ **Conference Centers & Tech Auditoriums** (Monarch Grand Convention Center, Nexus Tech Auditorium, Vanguard Tech Center)
  - 💼 **Executive Boardrooms & Creative Studios** (Pinnacle Boardroom, Spark Studio, Aura Brainstorm Studio)
  - 🌿 **Outdoor Gardens, Rooftops & Waterfront Gazebos** (Palm Grove Resort Lawn, Solaris Infinity Skydeck, Azure Bay Waterfront Deck)
- Varied capacity range from **15 to 600+ guests** and pricing from **₹4,500/day to ₹1,35,000/day**.
- Filter by luxury amenities: High-speed Wi-Fi, Audio-Visual (AV), Gourmet Catering, Air Conditioning (AC), and Outdoor Gardens.

### 🤖 Floating AI Concierge & Event Budget Generator
- Interactive NLP-powered **AI Event Assistant** widget accessible on every page.
- **Smart Recommendations**: Recommends venues instantly based on user queries (*"Suggest wedding hall for 200 guests"*, *"Venues under 30k"*).
- **AI Cost & Budget Estimator**: Generates itemized cost breakdowns (Venue rental + Plate catering + Decor & lighting) for any guest count.
- **Step-by-Step Booking Guide**: Guides users through availability checking and payment reservation.

### 📅 FullCalendar Availability Engine
- Integrated **FullCalendar** view showing venue bookings and real-time date availability.
- Prevents double-booking and allows one-click redirection to payment checkout for selected dates.

### 💳 Razorpay & UPI Payment Gateway Checkout
- Simulated 256-bit SSL encrypted payment checkout modal with dual options:
  - 💳 **Credit / Debit Card via Razorpay SDK**
  - 📱 **Instant UPI / QR Code Payment**
- **Digital Receipt & Printable Invoice**: Instant generation of branded invoice modal with print support (`@media print`).

### 🔒 Glassmorphic Auth Modal & Session Management
- Pop-up Auth modal triggered automatically when unauthenticated users click *"Book Now"*.
- Allows guest browsing while enforcing authentication prior to transaction completion.
- Persistent user sessions stored via `localStorage` and Supabase auth backend.

### ☁️ Supabase Cloud Database Integration
- Connected to **Supabase Postgres Database** via `@supabase/supabase-js` SDK with realtime WebSocket support.
- Stores venues, bookings, user credentials, and contact messages reliably in the cloud.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, Vanilla CSS3 (Glassmorphism), ES6+ JavaScript, Bootstrap 5, Bootstrap Icons, FullCalendar.js |
| **Backend** | Node.js (v22), Express.js, Body-Parser, CORS |
| **Database** | Supabase Cloud Postgres DB (`@supabase/supabase-js`) |
| **Payment Gateway** | Razorpay Checkout SDK / Simulated UPI |
| **Deployment** | Vercel Serverless Functions / Render.com |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js v22+](https://nodejs.org) installed on your machine.
- Git.

### Local Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Omkar-66/Venue-Booking-System-.git
   cd Venue-Booking-System-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   # OR
   npm run dev
   ```

4. **Access in Browser**:
   Open **`http://localhost:3000`** in your browser.

---

## 📂 Project Structure

```
venue-booking-system/
├── css/
│   └── style.css                 # Master Glassmorphism Design System & Tokens
├── luxury_ballroom.png           # AI Generated High-Res Venue Photo
├── modern_conference.png         # AI Generated High-Res Venue Photo
├── outdoor_garden.png            # AI Generated High-Res Venue Photo
├── index.html                    # Homepage with Glass Hero & Featured Venues
├── venues.html                   # Explore Venues with Smart Filter Sliders
├── availability-calendar.html    # FullCalendar Date Reservation View
├── booking.html                  # Secure Booking & Razorpay Payment Checkout
├── contact.html                  # Support Contact Form & Inquiries
├── auth.html                     # User Sign In & Sign Up Page
├── script.js                     # Main JS Engine, AI Concierge & Payments
├── server.js                     # Express Node.js Server & Supabase Endpoints
├── vercel.json                   # Vercel Deployment & Serverless Route Config
└── package.json                  # NPM Configuration & Dependencies
```

---

## 📡 API Endpoints

### 🏛️ Venues
- **`GET /venues`**: Returns all 32 active venue records from Supabase DB / Fallback array.

### 📅 Bookings
- **`GET /bookings`**: Fetches current venue reservation bookings.
- **`POST /bookings`**: Creates a new booking reservation in Supabase.
- **`DELETE /bookings/:id`**: Cancels/deletes an existing booking.

### 🔐 Auth & Contact
- **`POST /api/auth/signup`**: User registration endpoint.
- **`POST /api/auth/signin`**: User authentication endpoint.
- **`POST /api/contact`**: Submits user inquiry message to Supabase.
- **`POST /api/ai/planner`**: AI Event Budget & Itinerary Generator API.

---

## 🗄️ Database Schema (Supabase SQL)

If you are setting up your own Supabase project, execute the following SQL script:

```sql
-- Create Venues Table
CREATE TABLE IF NOT EXISTS venues (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT,
    category TEXT,
    capacity INT,
    price INT,
    image TEXT,
    description TEXT,
    amenities JSONB
);

-- Create Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
    id BIGSERIAL PRIMARY KEY,
    venue TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🌐 Live Deployment

- **Vercel Production URL**: [https://venue-booking-system-omega.vercel.app](https://venue-booking-system-omega.vercel.app)
- **GitHub Repository**: [https://github.com/Omkar-66/Venue-Booking-System-](https://github.com/Omkar-66/Venue-Booking-System-)

---

## 📜 License

This project is licensed under the **ISC License**. Free for personal and commercial use.
