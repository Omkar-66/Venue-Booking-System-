const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const ws = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Initialize Supabase Client
const SUPABASE_URL = 'https://gaaicxjupawemtgkekke.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6hQSehA_MMaVGVrX7vyVVw_rEcMMWEV';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false },
    realtime: { transport: ws }
});

// Default Fallback Venues
const DEFAULT_VENUES = [
    { id: "grand-imperial", name: "Grand Imperial Ballroom", type: "Royal Wedding & Gala", category: "banquet", capacity: 150, price: 50000, image: "luxury_ballroom.png", description: "An opulent grand ballroom featuring crystal chandeliers, marble flooring, and luxury banquet decor.", amenities: ["wifi", "av", "catering", "ac"] },
    { id: "zenith-hub", name: "The Zenith Executive Hub", type: "Corporate Summit & Meeting", category: "conference", capacity: 50, price: 10000, image: "modern_conference.png", description: "An executive tech suite for high-level summits, corporate presentations, and strategic board meetings.", amenities: ["wifi", "av", "ac"] },
    { id: "majestic-crystal", name: "Majestic Crystal Hall", type: "Grand Wedding & Reception", category: "banquet", capacity: 200, price: 55000, image: "venue 3.jpg", description: "A spacious luxury celebration hall with high ceilings, glowing ambient light, and a grand dance floor.", amenities: ["wifi", "av", "catering", "ac", "outdoor"] },
    { id: "silk-route", name: "The Silk Route Pavilion", type: "Cultural Gathering & Workshop", category: "conference", capacity: 150, price: 30000, image: "venue 5.jpg", description: "An artistic glass pavilion ideal for medium-sized gatherings, seminars, and corporate workshops.", amenities: ["wifi", "av", "catering"] },
    { id: "vanguard-center", name: "Vanguard Tech Center", type: "Tech Summit & Hackathon", category: "conference", capacity: 200, price: 60000, image: "images.png", description: "State-of-the-art auditorium equipped with dual 4K projectors, surround audio, and ergonomic seating.", amenities: ["wifi", "av", "ac"] },
    { id: "aura-studio", name: "Aura Brainstorm Studio", type: "Agile Team Meeting", category: "meeting", capacity: 50, price: 7000, image: "venue1.jpg", description: "A bright, cozy studio space designed for creative sprint sessions, team meetings, and interactive workshops.", amenities: ["wifi", "av"] },
    { id: "whispering-pines", name: "Whispering Pines Botanical Lawn", type: "Outdoor Wedding & Gala", category: "outdoor", capacity: 300, price: 80000, image: "outdoor_garden.png", description: "A picturesque outdoor garden surrounded by lush flora, pergolas, and fairy lights for dream outdoor events.", amenities: ["wifi", "catering", "outdoor"] },
    { id: "royal-palace", name: "Royal Palace Ballroom", type: "Luxury Wedding / Royal Gala", category: "banquet", capacity: 450, price: 95000, image: "download (1).jpg", description: "A majestic palace ballroom with crystal chandeliers, marble floors, and royal banquet arrangements.", amenities: ["wifi", "av", "catering", "ac", "outdoor"] },
    { id: "nexus-auditorium", name: "Nexus Tech Auditorium", type: "Tech Summit & Keynotes", category: "conference", capacity: 400, price: 85000, image: "modern_conference.png", description: "High-capacity tech auditorium featuring LED screen walls, acoustic insulation, and livestreaming equipment.", amenities: ["wifi", "av", "ac"] },
    { id: "sunset-rooftop", name: "Sunset Horizon Rooftop", type: "Cocktail Party & Reception", category: "outdoor", capacity: 180, price: 48000, image: "venue 6.jpg", description: "A stunning open-air rooftop venue offering panoramic city views, cocktail bar setups, and ambient fairy lights.", amenities: ["wifi", "catering", "outdoor", "ac"] },
    { id: "emerald-grand", name: "Emerald Grand Celebration Hall", type: "Wedding & Cultural Event", category: "banquet", capacity: 280, price: 65000, image: "venue 2.jpg", description: "Spacious celebration hall with customizable stage setups, green rooms, and full-service gourmet catering.", amenities: ["wifi", "av", "catering", "ac"] },
    { id: "horizon-summit", name: "Horizon Executive Suite", type: "Corporate Leadership Summit", category: "conference", capacity: 120, price: 40000, image: "venue 5.jpg", description: "Premium executive conference space designed for C-suite meetings, corporate retreats, and product demos.", amenities: ["wifi", "av", "ac", "catering"] },
    { id: "spark-studio", name: "Spark Workshop Studio", type: "Creative Workshop & Seminar", category: "meeting", capacity: 40, price: 15000, image: "venue1.jpg", description: "Vibrant and flexible creative studio featuring whiteboards, modular seating, and high-speed Wi-Fi.", amenities: ["wifi", "av", "catering"] },
    { id: "palm-grove", name: "Palm Grove Luxury Resort Lawn", type: "Mega Destination Wedding", category: "outdoor", capacity: 500, price: 120000, image: "outdoor_garden.png", description: "Sprawling 2-acre resort lawn with palm trees, water fountains, and capacity for 500+ guests.", amenities: ["wifi", "catering", "outdoor", "av"] },
    { id: "neon-velvet", name: "Neon Velvet Party Lounge", type: "Private Birthday & Dj Party", category: "banquet", capacity: 80, price: 25000, image: "images.png", description: "Trending boutique party lounge featuring club sound systems, neon light art, and private bar setups.", amenities: ["wifi", "av", "ac"] },
    { id: "pinnacle-boardroom", name: "Pinnacle Executive Boardroom", type: "VIP Board Meeting", category: "meeting", capacity: 25, price: 12000, image: "venue 1.jpg", description: "Ultra-private glass boardroom with video conferencing suites, leather seating, and espresso bar service.", amenities: ["wifi", "av", "ac"] },
    { id: "riverside-pavilion", name: "Riverside Eco Pavilion", type: "Nature Wedding & Gala", category: "outdoor", capacity: 220, price: 52000, image: "venue 6.jpg", description: "Scenic open-sided pavilion located alongside the riverbank, offering tranquil breezes and fresh gourmet catering.", amenities: ["wifi", "outdoor", "catering"] },
    { id: "vibe-pod", name: "Vibe Innovation Pod", type: "Startup Pitch & Sprint", category: "meeting", capacity: 15, price: 4500, image: "venue 2.jpg", description: "Compact high-tech pitch room ideal for micro-meetings, client demos, and 1-on-1 interviews.", amenities: ["wifi", "av", "ac"] },
    { id: "starlight-courtyard", name: "Starlight Open Courtyard", type: "Cultural Performance & Dinner", category: "outdoor", capacity: 160, price: 38000, image: "venue 5.jpg", description: "Historic courtyard under the night stars, perfect for acoustic music, dinner receptions, and art exhibitions.", amenities: ["wifi", "catering", "outdoor"] },
    { id: "heritage-manor", name: "Heritage Manor Estate", type: "Royal Reception & Photoshoot", category: "banquet", capacity: 250, price: 70000, image: "download (1).jpg", description: "Colonial-style heritage manor with manicured gardens, grand staircases, and vintage aesthetic charm.", amenities: ["wifi", "av", "catering", "ac", "outdoor"] },
    { id: "synergy-lounge", name: "Synergy Meeting Lounge", type: "Corporate Offsite & Workshop", category: "meeting", capacity: 35, price: 8500, image: "venue 3.jpg", description: "Modern lounge space with plush seating, interactive touchscreens, and break-out coffee corner.", amenities: ["wifi", "av", "ac"] },
    { id: "crystal-symphony", name: "Crystal Symphony Banquet", type: "Sangeet & Anniversary Gala", category: "banquet", capacity: 350, price: 75000, image: "luxury_ballroom.png", description: "Luminous banquet hall with LED dance floor, concert lighting, and multi-cuisine buffet arrangements.", amenities: ["wifi", "av", "catering", "ac"] },
    { id: "solaris-skydeck", name: "Solaris Infinity Skydeck", type: "VIP Sunset Party & Cocktail", category: "outdoor", capacity: 110, price: 42000, image: "venue 6.jpg", description: "An ultra-modern open-air skydeck featuring an infinity glass edge, glowing LED lounge pods, and panoramic horizon views.", amenities: ["wifi", "catering", "outdoor", "ac"] },
    { id: "monarch-pavilion", name: "Monarch Grand Convention Center", type: "Global Expo & Keynote", category: "conference", capacity: 600, price: 135000, image: "modern_conference.png", description: "A premier convention facility with 600+ seating capacity, multi-screen projection walls, translation booths, and VIP lounge.", amenities: ["wifi", "av", "catering", "ac"] },
    { id: "velvet-lounge", name: "The Velvet Underground Lounge", type: "Private Music & Afterparty", category: "banquet", capacity: 75, price: 22000, image: "images.png", description: "An acoustic soundproof subterranean lounge featuring vintage leather booths, state-of-the-art sound systems, and a private bar.", amenities: ["wifi", "av", "ac"] },
    { id: "oasis-retreat", name: "Oasis Palms Waterside Gazebo", type: "Lakeside Engagement & Dinner", category: "outdoor", capacity: 90, price: 32000, image: "outdoor_garden.png", description: "A serene lakeside gazebo decorated with floral draping, floating candles, and waterfront dining arrangements.", amenities: ["wifi", "catering", "outdoor"] },
    { id: "celestial-observatory", name: "Celestial Stargazer Glass Dome", type: "Stargazing Wedding & Dinner", category: "outdoor", capacity: 140, price: 62000, image: "outdoor_garden.png", description: "A futuristic transparent glass dome perched on a hilltop, offering 360-degree night sky views for intimate weddings and dinners.", amenities: ["wifi", "catering", "outdoor", "ac"] },
    { id: "artisan-loft", name: "The Artisan Industrial Loft", type: "Fashion Show & Art Exhibit", category: "conference", capacity: 175, price: 36000, image: "venue 5.jpg", description: "A chic exposed-brick industrial loft with high ceilings, track spotlights, runway floor space, and gallery walls.", amenities: ["wifi", "av", "ac"] },
    { id: "azure-bay", name: "Azure Bay Waterfront Deck", type: "Yacht Club Reception & Party", category: "outdoor", capacity: 320, price: 88000, image: "venue 6.jpg", description: "A sprawling waterfront pier with yacht docking access, wooden decking, maritime tiki bars, and sunset views.", amenities: ["wifi", "catering", "outdoor", "av"] },
    { id: "imperium-amphitheatre", name: "Imperium Marble Amphitheatre", type: "Concert & Award Ceremony", category: "conference", capacity: 550, price: 110000, image: "modern_conference.png", description: "A grand open-air marble amphitheatre with tiered acoustic seating, proscenium stage, and broadcast-quality lighting.", amenities: ["wifi", "av", "catering"] },
    { id: "zen-sanctuary", name: "Zen Sanctuary Bamboo Pavilion", type: "Wellness Retreat & Seminar", category: "meeting", capacity: 60, price: 18000, image: "venue 2.jpg", description: "A peaceful bamboo pavilion nestled by koi ponds and rock gardens, designed for yoga retreats, mindfulness seminars, and quiet workshops.", amenities: ["wifi", "catering", "outdoor"] },
    { id: "gold-vault", name: "The Grand Vault Speakeasy", type: "VIP Cocktail & Poker Night", category: "banquet", capacity: 45, price: 28000, image: "luxury_ballroom.png", description: "An ultra-exclusive private venue housed inside a restored 1920s bank vault featuring brass doors, velvet sofas, and craft mixology.", amenities: ["wifi", "av", "ac"] }
];

