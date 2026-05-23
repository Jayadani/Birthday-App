# Birthday App 🎂

A React Native mobile app for managing and celebrating birthdays with user profiles and profile picture uploads using Firebase.

## Features

- ✅ **User Authentication** - Sign up and login with email/password
- ✅ **User Profiles** - Create and customize user profiles
- ✅ **Profile Pictures** - Upload and store profile pictures in Firebase Storage
- ✅ **Edit Profile** - Update profile information including name, bio, and birthday
- ✅ **Firebase Integration** - Real-time database and authentication
- ✅ **Tab Navigation** - Easy navigation between Home and Profile screens

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe development
- **Firebase** - Backend services (Auth, Firestore, Storage)
- **React Navigation** - Navigation library

## Project Structure

```
birthday-app/
├── src/
│   ├── firebase/
│   │   └── config.ts           # Firebase configuration
│   ├── context/
│   │   └── AuthContext.tsx     # Authentication context
│   ├── screens/
│   │   ├── LoginScreen.tsx     # Login UI
│   │   ├── SignupScreen.tsx    # Signup UI
│   │   ├── HomeScreen.tsx      # Home/Birthdays list
│   │   └── ProfileScreen.tsx   # User profile with picture upload
│   └── App.tsx                 # Navigation setup
├── index.js                    # Entry point
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Android Studio or Xcode

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jayadani/birthday-app.git
   cd birthday-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Get your Firebase config credentials
   - Update `src/firebase/config.ts` with your credentials:
     ```typescript
     const firebaseConfig = {
       apiKey: 'YOUR_API_KEY',
       authDomain: 'YOUR_AUTH_DOMAIN',
       projectId: 'YOUR_PROJECT_ID',
       storageBucket: 'YOUR_STORAGE_BUCKET',
       messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
       appId: 'YOUR_APP_ID',
     };
     ```

4. **Run the app:**

   **For Android:**
   ```bash
   npm run android
   ```

   **For iOS:**
   ```bash
   npm run ios
   ```

## Usage

1. **Sign Up** - Create a new account with email and password
2. **Login** - Sign in with your credentials
3. **Edit Profile** - Add your name, birthday, and bio
4. **Upload Picture** - Add a profile picture from your device
5. **View Home** - See upcoming birthdays (feature ready to extend)

## Firebase Setup

### Enable Firebase Services:

1. **Authentication**
   - Go to Authentication in Firebase Console
   - Enable Email/Password sign-in method

2. **Firestore Database**
   - Create a Firestore database
   - Set rules:
     ```
     match /users/{uid} {
       allow read, write: if request.auth.uid == uid;
     }
     ```

3. **Storage**
   - Create a Storage bucket
   - Set rules:
     ```
     match /profile_pictures/{uid}/[^/]+ {
       allow read, write: if request.auth.uid == uid;
     }
     ```

## Future Features

- [ ] Add/edit/delete birthdays
- [ ] Birthday reminders and notifications
- [ ] Share birthdays with friends
- [ ] Birthday calendar view
- [ ] Gift ideas and wishlists
- [ ] Push notifications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by Jayadani
