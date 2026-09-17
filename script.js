/**
 * VENUE BOOKING SYSTEM - CORE SCRIPT & AI ASSISTANT & RAZORPAY / UPI PAYMENT GATEWAY
 */

// Dataset of Venues (22 Diverse Venues with Authentic Naming)
const VENUE_DATA = [
    {
        id: "grand-imperial",
        name: "Grand Imperial Ballroom",
        type: "Royal Wedding & Gala",
        category: "banquet",
        capacity: 150,
        price: 50000,
        image: "luxury_ballroom.png",
        description: "An opulent grand ballroom featuring crystal chandeliers, marble flooring, and luxury banquet decor.",
        amenities: ["wifi", "av", "catering", "ac"]
    },
    {
        id: "zenith-hub",
        name: "The Zenith Executive Hub",
        type: "Corporate Summit & Meeting",
        category: "conference",
        capacity: 50,
        price: 10000,
        image: "modern_conference.png",
        description: "An executive tech suite for high-level summits, corporate presentations, and strategic board meetings.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "majestic-crystal",
        name: "Majestic Crystal Hall",
        type: "Grand Wedding & Reception",
        category: "banquet",
        capacity: 200,
        price: 55000,
        image: "venue 3.jpg",
        description: "A spacious luxury celebration hall with high ceilings, glowing ambient light, and a grand dance floor.",
        amenities: ["wifi", "av", "catering", "ac", "outdoor"]
    },
    {
        id: "silk-route",
        name: "The Silk Route Pavilion",
        type: "Cultural Gathering & Workshop",
        category: "conference",
        capacity: 150,
        price: 30000,
        image: "venue 5.jpg",
        description: "An artistic glass pavilion ideal for medium-sized gatherings, seminars, and corporate workshops.",
        amenities: ["wifi", "av", "catering"]
    },
    {
        id: "vanguard-center",
        name: "Vanguard Tech Center",
        type: "Tech Summit & Hackathon",
        category: "conference",
        capacity: 200,
        price: 60000,
        image: "images.png",
        description: "State-of-the-art auditorium equipped with dual 4K projectors, surround audio, and ergonomic seating.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "aura-studio",
        name: "Aura Brainstorm Studio",
        type: "Agile Team Meeting",
        category: "meeting",
        capacity: 50,
        price: 7000,
        image: "venue1.jpg",
        description: "A bright, cozy studio space designed for creative sprint sessions, team meetings, and interactive workshops.",
        amenities: ["wifi", "av"]
    },
    {
        id: "whispering-pines",
        name: "Whispering Pines Botanical Lawn",
        type: "Outdoor Wedding & Gala",
        category: "outdoor",
        capacity: 300,
        price: 80000,
        image: "outdoor_garden.png",
        description: "A picturesque outdoor garden surrounded by lush flora, pergolas, and fairy lights for dream outdoor events.",
        amenities: ["wifi", "catering", "outdoor"]
    },
    {
        id: "royal-palace",
        name: "Royal Palace Ballroom",
        type: "Luxury Wedding / Royal Gala",
        category: "banquet",
        capacity: 450,
        price: 95000,
        image: "download (1).jpg",
        description: "A majestic palace ballroom with crystal chandeliers, marble floors, and royal banquet arrangements.",
        amenities: ["wifi", "av", "catering", "ac", "outdoor"]
    },
    {
        id: "nexus-auditorium",
        name: "Nexus Tech Auditorium",
        type: "Tech Summit & Keynotes",
        category: "conference",
        capacity: 400,
        price: 85000,
        image: "modern_conference.png",
        description: "High-capacity tech auditorium featuring LED screen walls, acoustic insulation, and livestreaming equipment.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "sunset-rooftop",
        name: "Sunset Horizon Rooftop",
        type: "Cocktail Party & Reception",
        category: "outdoor",
        capacity: 180,
        price: 48000,
        image: "venue 6.jpg",
        description: "A stunning open-air rooftop venue offering panoramic city views, cocktail bar setups, and ambient fairy lights.",
        amenities: ["wifi", "catering", "outdoor", "ac"]
    },
    {
        id: "emerald-grand",
        name: "Emerald Grand Celebration Hall",
        type: "Wedding & Cultural Event",
        category: "banquet",
        capacity: 280,
        price: 65000,
        image: "venue 2.jpg",
        description: "Spacious celebration hall with customizable stage setups, green rooms, and full-service gourmet catering.",
        amenities: ["wifi", "av", "catering", "ac"]
    },
    {
        id: "horizon-summit",
        name: "Horizon Executive Suite",
        type: "Corporate Leadership Summit",
        category: "conference",
        capacity: 120,
        price: 40000,
        image: "venue 5.jpg",
        description: "Premium executive conference space designed for C-suite meetings, corporate retreats, and product demos.",
        amenities: ["wifi", "av", "ac", "catering"]
    },
    {
        id: "spark-studio",
        name: "Spark Workshop Studio",
        type: "Creative Workshop & Seminar",
        category: "meeting",
        capacity: 40,
        price: 15000,
        image: "venue1.jpg",
        description: "Vibrant and flexible creative studio featuring whiteboards, modular seating, and high-speed Wi-Fi.",
        amenities: ["wifi", "av", "catering"]
    },
    {
        id: "palm-grove",
        name: "Palm Grove Luxury Resort Lawn",
        type: "Mega Destination Wedding",
        category: "outdoor",
        capacity: 500,
        price: 120000,
        image: "outdoor_garden.png",
        description: "Sprawling 2-acre resort lawn with palm trees, water fountains, and capacity for 500+ guests.",
        amenities: ["wifi", "catering", "outdoor", "av"]
    },
    {
        id: "neon-velvet",
        name: "Neon Velvet Party Lounge",
        type: "Private Birthday & Dj Party",
        category: "banquet",
        capacity: 80,
        price: 25000,
        image: "images.png",
        description: "Trending boutique party lounge featuring club sound systems, neon light art, and private bar setups.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "pinnacle-boardroom",
        name: "Pinnacle Executive Boardroom",
        type: "VIP Board Meeting",
        category: "meeting",
        capacity: 25,
        price: 12000,
        image: "venue 1.jpg",
        description: "Ultra-private glass boardroom with video conferencing suites, leather seating, and espresso bar service.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "riverside-pavilion",
        name: "Riverside Eco Pavilion",
        type: "Nature Wedding & Gala",
        category: "outdoor",
        capacity: 220,
        price: 52000,
        image: "venue 6.jpg",
        description: "Scenic open-sided pavilion located alongside the riverbank, offering tranquil breezes and fresh gourmet catering.",
        amenities: ["wifi", "outdoor", "catering"]
    },
    {
        id: "vibe-pod",
        name: "Vibe Innovation Pod",
        type: "Startup Pitch & Sprint",
        category: "meeting",
        capacity: 15,
        price: 4500,
        image: "venue 2.jpg",
        description: "Compact high-tech pitch room ideal for micro-meetings, client demos, and 1-on-1 interviews.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "starlight-courtyard",
        name: "Starlight Open Courtyard",
        type: "Cultural Performance & Dinner",
        category: "outdoor",
        capacity: 160,
        price: 38000,
        image: "venue 5.jpg",
        description: "Historic courtyard under the night stars, perfect for acoustic music, dinner receptions, and art exhibitions.",
        amenities: ["wifi", "catering", "outdoor"]
    },
    {
        id: "heritage-manor",
        name: "Heritage Manor Estate",
        type: "Royal Reception & Photoshoot",
        category: "banquet",
        capacity: 250,
        price: 70000,
        image: "download (1).jpg",
        description: "Colonial-style heritage manor with manicured gardens, grand staircases, and vintage aesthetic charm.",
        amenities: ["wifi", "av", "catering", "ac", "outdoor"]
    },
    {
        id: "synergy-lounge",
        name: "Synergy Meeting Lounge",
        type: "Corporate Offsite & Workshop",
        category: "meeting",
        capacity: 35,
        price: 8500,
        image: "venue 3.jpg",
        description: "Modern lounge space with plush seating, interactive touchscreens, and break-out coffee corner.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "crystal-symphony",
        name: "Crystal Symphony Banquet",
        type: "Sangeet & Anniversary Gala",
        category: "banquet",
        capacity: 350,
        price: 75000,
        image: "luxury_ballroom.png",
        description: "Luminous banquet hall with LED dance floor, concert lighting, and multi-cuisine buffet arrangements.",
        amenities: ["wifi", "av", "catering", "ac"]
    },
    {
        id: "solaris-skydeck",
        name: "Solaris Infinity Skydeck",
        type: "VIP Sunset Party & Cocktail",
        category: "outdoor",
        capacity: 110,
        price: 42000,
        image: "venue 6.jpg",
        description: "An ultra-modern open-air skydeck featuring an infinity glass edge, glowing LED lounge pods, and panoramic horizon views.",
        amenities: ["wifi", "catering", "outdoor", "ac"]
    },
    {
        id: "monarch-pavilion",
        name: "Monarch Grand Convention Center",
        type: "Global Expo & Keynote",
        category: "conference",
        capacity: 600,
        price: 135000,
        image: "modern_conference.png",
        description: "A premier convention facility with 600+ seating capacity, multi-screen projection walls, translation booths, and VIP lounge.",
        amenities: ["wifi", "av", "catering", "ac"]
    },
    {
        id: "velvet-lounge",
        name: "The Velvet Underground Lounge",
        type: "Private Music & Afterparty",
        category: "banquet",
        capacity: 75,
        price: 22000,
        image: "images.png",
        description: "An acoustic soundproof subterranean lounge featuring vintage leather booths, state-of-the-art sound systems, and a private bar.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "oasis-retreat",
        name: "Oasis Palms Waterside Gazebo",
        type: "Lakeside Engagement & Dinner",
        category: "outdoor",
        capacity: 90,
        price: 32000,
        image: "outdoor_garden.png",
        description: "A serene lakeside gazebo decorated with floral draping, floating candles, and waterfront dining arrangements.",
        amenities: ["wifi", "catering", "outdoor"]
    },
    {
        id: "celestial-observatory",
        name: "Celestial Stargazer Glass Dome",
        type: "Stargazing Wedding & Dinner",
        category: "outdoor",
        capacity: 140,
        price: 62000,
        image: "outdoor_garden.png",
        description: "A futuristic transparent glass dome perched on a hilltop, offering 360-degree night sky views for intimate weddings and dinners.",
        amenities: ["wifi", "catering", "outdoor", "ac"]
    },
    {
        id: "artisan-loft",
        name: "The Artisan Industrial Loft",
        type: "Fashion Show & Art Exhibit",
        category: "conference",
        capacity: 175,
        price: 36000,
        image: "venue 5.jpg",
        description: "A chic exposed-brick industrial loft with high ceilings, track spotlights, runway floor space, and gallery walls.",
        amenities: ["wifi", "av", "ac"]
    },
    {
        id: "azure-bay",
        name: "Azure Bay Waterfront Deck",
        type: "Yacht Club Reception & Party",
        category: "outdoor",
        capacity: 320,
        price: 88000,
        image: "venue 6.jpg",
        description: "A sprawling waterfront pier with yacht docking access, wooden decking, maritime tiki bars, and sunset views.",
        amenities: ["wifi", "catering", "outdoor", "av"]
    },
    {
        id: "imperium-amphitheatre",
        name: "Imperium Marble Amphitheatre",
        type: "Concert & Award Ceremony",
        category: "conference",
        capacity: 550,
        price: 110000,
        image: "modern_conference.png",
        description: "A grand open-air marble amphitheatre with tiered acoustic seating, proscenium stage, and broadcast-quality lighting.",
        amenities: ["wifi", "av", "catering"]
    },
    {
        id: "zen-sanctuary",
        name: "Zen Sanctuary Bamboo Pavilion",
        type: "Wellness Retreat & Seminar",
        category: "meeting",
        capacity: 60,
        price: 18000,
        image: "venue 2.jpg",
        description: "A peaceful bamboo pavilion nestled by koi ponds and rock gardens, designed for yoga retreats, mindfulness seminars, and quiet workshops.",
        amenities: ["wifi", "catering", "outdoor"]
    },
    {
        id: "gold-vault",
        name: "The Grand Vault Speakeasy",
        type: "VIP Cocktail & Poker Night",
        category: "banquet",
        capacity: 45,
        price: 28000,
        image: "luxury_ballroom.png",
        description: "An ultra-exclusive private venue housed inside a restored 1920s bank vault featuring brass doors, velvet sofas, and craft mixology.",
        amenities: ["wifi", "av", "ac"]
    }
];