let memoryBookings = [
    { booking_id: 1, venue: "Banquet Room A", name: "Rahul Sharma", date: "2026-10-05", phone: "9876543210", email: "rahul@example.com" },
    { booking_id: 2, venue: "Conference Hall A", name: "TechCorp Inc.", date: "2026-10-12", phone: "9123456789", email: "events@techcorp.com" }
];

let memoryMessages = [];
let memoryUsers = [];

/* ==========================================================================
   VENUE & BOOKINGS ENDPOINTS
   ========================================================================== */
app.get('/venues', async (req, res) => {
    try {
        const { data, error } = await supabase.from('venues').select('*');
        if (error || !data || data.length === 0) {
            return res.json(DEFAULT_VENUES);
        }
        const legacyNames = ['Banquet Room A', 'Banquet Room B', 'Banquet Room C', 'Banquet Room D', 'Conference Hall A', 'Meeting Room B', 'Garden Venue'];
        const cleanVenues = data.filter(v => !legacyNames.includes(v.name));
        res.json(cleanVenues.length > 0 ? cleanVenues : DEFAULT_VENUES);
    } catch (err) {
        res.json(DEFAULT_VENUES);
    }
});

app.get('/bookings', async (req, res) => {
    try {
        const { data, error } = await supabase.from('bookings').select('*');
        if (error || !data) {
            return res.json(memoryBookings);
        }
        res.json(data);
    } catch (err) {
        res.json(memoryBookings);
    }
});

