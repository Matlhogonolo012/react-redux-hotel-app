# 🏨 Hotel Booking App

Welcome to the Hotel Booking App! This project is a full-featured hotel booking application built with React, Redux, Firebase, and PayPal for handling bookings, managing rooms, and processing payments.

## 🚀 Features
- User-friendly **Room Booking** and **User Dashboard**
- **Admin Dashboard** for managing rooms and availability
- **Firebase Authentication** for secure login and signup
- **Firebase Firestore** for storing user, booking, and room data
- **Favorites** and **Rating** functionality for users to mark and review previous bookings
- **Payment integration** with PayPal for secure, seamless payment processing

## 📂 Project Structure

Here's an overview of the project structure:

```plaintext
hotel-booking-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/y
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── variables.css
│   │       └── global.css
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   └── SignupForm.js
│   │   ├── Booking/
│   │   │   ├── BookingForm.js
│   │   │   ├── BookingList.js
│   │   │   ├── RateBooking.js
│   │   │   └── Favorites.js
│   │   ├── Common/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── RoomCard.js
│   │   │   └── AddToFavoritesButton.js
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── UserDashboard.js
│   │   │   ├── RoomManagement.js
│   │   │   ├── AddRoomForm.js
│   │   │   └── UpdateRoomForm.js
│   │   └── Payment/
│   │       └── PayPalButton.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── RoomDetailsPage.js
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── UserPage.js
│   │   ├── AdminPage.js
│   │   └── PaymentConfirmation.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── roomSlice.js
│   │   │   ├── bookingSlice.js
│   │   │   └── favoriteSlice.js
│   ├── services/
│   │   ├── firebase.js
│   │   └── api.js
│   ├── utils/
│   │   ├── dateUtils.js
│   │   ├── priceUtils.js
│   │   └── authUtils.js
│   ├── App.js
│   ├── index.js
│   └── AppRouter.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/)

### Installation
1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/hotel-booking-app.git
   cd hotel-booking-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```
   npm install @reduxjs/toolkit
npm install firebase react-router-dom redux react-redux @paypal/react-paypal-js

3. **Start the application:**
   ```
   npm start
   ```

## 🌐 Usage
- Access **Admin Dashboard** to add rooms and set availability.
- **User Dashboard** allows users to view bookings, rate them, and add favorites.
- Process payments with **PayPal** during booking.

## 📜 Key Files and Directories

- **`src/components/`**: Contains reusable components like Auth, Booking, and Dashboard components.
- **`src/redux/`**: Redux store and slices for managing state.
- **`src/services/firebase.js`**: Firebase setup and configuration.
- **`src/utils/`**: Utility functions like date formatting and price calculation.

## 🔐 Authentication and Authorization
- Users and Admins must log in via Firebase Authentication.
- Access controls ensure only admins can manage room availability.

## 💸 Payments
- The **PayPalButton.js** component in `Payment/` manages payment processing.
- Payments are secured through PayPal’s client ID setup.

## 📝 License
This project is licensed under the MIT License.

---

> **Happy Booking! 🏨🌐**