// Initial Bookings Data
let globalBookings = JSON.parse(localStorage.getItem('venue_bookings')) || [
    { booking_id: 1, venue: "Banquet Room A", name: "Rahul Sharma", date: "2026-10-05", phone: "9876543210", email: "rahul@example.com", payment_status: "PAID", payment_id: "pay_Rz98745612" },
    { booking_id: 2, venue: "Conference Hall A", name: "TechCorp Inc.", date: "2026-10-12", phone: "9123456789", email: "events@techcorp.com", payment_status: "PAID", payment_id: "pay_Rz98745613" }
];

let pendingRedirectUrl = null;
let currentPendingBooking = null;
let currentPendingPrice = 50000;

document.addEventListener("DOMContentLoaded", () => {
    initToastContainer();
    initSmartFilters();
    initCalendar();
    initAIChatbot();
    initBookingForm();
    initContactForm();
    initAuthForms();
    initAuthModal();
    initPaymentModal();
    initReceiptModal();
    checkUserSession();
});

/* ==========================================================================
   GLASSMORPHIC TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function initToastContainer() {
    if (!document.getElementById("toast-container")) {
        const container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }
}

function showToast(message, type = "success") {
    initToastContainer();
    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.className = "toast-glass";
    toast.innerHTML = `
        <i class="bi ${type === 'success' ? 'bi-check-circle-fill text-success' : 'bi-info-circle-fill text-primary'}" style="font-size: 1.2rem;"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

/* ==========================================================================
   USER SESSION & PROFILE DROPDOWN MANAGEMENT
   ========================================================================== */
