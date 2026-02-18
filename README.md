# College Event Management Portal

A full-stack web application built with MERN stack for managing college events, student registrations, and administrative tasks.

## Features

### Student Features
- Register and login to the portal
- View all available events
- Register for events
- View registered events
- Update profile information

### Admin Features
- Admin dashboard with statistics
- Create, edit, and delete events
- View all students
- View all event registrations
- Manage event categories

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React.js (with Vite)
- React Router for navigation
- Axios for API calls
- Context API for state management

## Project Structure

```
College Event Management Portal/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Authentication middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   ├── server.js         # Entry point
│   ├── seed.js           # Database seeding
│   └── package.json
│
└── client/               # Frontend
    ├── public/
    ├── src/
    │   ├── components/   # Reusable components
    │   ├── context/      # Context API
    │   ├── pages/        # Page components
    │   ├── services/     # API services
    │   ├── App.jsx       # Main app component
    │   ├── main.jsx      # Entry point
    │   └── index.css     # Global styles
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Step 1: Clone or Navigate to Project
```bash
cd "College Event Management Portal"
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 3: Configure Environment Variables
The `.env` file is already created in the server folder. Update if needed:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/college_event_management
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
```

### Step 4: Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For Windows (if MongoDB is installed as service)
net start MongoDB

# For Mac/Linux
sudo systemctl start mongod
```

### Step 5: Seed Database (Optional but Recommended)
```bash
# From server directory
node seed.js
```

This will create:
- Admin account: admin@college.com / admin123
- Student account: student@college.com / student123
- 5 sample events

### Step 6: Start Backend Server
```bash
# From server directory
npm run dev
# or
npm start
```

Backend will run on http://localhost:5000

### Step 7: Install Frontend Dependencies
Open a new terminal:
```bash
cd client
npm install
```

### Step 8: Start Frontend Development Server
```bash
# From client directory
npm run dev
```

Frontend will run on http://localhost:3000

## API Endpoints

### Authentication Routes
- POST `/api/auth/register` - Register new student
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (Protected)
- PUT `/api/auth/profile` - Update user profile (Protected)

### Event Routes
- GET `/api/events` - Get all events
- GET `/api/events/:id` - Get single event
- POST `/api/events` - Create event (Admin only)
- PUT `/api/events/:id` - Update event (Admin only)
- DELETE `/api/events/:id` - Delete event (Admin only)

### Registration Routes
- POST `/api/registrations` - Register for event (Student)
- GET `/api/registrations/my-registrations` - Get student's registrations
- GET `/api/registrations/all` - Get all registrations (Admin)
- GET `/api/registrations/event/:eventId` - Get event registrations (Admin)
- DELETE `/api/registrations/:eventId` - Cancel registration

### Admin Routes
- GET `/api/admin/students` - Get all students (Admin)
- GET `/api/admin/stats` - Get dashboard statistics (Admin)

## Default Login Credentials

### Admin Account
- Email: admin@college.com
- Password: admin123

### Student Account
- Email: student@college.com
- Password: student123

## Usage Guide

### For Students:
1. Register a new account or login
2. Browse available events on the home page
3. Click on any event to view details
4. Register for events you're interested in
5. View your registered events in the dashboard

### For Admins:
1. Login with admin credentials
2. Access admin dashboard to view statistics
3. Create new events with all details
4. Edit or delete existing events
5. View all students and registrations

## Database Models

### User Model
- name: String
- email: String (unique)
- password: String (hashed)
- role: String (student/admin)

### Event Model
- title: String
- description: String
- date: Date
- time: String
- venue: String
- category: String
- posterImage: String (optional)
- createdBy: ObjectId (ref: User)

### Registration Model
- studentId: ObjectId (ref: User)
- eventId: ObjectId (ref: Event)
- registrationDate: Date

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- For MongoDB Atlas, ensure IP is whitelisted

### Port Already in Use
- Change PORT in server/.env
- Update proxy in client/vite.config.js

### CORS Issues
- Backend has CORS enabled for all origins in development
- For production, configure specific origins

## Future Enhancements
- Email notifications for event registrations
- Event capacity limits
- Image upload for event posters
- Event search and filtering
- Student attendance tracking
- Event feedback system

## License
MIT

## Author
MERN Stack Developer
