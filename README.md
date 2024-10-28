# 🏨 Hotel Booking App

Welcome to the Hotel Booking App! This project is a full-featured hotel booking application built with React, Redux, Firebase, and PayPal for handling bookings, managing rooms, and processing payments.

## 🚀 Features
- User-friendly **Room Booking** and **User Dashboard**
- **Admin Dashboard** for managing rooms and availability
- **Firebase Authentication** for secure login and signup
- **Firebase Firestore** for storing user, booking, and room data
- **Favorites** and **Rating** functionality for users to mark and review previous bookings
- **Payment integration** with PayPal for secure, seamless payment processing

## Built With

- [![React][React.js]][React-url]
- [![Redux][Redux.js]][Redux-url]
- [![Firebase][Firebase]][Firebase-url]

## About The Hotel 

**Harmony Heights** is a vintage-themed hotel management app that leverages the power of React, Redux, and Firebase. This application aims to provide a robust and user-friendly solution for managing hotel operations while embodying the timeless elegance of its namesake in Pretoria.

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
|   |   |   └── ratingSlice.js

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

Navigate to the project directory:

```
cd hotel-app
```
3. **Change branch from main to dev:**

``` 
git checkout dev 
```

3. **Start the application:**
   ```
   npm run dev
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

## Contact

- Author: Matlhogonolo Naoa
- Email: tlhoxi12@gmail.com
- Project Link: `https://github.com/Matlhogonolo012/react-redux-hotel-app`

## 📝 License
This project is licensed under the MIT License.

---

> **Happy Booking! 🏨🌐**

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Firebase]: https://firebase.google.com/
[Firebase-url]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black