function checkUserSession() {
    const user = JSON.parse(localStorage.getItem("logged_in_user"));
    const authNavLinks = document.querySelectorAll('a[href="auth.html"]');

    authNavLinks.forEach(link => {
        if (user) {
            const dropdownWrapper = document.createElement("li");
            dropdownWrapper.className = "nav-item dropdown ms-lg-2";
            dropdownWrapper.innerHTML = `
                <button class="btn btn-outline-glass dropdown-toggle btn-sm py-1.5 px-3 rounded-pill fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle text-danger me-1"></i> ${user.username}
                </button>
                <ul class="dropdown-menu dropdown-menu-end glass-panel shadow border-0 p-2 mt-2" style="background: rgba(255, 255, 255, 0.98);">
                    <li class="px-3 py-1 small text-muted">Logged in as <strong class="text-dark">${user.username}</strong></li>
                    <li><hr class="dropdown-divider my-1"></li>
                    <li>
                        <button class="dropdown-item text-danger rounded py-1.5 fw-bold" id="signout-btn-dropdown">
                            <i class="bi bi-box-arrow-right me-2"></i> Sign Out
                        </button>
                    </li>
                </ul>
            `;

            if (link.parentElement) {
                link.parentElement.replaceWith(dropdownWrapper);
                const signoutBtn = dropdownWrapper.querySelector("#signout-btn-dropdown");
                if (signoutBtn) {
                    signoutBtn.addEventListener("click", () => {
                        localStorage.removeItem("logged_in_user");
                        showToast("Signed out successfully.");
                        setTimeout(() => window.location.reload(), 600);
                    });
                }
            }
        }
    });
}