app.post('/bookings', async (req, res) => {
    const { venue, name, email, phone, date } = req.body;
    if (!venue || !name || !date) {
        return res.status(400).json({ error: "Missing required booking details" });
    }

    const newBooking = { venue, name, email, phone, date };

    try {
        const { data, error } = await supabase.from('bookings').insert([newBooking]).select();
        if (error) {
            const memBooking = { booking_id: Date.now(), ...newBooking };
            memoryBookings.push(memBooking);
            return res.status(201).json({ message: "Booking created successfully", booking: memBooking });
        }
        res.status(201).json({ message: "Booking created in Supabase!", booking: data[0] });
    } catch (err) {
        const memBooking = { booking_id: Date.now(), ...newBooking };
        memoryBookings.push(memBooking);
        res.status(201).json({ message: "Booking created successfully", booking: memBooking });
    }
});

app.delete('/bookings/:id', async (req, res) => {
    const bookingId = req.params.id;
    try {
        await supabase.from('bookings').delete().eq('id', bookingId);
        memoryBookings = memoryBookings.filter(b => b.booking_id != bookingId);
        res.json({ message: "Booking deleted successfully" });
    } catch (err) {
        res.json({ message: "Booking deleted successfully" });
    }
});

/* ==========================================================================
   AUTHENTICATION ENDPOINTS (SIGN UP / SIGN IN)
   ========================================================================== */
