# 📁 PROJECT STRUCTURE

```
College Event Management Portal/
│
├── 📄 README.md                      # Complete project documentation
├── 📄 SETUP_INSTRUCTIONS.md          # Quick setup guide
├── 📄 PROJECT_SUMMARY.md             # Project overview
├── 📄 COMMANDS.md                    # Commands cheat sheet
├── 📄 .gitignore                     # Git ignore rules
├── 📄 package.json                   # Root package file with scripts
│
├── 📂 server/                        # BACKEND
│   │
│   ├── 📄 server.js                  # Express server entry point
│   ├── 📄 package.json               # Backend dependencies
│   ├── 📄 .env                       # Environment variables
│   ├── 📄 seed.js                    # Database seeding script
│   │
│   ├── 📂 config/
│   │   └── 📄 db.js                  # MongoDB connection setup
│   │
│   ├── 📂 models/                    # Mongoose Schemas
│   │   ├── 📄 User.js                # User model (Student/Admin)
│   │   ├── 📄 Event.js               # Event model
│   │   └── 📄 Registration.js        # Registration model
│   │
│   ├── 📂 controllers/               # Business Logic
│   │   ├── 📄 authController.js      # Authentication logic
│   │   ├── 📄 eventController.js     # Event CRUD operations
│   │   ├── 📄 registrationController.js  # Registration logic
│   │   └── 📄 adminController.js     # Admin operations
│   │
│   ├── 📂 routes/                    # API Routes
│   │   ├── 📄 authRoutes.js          # /api/auth/*
│   │   ├── 📄 eventRoutes.js         # /api/events/*
│   │   ├── 📄 registrationRoutes.js  # /api/registrations/*
│   │   └── 📄 adminRoutes.js         # /api/admin/*
│   │
│   └── 📂 middleware/
│       └── 📄 auth.js                # JWT authentication & authorization
│
└── 📂 client/                        # FRONTEND
    │
    ├── 📄 index.html                 # HTML template
    ├── 📄 package.json               # Frontend dependencies
    ├── 📄 vite.config.js             # Vite configuration
    │
    ├── 📂 public/                    # Static assets
    │
    └── 📂 src/
        │
        ├── 📄 main.jsx               # React entry point
        ├── 📄 App.jsx                # Main app component with routes
        ├── 📄 index.css              # Global styles
        │
        ├── 📂 components/            # Reusable Components
        │   ├── 📄 Navbar.jsx         # Navigation bar
        │   ├── 📄 EventCard.jsx      # Event display card
        │   └── 📄 PrivateRoute.jsx   # Protected route wrapper
        │
        ├── 📂 pages/                 # Page Components
        │   ├── 📄 Home.jsx           # Landing page (all events)
        │   ├── 📄 Login.jsx          # Login page
        │   ├── 📄 Register.jsx       # Student registration
        │   ├── 📄 EventDetails.jsx   # Event details & registration
        │   ├── 📄 StudentDashboard.jsx   # Student dashboard
        │   ├── 📄 AdminDashboard.jsx     # Admin dashboard
        │   ├── 📄 CreateEvent.jsx    # Create new event (Admin)
        │   └── 📄 EditEvent.jsx      # Edit/delete event (Admin)
        │
        ├── 📂 context/               # State Management
        │   └── 📄 AuthContext.jsx    # Authentication context
        │
        └── 📂 services/              # API Services
            └── 📄 api.js             # Axios API calls
```

## 🎯 File Purposes

### Backend Files

#### Core Files
- **server.js**: Express server setup, middleware, routes
- **package.json**: Dependencies (express, mongoose, jwt, bcrypt, etc.)
- **.env**: Environment variables (PORT, MONGODB_URI, JWT_SECRET)
- **seed.js**: Creates sample data (admin, students, events)

#### Models (Database Schemas)
- **User.js**: User schema with password hashing
- **Event.js**: Event schema with validation
- **Registration.js**: Registration schema with unique constraint

#### Controllers (Business Logic)
- **authController.js**: Register, login, profile operations
- **eventController.js**: CRUD operations for events
- **registrationController.js**: Event registration logic
- **adminController.js**: Admin-specific operations

#### Routes (API Endpoints)
- **authRoutes.js**: Authentication endpoints
- **eventRoutes.js**: Event management endpoints
- **registrationRoutes.js**: Registration endpoints
- **adminRoutes.js**: Admin endpoints

#### Middleware & Config
- **auth.js**: JWT verification, role-based access
- **db.js**: MongoDB connection