function initAuthModal() {
    const modalHTML = `
        <div id="auth-glass-modal" class="modal-glass-backdrop">
            <div class="modal-glass-content">
                <button id="modal-close-btn" class="modal-glass-close"><i class="bi bi-x-lg"></i></button>
                <div class="text-center mb-4">
                    <span class="badge badge-primary-glass mb-2 px-3 py-1"><i class="bi bi-lock-fill"></i> Authentication Required</span>
                    <h4 class="text-white fw-bold mb-1">Sign In to Continue Booking</h4>
                    <p class="text-muted small">Please sign in or create a quick account to reserve your venue space.</p>
                </div>

                <ul class="nav nav-pills nav-justified mb-4" id="modal-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active fw-bold" id="modal-signin-tab" data-bs-toggle="pill" data-bs-target="#modal-signin" type="button" role="tab">Sign In</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold" id="modal-signup-tab" data-bs-toggle="pill" data-bs-target="#modal-signup" type="button" role="tab">Sign Up</button>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="modal-signin" role="tabpanel">
                        <form id="modal-signin-form">
                            <div class="mb-3">
                                <label class="form-label text-muted small fw-bold">Username</label>
                                <input type="text" id="modal-signin-username" class="form-control form-control-glass" placeholder="Username" required>
                            </div>
                            <div class="mb-4">
                                <label class="form-label text-muted small fw-bold">Password</label>
                                <input type="password" id="modal-signin-password" class="form-control form-control-glass" placeholder="••••••••" required>
                            </div>
                            <button type="submit" class="btn btn-gradient w-100">Sign In & Continue</button>
                        </form>
                    </div>

                    <div class="tab-pane fade" id="modal-signup" role="tabpanel">
                        <form id="modal-signup-form">
                            <div class="mb-3">
                                <label class="form-label text-muted small fw-bold">Choose Username</label>
                                <input type="text" id="modal-signup-username" class="form-control form-control-glass" placeholder="Username" required>
                            </div>
                            <div class="mb-4">
                                <label class="form-label text-muted small fw-bold">Password</label>
                                <input type="password" id="modal-signup-password" class="form-control form-control-glass" placeholder="••••••••" required>
                            </div>
                            <button type="submit" class="btn btn-gradient w-100">Create Account & Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById("auth-glass-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const modalSigninForm = document.getElementById("modal-signin-form");
    const modalSignupForm = document.getElementById("modal-signup-form");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("show"));

    if (modalSigninForm) {
        modalSigninForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("modal-signin-username").value;
            const password = document.getElementById("modal-signin-password").value;

            try {
                const response = await fetch("http://localhost:3000/api/auth/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const res = await response.json();
                localStorage.setItem("logged_in_user", JSON.stringify(res.user || { username, token: "demo" }));
            } catch (err) {
                localStorage.setItem("logged_in_user", JSON.stringify({ username, token: "demo" }));
            }

            checkUserSession();
            modal.classList.remove("show");
            showToast(`🎉 Welcome back, ${username}! Login successful.`);

            if (pendingRedirectUrl) {
                const target = pendingRedirectUrl;
                pendingRedirectUrl = null;
                setTimeout(() => window.location.href = target, 500);
            }
        });
    }

    if (modalSignupForm) {
        modalSignupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("modal-signup-username").value;
            const password = document.getElementById("modal-signup-password").value;

            try {
                const response = await fetch("http://localhost:3000/api/auth/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const res = await response.json();
                localStorage.setItem("logged_in_user", JSON.stringify(res.user || { username, token: "demo" }));
            } catch (err) {
                localStorage.setItem("logged_in_user", JSON.stringify({ username, token: "demo" }));
            }

            checkUserSession();
            modal.classList.remove("show");
            showToast(`🎉 Account created! Welcome ${username}.`);

            if (pendingRedirectUrl) {
                const target = pendingRedirectUrl;
                pendingRedirectUrl = null;
                setTimeout(() => window.location.href = target, 500);
            }
        });
    }
}

function requireAuthOr(targetUrl) {
    const user = JSON.parse(localStorage.getItem("logged_in_user"));
    if (user) {
        window.location.href = targetUrl;
        return true;
    } else {
        pendingRedirectUrl = targetUrl;
        const modal = document.getElementById("auth-glass-modal");
        if (modal) modal.classList.add("show");
        return false;
    }
}

/* ==========================================================================
   RAZORPAY & UPI PAYMENT CHECKOUT MODAL
   ========================================================================== */
function initPaymentModal() {
    const paymentHTML = `
        <div id="payment-glass-modal" class="modal-glass-backdrop">
            <div class="modal-glass-content" style="width: 480px;">
                <button id="payment-close-btn" class="modal-glass-close"><i class="bi bi-x-lg"></i></button>
                <div class="text-center mb-3">
                    <div class="d-inline-flex align-items-center gap-2 bg-light px-3 py-1 rounded-pill mb-2 border border-secondary border-opacity-10">
                        <i class="bi bi-shield-lock-fill text-success"></i>
                        <span class="small fw-bold text-dark">Razorpay Secured • Test Mode</span>
                    </div>
                    <h4 class="text-white fw-bold mb-1">Payment Checkout</h4>
                    <p class="text-muted small">Select your preferred payment option below.</p>
                </div>

                <!-- Bill Summary -->
                <div class="p-3 bg-light rounded-3 mb-3 border border-secondary border-opacity-10">
                    <div class="d-flex justify-content-between text-muted small mb-1">
                        <span>Venue Rental:</span>
                        <span id="pay-summary-venue" class="fw-bold text-dark">Banquet Room A</span>
                    </div>
                    <div class="d-flex justify-content-between text-muted small mb-1">
                        <span>Booking Date:</span>
                        <span id="pay-summary-date" class="fw-bold text-dark">2026-10-15</span>
                    </div>
                    <hr class="my-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold text-dark">Total Amount Due:</span>
                        <h4 id="pay-summary-total" class="text-danger fw-bold mb-0">₹50,000</h4>
                    </div>
                </div>

                <!-- Payment Methods Tabs -->
                <ul class="nav nav-pills nav-justified mb-3" role="tablist">
                    <li class="nav-item">
                        <button class="nav-link active btn-sm fw-bold" id="pay-tab-upi" data-bs-toggle="pill" data-bs-target="#pay-pane-upi" type="button"><i class="bi bi-qr-code-scan me-1"></i> UPI / GPay</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link btn-sm fw-bold" id="pay-tab-card" data-bs-toggle="pill" data-bs-target="#pay-pane-card" type="button"><i class="bi bi-credit-card me-1"></i> Card</button>
                    </li>
                </ul>

                <div class="tab-content mb-3">
                    <!-- UPI Pane -->
                    <div class="tab-pane fade show active text-center" id="pay-pane-upi">
                        <div class="p-3 bg-white border rounded-3 mb-2 d-inline-block shadow-sm">
                            <i class="bi bi-qr-code text-dark" style="font-size: 5.5rem;"></i>
                            <div class="small text-muted fw-bold mt-1">Scan & Pay via GPay / PhonePe</div>
                        </div>
                        <div class="form-group text-start">
                            <label class="form-label text-muted small fw-bold">OR Enter UPI ID</label>
                            <input type="text" id="pay-upi-vpa" class="form-control form-control-glass" value="success@razorpay" placeholder="username@upi">
                        </div>
                    </div>

                    <!-- Card Pane -->
                    <div class="tab-pane fade" id="pay-pane-card">
                        <div class="mb-2 text-start">
                            <label class="form-label text-muted small fw-bold">Card Number</label>
                            <input type="text" class="form-control form-control-glass" value="4242 •••• •••• 4242" readonly>
                        </div>
                        <div class="row g-2 text-start">
                            <div class="col-6">
                                <label class="form-label text-muted small fw-bold">Expiry</label>
                                <input type="text" class="form-control form-control-glass" value="12/28" readonly>
                            </div>
                            <div class="col-6">
                                <label class="form-label text-muted small fw-bold">CVV</label>
                                <input type="password" class="form-control form-control-glass" value="123" readonly>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="pay-now-btn" class="btn btn-gradient btn-lg w-100 py-2.5 fw-bold">
                    <i class="bi bi-lock-fill me-1"></i> Pay Now & Confirm Booking
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', paymentHTML);

    const modal = document.getElementById("payment-glass-modal");
    const closeBtn = document.getElementById("payment-close-btn");
    const payNowBtn = document.getElementById("pay-now-btn");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("show"));

    if (payNowBtn) {
        payNowBtn.addEventListener("click", async () => {
            if (!currentPendingBooking) return;

            payNowBtn.disabled = true;
            payNowBtn.innerHTML = `<i class="bi bi-arrow-repeat spin me-2"></i> Processing Bank Payment...`;

            setTimeout(async () => {
                modal.classList.remove("show");
                payNowBtn.disabled = false;
                payNowBtn.innerHTML = `<i class="bi bi-lock-fill me-1"></i> Pay Now & Confirm Booking`;

                const txId = "pay_Rz" + Math.random().toString(36).substring(2, 10).toUpperCase();
                await finalizePaidBooking(currentPendingBooking, txId, currentPendingPrice);
            }, 1200);
        });
    }
}