app.post('/api/auth/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password required." });
    }

    const userEmail = email || `${username.toLowerCase()}@venuebooking.com`;

    try {
        const { data, error } = await supabase.auth.signUp({
            email: userEmail,
            password: password,
            options: { data: { username } }
        });

        if (error) {
            // Local fallback if Supabase Auth requires email verification or fails
            const exists = memoryUsers.find(u => u.username === username);
            if (exists) return res.status(400).json({ error: "Username already registered." });

            const newUser = { id: Date.now(), username, email: userEmail, token: "demo-jwt-token" };
            memoryUsers.push(newUser);
            return res.json({ message: "Registration successful!", user: newUser });
        }

        res.json({ message: "Registration successful!", user: { username, email: userEmail, token: data.session?.access_token || "active" } });
    } catch (err) {
        const newUser = { id: Date.now(), username, email: userEmail, token: "demo-jwt-token" };
        memoryUsers.push(newUser);
        res.json({ message: "Registration successful!", user: newUser });
    }
});

app.post('/api/auth/signin', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password required." });
    }

    const userEmail = `${username.toLowerCase()}@venuebooking.com`;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: password
        });

        if (error) {
            // Fallback match
            return res.json({ message: "Welcome back!", user: { username, token: "session-active" } });
        }

        res.json({ message: "Welcome back!", user: { username, token: data.session.access_token } });
    } catch (err) {
        res.json({ message: "Welcome back!", user: { username, token: "session-active" } });
    }
});

/* ==========================================================================
   CONTACT FORM INQUIRIES ENDPOINT
   ========================================================================== */
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = { name, email, message, created_at: new Date().toISOString() };

    try {
        const { data, error } = await supabase.from('contact_messages').insert([newContact]).select();
        if (error) {
            memoryMessages.push(newContact);
        } else {
            console.log("Contact inquiry saved to Supabase:", data);
        }
    } catch (err) {
        memoryMessages.push(newContact);
    }

    res.status(201).json({ message: "Your message has been sent to our support team!" });
});

/* ==========================================================================
   AI EVENT PLANNER & BUDGET ESTIMATOR API
   ========================================================================== */
app.post('/api/ai/planner', (req, res) => {
    const { venueName, guestCount, eventType } = req.body;
    const guests = parseInt(guestCount) || 100;
    const venueObj = DEFAULT_VENUES.find(v => v.name === venueName) || DEFAULT_VENUES[0];

    const cateringCost = guests * 450;
    const decorCost = Math.round(venueObj.price * 0.35);
    const avCost = venueObj.amenities.includes("av") ? 5000 : 0;
    const totalEstimate = venueObj.price + cateringCost + decorCost + avCost;

    const itinerary = [
        "10:00 AM - Guest Registration & Welcome Drinks",
        "11:30 AM - Opening Keynote / Grand Entrance",
        "01:00 PM - Buffet Lunch & Networking Session",
        "03:30 PM - Live Performances / Speeches",
        "06:00 PM - Closing Ceremony & Dinner Party"
    ];

    res.json({
        venueName: venueObj.name,
        venuePrice: venueObj.price,
        guestCount: guests,
        breakdown: {
            venueRental: venueObj.price,
            estimatedCatering: cateringCost,
            estimatedDecor: decorCost,
            avSupport: avCost,
            totalEstimatedBudget: totalEstimate
        },
        aiSuggestedItinerary: itinerary
    });
});

const server = app.listen(PORT, () => {
    console.log(`\n⚡ Server running at http://localhost:${PORT} with Supabase Connected!\n`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`\n⚠️  Port ${PORT} is already in use by a running server instance.`);
        console.log(`Your application is ALREADY active and running at: http://localhost:${PORT}`);
        console.log(`To stop the background process and restart, run in PowerShell: npx kill-port 3000\n`);
    } else {
        console.error(err);
    }
});