### Frontend Files

#### Core Files
- **index.html**: HTML template
- **main.jsx**: React app initialization
- **App.jsx**: Main component with routing
- **index.css**: Global CSS styles
- **vite.config.js**: Vite dev server config

#### Components (Reusable)
- **Navbar.jsx**: Navigation with auth state
- **EventCard.jsx**: Event display card
- **PrivateRoute.jsx**: Protected route component

#### Pages (Routes)
- **Home.jsx**: Public landing page
- **Login.jsx**: User login form
- **Register.jsx**: Student registration form
- **EventDetails.jsx**: Event details with registration
- **StudentDashboard.jsx**: Student's events & registrations
- **AdminDashboard.jsx**: Admin panel with stats
- **CreateEvent.jsx**: Create event form
- **EditEvent.jsx**: Edit/delete event form

#### Context & Services
- **AuthContext.jsx**: Global auth state
- **api.js**: Centralized API calls

## 🔄 Data Flow

### Authentication Flow
```
User → Login.jsx → api.js → authRoutes.js → authController.js → User.js → MongoDB
                                                    ↓
                                                JWT Token
                                                    ↓
                                            AuthContext.jsx
                                                    ↓
                                            localStorage
```

### Event Registration Flow
```
Student → EventDetails.jsx → api.js → registrationRoutes.js → registrationController.js
                                                    ↓
                                            Registration.js → MongoDB
```

### Admin Event Creation Flow
```
Admin → CreateEvent.jsx → api.js → eventRoutes.js → eventController.js
                                                    ↓
                                            Event.js → MongoDB
```

## 📊 Database Collections

### users
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  role: "student" | "admin",
  createdAt: Date,
  updatedAt: Date
}
```

### events
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date: Date,
  time: String,
  venue: String,
  category: String,
  posterImage: String,
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### registrations
```javascript
{
  _id: ObjectId,
  studentId: ObjectId (ref: User),
  eventId: ObjectId (ref: Event),
  registrationDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🌐 API Routes Structure

```
/api
├── /auth
│   ├── POST   /register          # Register student
│   ├── POST   /login             # Login user
│   ├── GET    /profile           # Get profile (Protected)
│   └── PUT    /profile           # Update profile (Protected)
│
├── /events
│   ├── GET    /                  # Get all events
│   ├── GET    /:id               # Get single event
│   ├── POST   /                  # Create event (Admin)
│   ├── PUT    /:id               # Update event (Admin)
│   └── DELETE /:id               # Delete event (Admin)
│
├── /registrations
│   ├── POST   /                  # Register for event (Student)
│   ├── GET    /my-registrations  # Get student's registrations
│   ├── GET    /all               # Get all registrations (Admin)
│   ├── GET    /event/:eventId    # Get event registrations (Admin)
│   └── DELETE /:eventId          # Cancel registration
│
└── /admin
    ├── GET    /students          # Get all students (Admin)
    └── GET    /stats             # Get dashboard stats (Admin)
```

## 🎨 Frontend Routes

```
/                           → Home.jsx (Public)
/login                      → Login.jsx (Public)
/register                   → Register.jsx (Public)
/events/:id                 → EventDetails.jsx (Public)
/student/dashboard          → StudentDashboard.jsx (Protected - Student)
/admin/dashboard            → AdminDashboard.jsx (Protected - Admin)
/admin/create-event         → CreateEvent.jsx (Protected - Admin)
/admin/edit-event/:id       → EditEvent.jsx (Protected - Admin)
```

## 🔐 Authentication & Authorization

### Public Routes
- Home page
- Event details
- Login
- Register

### Protected Routes (Student)
- Student dashboard
- My registrations
- Profile update

### Protected Routes (Admin)
- Admin dashboard
- Create event
- Edit event
- Delete event
- View all students
- View all registrations

## 📦 Dependencies Overview

### Backend
```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "bcryptjs": "Password hashing",
  "jsonwebtoken": "JWT authentication",
  "dotenv": "Environment variables",
  "cors": "Cross-origin requests",
  "multer": "File uploads",
  "nodemon": "Auto-restart (dev)"
}
```

### Frontend
```json
{
  "react": "UI library",
  "react-dom": "React DOM rendering",
  "react-router-dom": "Routing",
  "axios": "HTTP client",
  "vite": "Build tool"
}
```

## 🚀 Deployment Ready

- Environment variables configured
- CORS enabled
- Error handling implemented
- Input validation
- Secure password storage
- Token-based authentication
- Clean code structure
- Documentation complete