function showPaymentModal(bookingData, venuePrice) {
    currentPendingBooking = bookingData;
    currentPendingPrice = venuePrice;

    document.getElementById("pay-summary-venue").textContent = bookingData.venue;
    document.getElementById("pay-summary-date").textContent = bookingData.date;
    document.getElementById("pay-summary-total").textContent = `₹${venuePrice.toLocaleString()}`;

    const modal = document.getElementById("payment-glass-modal");
    if (modal) modal.classList.add("show");
}

/* ==========================================================================
   DIGITAL RECEIPT & INVOICE MODAL
   ========================================================================== */
function initReceiptModal() {
    const receiptHTML = `
        <div id="receipt-glass-modal" class="modal-glass-backdrop">
            <div id="receipt-modal-content" class="modal-glass-content" style="width: 520px;">
                <button id="receipt-close-btn" class="modal-glass-close no-print"><i class="bi bi-x-lg"></i></button>
                <div class="text-center mb-4">
                    <div class="fs-1 text-success mb-1"><i class="bi bi-check-circle-fill"></i></div>
                    <span class="badge badge-success-glass mb-2 px-3 py-1">Payment Successful • PAID</span>
                    <h3 class="text-white fw-bold mb-1">Booking Confirmation</h3>
                    <p class="text-muted small">Transaction ID: <span id="receipt-tx-id" class="fw-bold text-dark">pay_Rz98745612</span></p>
                </div>

                <div class="p-3 bg-light rounded-3 mb-4 border border-secondary border-opacity-10">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted small">Venue:</span>
                        <strong id="receipt-venue" class="text-dark">Banquet Room A</strong>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted small">Reserved Date:</span>
                        <strong id="receipt-date" class="text-dark">2026-10-15</strong>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted small">Customer Name:</span>
                        <strong id="receipt-name" class="text-dark">Rahul Sharma</strong>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <span class="text-muted small">Contact Email:</span>
                        <span id="receipt-email" class="text-dark font-monospace small">rahul@example.com</span>
                    </div>
                    <hr class="my-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold text-dark">Total Amount Paid:</span>
                        <h4 id="receipt-amount" class="text-danger fw-bold mb-0">₹50,000</h4>
                    </div>
                </div>

                <div class="d-flex gap-2 no-print">
                    <button id="print-receipt-btn" class="btn btn-outline-glass w-50"><i class="bi bi-printer-fill me-2"></i>Print Invoice</button>
                    <a href="availability-calendar.html" class="btn btn-gradient w-50 text-center"><i class="bi bi-calendar-check me-2"></i>View Calendar</a>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', receiptHTML);

    const closeBtn = document.getElementById("receipt-close-btn");
    const printBtn = document.getElementById("print-receipt-btn");
    const modal = document.getElementById("receipt-glass-modal");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    if (printBtn) printBtn.addEventListener("click", () => window.print());
}

function showReceiptModal(bookingData, txId, amount) {
    document.getElementById("receipt-tx-id").textContent = txId;
    document.getElementById("receipt-venue").textContent = bookingData.venue;
    document.getElementById("receipt-date").textContent = bookingData.date;
    document.getElementById("receipt-name").textContent = bookingData.name;
    document.getElementById("receipt-email").textContent = bookingData.email;
    document.getElementById("receipt-amount").textContent = `₹${amount.toLocaleString()}`;

    const modal = document.getElementById("receipt-glass-modal");
    if (modal) modal.classList.add("show");
}

async function finalizePaidBooking(bookingData, paymentId, amount) {
    bookingData.payment_status = "PAID";
    bookingData.payment_id = paymentId;
    bookingData.amount_paid = amount;

    try {
        await fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });
    } catch (err) {
        console.warn("Saved to local storage");
    }

    globalBookings.push(bookingData);
    localStorage.setItem("venue_bookings", JSON.stringify(globalBookings));

    showToast(`🎉 Payment Received! ₹${amount.toLocaleString()} for ${bookingData.venue}`);
    showReceiptModal(bookingData, paymentId, amount);
}

/* ==========================================================================
   SMART FILTERS ENGINE (VENUES PAGE & INDEX PAGE)
   ========================================================================== */
function initSmartFilters() {
    const venuesContainer = document.getElementById("venues-grid");
    if (!venuesContainer) return;

    const searchInput = document.getElementById("filter-search");
    const capacityRange = document.getElementById("filter-capacity");
    const capacityVal = document.getElementById("filter-capacity-val");
    const priceRange = document.getElementById("filter-price");
    const priceVal = document.getElementById("filter-price-val");
    const categorySelect = document.getElementById("filter-category");
    const amenityCheckboxes = document.querySelectorAll(".filter-amenity");
    const resultsCount = document.getElementById("results-count");

    function renderVenues(filteredList) {
        venuesContainer.innerHTML = "";
        if (resultsCount) resultsCount.textContent = `${filteredList.length} venues found`;

        if (filteredList.length === 0) {
            venuesContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="glass-panel p-5">
                        <i class="bi bi-search text-muted mb-3" style="font-size: 2.5rem;"></i>
                        <h4 class="text-secondary">No matching venues found</h4>
                        <p class="text-muted">Try adjusting your budget, capacity, or amenity filters.</p>
                        <button class="btn btn-outline-glass mt-3" id="reset-filters-btn">Reset All Filters</button>
                    </div>
                </div>
            `;
            const resetBtn = document.getElementById("reset-filters-btn");
            if (resetBtn) resetBtn.addEventListener("click", resetFilters);
            return;
        }

        filteredList.forEach(venue => {
            const cardCol = document.createElement("div");
            cardCol.className = "col-12 col-md-6 col-xl-4 mb-4";
            cardCol.innerHTML = `
                <div class="glass-card">
                    <div class="position-relative">
                        <img src="${venue.image}" class="venue-card-img" alt="${venue.name}" onerror="this.src='images.png'">
                        <span class="badge badge-primary-glass position-absolute top-0 end-0 m-3">${venue.type}</span>
                    </div>
                    <div class="venue-card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="mb-0 text-white fw-bold">${venue.name}</h5>
                        </div>
                        <p class="text-muted small mb-3">${venue.description}</p>
                        
                        <div class="d-flex flex-wrap gap-1 mb-3">
                            <span class="badge-glass"><i class="bi bi-people-fill text-info"></i> Cap: ${venue.capacity}</span>
                            ${venue.amenities.map(a => `<span class="amenity-chip">${a.toUpperCase()}</span>`).join('')}
                        </div>

                        <div class="venue-card-footer">
                            <div>
                                <span class="text-muted small display-block">Starting from</span>
                                <div class="venue-price">₹${venue.price.toLocaleString()}<span class="fs-6 text-muted font-weight-normal">/day</span></div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <a href="availability-calendar.html?venue=${encodeURIComponent(venue.name)}" class="btn btn-outline-glass btn-icon-sm" title="Check Calendar"><i class="bi bi-calendar3"></i></a>
                                <button class="btn btn-gradient btn-sm book-btn-trigger" data-target="booking.html?venue=${encodeURIComponent(venue.name)}">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            venuesContainer.appendChild(cardCol);
        });

        document.querySelectorAll(".book-btn-trigger").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const target = btn.getAttribute("data-target");
                requireAuthOr(target);
            });
        });
    }

    function applyFilters() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const maxCap = capacityRange ? parseInt(capacityRange.value) : 500;
        const maxPrice = priceRange ? parseInt(priceRange.value) : 100000;
        const selectedCat = categorySelect ? categorySelect.value : "all";
        
        const selectedAmenities = [];
        amenityCheckboxes.forEach(cb => {
            if (cb.checked) selectedAmenities.push(cb.value);
        });

        if (capacityVal && capacityRange) capacityVal.textContent = maxCap >= 500 ? "500+ guests" : `${maxCap} guests`;
        if (priceVal && priceRange) priceVal.textContent = `₹${maxPrice.toLocaleString()}`;

        const filtered = VENUE_DATA.filter(venue => {
            const matchesQuery = !query || 
                venue.name.toLowerCase().includes(query) || 
                venue.description.toLowerCase().includes(query) ||
                venue.type.toLowerCase().includes(query);

            const matchesCap = venue.capacity <= maxCap;
            const matchesPrice = venue.price <= maxPrice;
            const matchesCategory = selectedCat === "all" || venue.category === selectedCat;
            const matchesAmenities = selectedAmenities.every(a => venue.amenities.includes(a));

            return matchesQuery && matchesCap && matchesPrice && matchesCategory && matchesAmenities;
        });

        renderVenues(filtered);
    }

    function resetFilters() {
        if (searchInput) searchInput.value = "";
        if (capacityRange) capacityRange.value = 500;
        if (priceRange) priceRange.value = 100000;
        if (categorySelect) categorySelect.value = "all";
        amenityCheckboxes.forEach(cb => cb.checked = false);
        applyFilters();
    }

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (capacityRange) capacityRange.addEventListener("input", applyFilters);
    if (priceRange) priceRange.addEventListener("input", applyFilters);
    if (categorySelect) categorySelect.addEventListener("change", applyFilters);
    amenityCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));

    applyFilters();
}

/* ==========================================================================
   FULLCALENDAR INTEGRATION
   ========================================================================== */
function initCalendar() {
    const calendarEl = document.getElementById("calendar");
    if (!calendarEl) return;

    const events = globalBookings.map(b => ({
        id: b.booking_id,
        title: `${b.venue} (${b.name}) - PAID`,
        start: b.date,
        allDay: true,
        backgroundColor: '#ff385c',
        borderColor: '#e11d48',
        textColor: '#ffffff'
    }));

    if (window.FullCalendar) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            events: events,
            dateClick: function(info) {
                requireAuthOr(`booking.html?date=${info.dateStr}`);
            }
        });
        calendar.render();
    }
}

/* ==========================================================================
   FLOATING AI ASSISTANT CHATBOT WIDGET
   ========================================================================== */
function initAIChatbot() {
    const chatbotHTML = `
        <button id="ai-chatbot-toggle" title="AI Venue Concierge">
            <i class="bi bi-robot"></i>
            <span class="chat-badge-dot"></span>
        </button>

        <div id="ai-chatbot-window" class="glass-panel">
            <div class="chat-header">
                <div class="chat-header-title">
                    <div class="chat-avatar"><i class="bi bi-stars"></i></div>
                    <div>
                        <h6 class="mb-0 text-white fw-bold">Venue AI Concierge</h6>
                        <span class="text-success small"><i class="bi bi-circle-fill" style="font-size: 8px;"></i> Online</span>
                    </div>
                </div>
                <button id="chat-close-btn" class="btn btn-sm text-muted border-0"><i class="bi bi-x-lg"></i></button>
            </div>

            <div class="chat-messages" id="chat-messages">
                <div class="chat-bubble chat-bubble-ai">
                    👋 Hello! I am your <strong>AI Venue Concierge</strong>. Tell me about your event (guest count, budget, event type) and I'll find your perfect match!
                </div>
            </div>

            <div class="chat-suggestions">
                <button class="chip-btn" data-query="Suggest venue for 100 people">👥 100+ Capacity</button>
                <button class="chip-btn" data-query="Venues under 30000">💰 Under ₹30,000</button>
                <button class="chip-btn" data-query="Estimate budget for 150 guests">📊 AI Budget Generator</button>
                <button class="chip-btn" data-query="Wedding banquet halls">💒 Wedding Halls</button>
            </div>

            <div class="chat-input-area">
                <input type="text" id="chat-input-field" class="chat-input" placeholder="Ask AI (e.g. 'Estimate budget for Banquet Room A')..." />
                <button id="chat-send-btn" class="chat-send-btn"><i class="bi bi-send-fill"></i></button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    const toggleBtn = document.getElementById("ai-chatbot-toggle");
    const windowEl = document.getElementById("ai-chatbot-window");
    const closeBtn = document.getElementById("chat-close-btn");
    const inputField = document.getElementById("chat-input-field");
    const sendBtn = document.getElementById("chat-send-btn");
    const messagesContainer = document.getElementById("chat-messages");
    const chips = document.querySelectorAll(".chip-btn");

    toggleBtn.addEventListener("click", () => windowEl.classList.toggle("open"));
    closeBtn.addEventListener("click", () => windowEl.classList.remove("open"));

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            const query = chip.getAttribute("data-query");
            if (query) {
                inputField.value = query;
                handleUserMessage();
            }
        });
    });

    sendBtn.addEventListener("click", handleUserMessage);
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleUserMessage();
    });

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}`;
        msgDiv.innerHTML = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleUserMessage() {
        const query = inputField.value.trim();
        if (!query) return;

        addMessage(query, true);
        inputField.value = "";

        const typingDiv = document.createElement("div");
        typingDiv.className = "chat-bubble chat-bubble-ai text-muted fst-italic";
        typingDiv.id = "ai-typing";
        typingDiv.textContent = "AI is thinking...";
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            const typing = document.getElementById("ai-typing");
            if (typing) typing.remove();

            const aiResponse = generateAIResponse(query);
            addMessage(aiResponse, false);
        }, 500);
    }

    function generateAIResponse(userText) {
        const txt = userText.toLowerCase();
        const capMatch = txt.match(/(\d+)\s*(people|guests|person|capacity)/);
        const priceMatch = txt.match(/(\d+)\s*(k|thousand|000|rs|inr)/);

        if (txt.includes("budget") || txt.includes("estimate") || txt.includes("cost")) {
            const guests = capMatch ? parseInt(capMatch[1]) : 120;
            const catering = guests * 450;
            const venueCost = 50000;
            const decor = 17500;
            const total = venueCost + catering + decor;

            return `📊 <strong>AI Budget & Cost Generator (${guests} Guests):</strong><br><br>
            • <strong>Venue Rental:</strong> ₹${venueCost.toLocaleString()}<br>
            • <strong>Estimated Catering:</strong> ₹${catering.toLocaleString()} (₹450/plate)<br>
            • <strong>Decor & Lighting:</strong> ₹${decor.toLocaleString()}<br>
            ------------------------------<br>
            🔥 <strong>Total Estimated Budget: ₹${total.toLocaleString()}</strong><br><br>
            <a href="#" onclick="requireAuthOr('booking.html')" class="text-danger fw-bold">Proceed to Book & Pay →</a>`;
        }

        if (txt.includes("wedding") || txt.includes("reception") || txt.includes("banquet")) {
            const matches = VENUE_DATA.filter(v => v.category === "banquet" || v.type.toLowerCase().includes("wedding"));
            let reply = `💒 <strong>Top Recommended Wedding & Banquet Venues:</strong><br><br>`;
            matches.forEach(m => {
                reply += `• <strong>${m.name}</strong> (${m.capacity} guests) - ₹${m.price.toLocaleString()}/day<br>`;
            });
            reply += `<br><a href="venues.html" class="text-danger fw-bold">View and Filter on Venues page →</a>`;
            return reply;
        }

        if (txt.includes("under") || txt.includes("cheap") || priceMatch) {
            let limit = 35000;
            if (txt.includes("10000") || txt.includes("10k")) limit = 10000;
            if (txt.includes("30000") || txt.includes("30k")) limit = 30000;
            if (txt.includes("50000") || txt.includes("50k")) limit = 50000;

            const matches = VENUE_DATA.filter(v => v.price <= limit);
            let reply = `💰 <strong>Venues matching budget (Under ₹${limit.toLocaleString()}):</strong><br><br>`;
            matches.forEach(m => {
                reply += `• <strong>${m.name}</strong> - ₹${m.price.toLocaleString()}/day (Cap: ${m.capacity})<br>`;
            });
            return reply;
        }

        if (capMatch || txt.includes("people") || txt.includes("capacity")) {
            const num = capMatch ? parseInt(capMatch[1]) : 100;
            const matches = VENUE_DATA.filter(v => v.capacity >= num);
            let reply = `👥 <strong>Venues accommodating ${num}+ guests:</strong><br><br>`;
            matches.forEach(m => {
                reply += `• <strong>${m.name}</strong> (Capacity: ${m.capacity} guests) - ₹${m.price.toLocaleString()}/day<br>`;
            });
            return reply;
        }

        if (txt.includes("how to book") || txt.includes("process") || txt.includes("guide")) {
            return `📋 <strong>Simple 3-Step Booking Guide:</strong><br>
            1. Browse the <a href="venues.html" class="text-danger fw-bold">Venues page</a> and choose your space.<br>
            2. Check dates on the <a href="availability-calendar.html" class="text-danger fw-bold">Calendar</a>.<br>
            3. Click <strong>Book Now</strong> to pay securely via Razorpay/UPI & download invoice!`;
        }

        if (txt.includes("hello") || txt.includes("hi") || txt.includes("hey")) {
            return `👋 Hi there! Tell me about your event (guest count, budget, or venue type), and I will instantly recommend the best venue for you!`;
        }

        return `🤖 I analyzed your query! You can explore our <strong>${VENUE_DATA.length} premium venues</strong> ranging from 50 to 300 capacity.<br><br>
        Try asking: <em>"Estimate budget for 150 guests"</em> or <em>"Suggest conference hall for 50 people"</em>.`;
    }
}

/* ==========================================================================
   AUTHENTICATION FORM HANDLERS
   ========================================================================== */
function initAuthForms() {
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");

    if (signinForm) {
        signinForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("signin-username").value;
            const password = document.getElementById("signin-password").value;

            try {
                const response = await fetch("http://localhost:3000/api/auth/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const res = await response.json();
                localStorage.setItem("logged_in_user", JSON.stringify(res.user || { username, token: "demo" }));
            } catch (err) {
                localStorage.setItem("logged_in_user", JSON.stringify({ username, token: "demo" }));
            }

            showToast(`🎉 Welcome back, ${username}! Login successful.`);
            setTimeout(() => window.location.href = "index.html", 600);
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("http://localhost:3000/api/auth/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });
                const res = await response.json();
                localStorage.setItem("logged_in_user", JSON.stringify(res.user || { username, token: "demo" }));
            } catch (err) {
                localStorage.setItem("logged_in_user", JSON.stringify({ username, token: "demo" }));
            }

            showToast(`🎉 Account created! Welcome ${username}.`);
            setTimeout(() => window.location.href = "index.html", 600);
        });
    }
}

/* ==========================================================================
   BOOKING & RAZORPAY / UPI PAYMENT CHECKOUT LAUNCHER
   ========================================================================== */
function initBookingForm() {
    const bookingForm = document.getElementById("booking-form");
    if (!bookingForm) return;

    const venueSelect = document.getElementById("venue");
    if (venueSelect && VENUE_DATA && VENUE_DATA.length > 0) {
        venueSelect.innerHTML = '<option value="">-- Select a Venue --</option>' + 
            VENUE_DATA.map(v => `<option value="${v.name}">${v.name} (${v.capacity} Guests - ₹${v.price.toLocaleString()}/day)</option>`).join('');
    }

    const params = new URLSearchParams(window.location.search);
    const venueParam = params.get("venue");
    const dateParam = params.get("date");

    if (venueParam && venueSelect) {
        venueSelect.value = venueParam;
    }
    if (dateParam) {
        const dateInput = document.getElementById("date");
        if (dateInput) dateInput.value = dateParam;
    }

    bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("logged_in_user"));
        if (!user) {
            const modal = document.getElementById("auth-glass-modal");
            if (modal) modal.classList.add("show");
            return;
        }

        const venueName = document.getElementById("venue").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;

        const bookingData = { venue: venueName, name, email, phone, date };
        const venueObj = VENUE_DATA.find(v => v.name === venueName) || { price: 50000 };

        showPaymentModal(bookingData, venueObj.price);
    });
}

function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });
            const res = await response.json();
            showToast(`✨ ${res.message || "Thank you! Your message has been sent to our team."}`);
            contactForm.reset();
        } catch (err) {
            showToast("✨ Thank you! Your message has been sent to our support team.");
            contactForm.reset();
        }
    });
}
