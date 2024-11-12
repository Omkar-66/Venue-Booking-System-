document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById('signup-form'); 
    const signinForm = document.getElementById('signin-form'); 
    const bookingForm = document.getElementById('booking-form');
    const bookingList = document.getElementById('booking-list');
    const contactForm = document.getElementById('contact-form');
    const calendarEl = document.getElementById('calendar'); 

    let bookings = []; // Store bookings to use for both listing and calendar

    // Load existing bookings from the backend
    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:3000/bookings');
            bookings = await response.json();
            displayBookings(bookings);
            updateCalendar(bookings);  // Ensure the calendar is updated after fetching bookings
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const fetchVenues = async () => {
        try {
            const response = await fetch('http://localhost:3000/venues');
            const venues = await response.json();
            // Handle venues data if needed
        } catch (error) {
            console.error('Error fetching venues:', error);
        }
    };

    // Function to display bookings in the list
    function displayBookings(bookings) {
        bookingList.innerHTML = '';
        bookings.forEach((booking, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${booking.name} - ${booking.date}`;

            const updateBtn = document.createElement('button');
            updateBtn.classList.add('btn', 'btn-warning', 'ml-3');
            updateBtn.textContent = 'Update';
            updateBtn.onclick = () => updateBooking(index, booking.booking_id);
            listItem.appendChild(updateBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'ml-3');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteBooking(booking.booking_id);
            listItem.appendChild(deleteBtn);

            bookingList.appendChild(listItem);
        });
    }

    // Update Calendar with bookings
    function updateCalendar(bookings) {
        const events = bookings.map(booking => ({
            title: booking.name,
            start: booking.date,
            allDay: true,
            description: booking.venue // You can display venue info if needed
        }));

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: events,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }
        });

        calendar.render();
    }

    // Handle booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const venue_id = document.getElementById('venue_id').value;

            const bookingData = { name, email, phone, date, venue_id };

            // Post the booking data to the backend
            try {
                const response = await fetch('http://localhost:3000/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Booking submitted successfully!');
                    bookingForm.reset();
                    fetchBookings();  // Refresh the bookings list and calendar
                } else {
                    alert(result.error || 'Booking failed.');
                }
            } catch (error) {
                console.error('Error creating booking:', error);
            }
        });
    }

    // Update a booking
    async function updateBooking(index, bookingId) {
        const booking = bookings[index];
        const newName = prompt("Update name:", booking.name);
        const newDate = prompt("Update date (YYYY-MM-DD):", booking.date);

        if (newName && newDate) {
            const updatedBooking = { name: newName, date: newDate };
            try {
                const response = await fetch(`http://localhost:3000/bookings/${bookingId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedBooking),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Booking updated successfully!');
                    fetchBookings();  // Refresh the bookings list and calendar
                } else {
                    alert(result.error || 'Failed to update booking.');
                }
            } catch (error) {
                console.error('Error updating booking:', error);
            }
        }
    }

    // Delete a booking
    async function deleteBooking(bookingId) {
        try {
            const response = await fetch(`http://localhost:3000/bookings/${bookingId}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            if (response.ok) {
                alert('Booking deleted successfully!');
                fetchBookings();  // Refresh the bookings list and calendar
            } else {
                alert(result.error || 'Failed to delete booking.');
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    }

    // Initialize by fetching data from backend
    fetchBookings();
    fetchVenues();

    // Contact Form Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            const contactMessage = { name, email, message };
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(contactMessage);
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            alert('Your message has been sent!');
            contactForm.reset();
        });
    }

    // Sign-Up form handling
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Sign-Up form submitted");

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if the username already exists
            const userExists = users.some(user => user.username === username);
            if (userExists) {
                alert('Username already exists. Please choose another one.');
            } else {
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful!');
                signupForm.reset();
            }
        });
    }
});
