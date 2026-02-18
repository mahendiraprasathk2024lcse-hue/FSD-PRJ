# 📡 API DOCUMENTATION

## Base URL

```
http://localhost:5000/api
```

---

## 🔐 Authentication

````markdown
# 📡 API DOCUMENTATION

## Base URL

```
http://localhost:5000/api
```

---

## 🔐 Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

---

## 📋 API Endpoints

### 1. Authentication Routes (`/api/auth`)

#### Register Student

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@college.com",
  "password": "password123"
}
```

**Response (201):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "name": "John Doe",
  "email": "john@college.com",
  "role": "student",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

#### Login User

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "admin@college.com",
  "password": "admin123"
}
```

**Response (200):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "name": "Admin User",
  "email": "admin@college.com",
  "role": "admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response (401):**

```json
{
  "message": "Invalid email or password"
}
```

---

#### Get User Profile

```http
GET /api/auth/profile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "name": "John Doe",
  "email": "john@college.com",
  "role": "student",
  "createdAt": "2026-01-15T10:30:00.000Z",
  "updatedAt": "2026-01-15T10:30:00.000Z"
}
```

---

#### Update User Profile

```http
PUT /api/auth/profile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "John Updated",
  "email": "john.updated@college.com",
  "password": "newpassword123"
}
```

**Response (200):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "name": "John Updated",
  "email": "john.updated@college.com",
  "role": "student",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 2. Event Routes (`/api/events`)

#### Get All Events

```http
GET /api/events
```

**Response (200):**

```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "title": "Tech Fest 2026",
    "description": "Annual technical festival...",
    "date": "2026-03-15T00:00:00.000Z",
    "time": "09:00 AM",
    "venue": "Main Auditorium",
    "category": "Technical",
    "posterImage": "",
    "createdBy": {
      "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
      "name": "Admin User",
      "email": "admin@college.com"
    },
    "createdAt": "2026-01-15T10:30:00.000Z",
    "updatedAt": "2026-01-15T10:30:00.000Z"
  }
]
```

---

#### Get Single Event

```http
GET /api/events/:id
```

**Response (200):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "title": "Tech Fest 2026",
  "description": "Annual technical festival...",
  "date": "2026-03-15T00:00:00.000Z",
  "time": "09:00 AM",
  "venue": "Main Auditorium",
  "category": "Technical",
  "posterImage": "",
  "createdBy": {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "Admin User",
    "email": "admin@college.com"
  }
}
```

**Error Response (404):**

```json
{
  "message": "Event not found"
}
```

---

#### Create Event (Admin Only)

```http
POST /api/events
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Request Body:**

```json
{
  "title": "New Event",
  "description": "Event description here",
  "date": "2026-04-01",
  "time": "10:00 AM",
  "venue": "Computer Lab",
  "category": "Workshop",
  "posterImage": "https://example.com/image.jpg"
}
```

**Response (201):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "title": "New Event",
  "description": "Event description here",
  "date": "2026-04-01T00:00:00.000Z",
  "time": "10:00 AM",
  "venue": "Computer Lab",
  "category": "Workshop",
  "posterImage": "https://example.com/image.jpg",
  "createdBy": "64f5a1b2c3d4e5f6g7h8i9j0",
  "createdAt": "2026-01-15T10:30:00.000Z",
  "updatedAt": "2026-01-15T10:30:00.000Z"
}
```

---

#### Update Event (Admin Only)

```http
PUT /api/events/:id
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Request Body:**

```json
{
  "title": "Updated Event Title",
  "description": "Updated description",
  "date": "2026-04-02",
  "time": "11:00 AM",
  "venue": "New Venue",
  "category": "Seminar"
}
```

**Response (200):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "title": "Updated Event Title",
  "description": "Updated description",
  "date": "2026-04-02T00:00:00.000Z",
  "time": "11:00 AM",
  "venue": "New Venue",
  "category": "Seminar",
  "createdBy": "64f5a1b2c3d4e5f6g7h8i9j0",
  "updatedAt": "2026-01-15T11:00:00.000Z"
}
```

---

#### Delete Event (Admin Only)

```http
DELETE /api/events/:id
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Response (200):**

```json
{
  "message": "Event deleted successfully"
}
```

---

### 3. Registration Routes (`/api/registrations`)

#### Register for Event (Student)

```http
POST /api/registrations
```

**Headers:**

```
Authorization: Bearer <student_token>
```

**Request Body:**

```json
{
  "eventId": "64f5a1b2c3d4e5f6g7h8i9j0"
}
```

**Response (201):**

```json
{
  "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "studentId": "64f5a1b2c3d4e5f6g7h8i9j0",
  "eventId": "64f5a1b2c3d4e5f6g7h8i9j0",
  "registrationDate": "2026-01-15T10:30:00.000Z",
  "createdAt": "2026-01-15T10:30:00.000Z",
  "updatedAt": "2026-01-15T10:30:00.000Z"
}
```

**Error Response (400):**

```json
{
  "message": "Already registered for this event"
}
```

---

#### Get My Registrations (Student)

```http
GET /api/registrations/my-registrations
```

**Headers:**

```
Authorization: Bearer <student_token>
```

**Response (200):**

```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "studentId": "64f5a1b2c3d4e5f6g7h8i9j0",
    "eventId": {
      "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
      "title": "Tech Fest 2026",
      "description": "Annual technical festival...",
      "date": "2026-03-15T00:00:00.000Z",
      "time": "09:00 AM",
      "venue": "Main Auditorium",
      "category": "Technical"
    },
    "registrationDate": "2026-01-15T10:30:00.000Z"
  }
]
```

---

#### Get All Registrations (Admin)

```http
GET /api/registrations/all
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Response (200):**

```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "studentId": {
      "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
      "name": "John Doe",
      "email": "john@college.com"
    },
    "eventId": {
      "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
      "title": "Tech Fest 2026",
      "date": "2026-03-15T00:00:00.000Z",
      "venue": "Main Auditorium"
    },
    "registrationDate": "2026-01-15T10:30:00.000Z"
  }
]
```

---

#### Get Event Registrations (Admin)

```http
GET /api/registrations/event/:eventId
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Response (200):**

```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "studentId": {
      "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
      "name": "John Doe",
      "email": "john@college.com"
    },
    "eventId": "64f5a1b2c3d4e5f6g7h8i9j0",
    "registrationDate": "2026-01-15T10:30:00.000Z"
  }
]
```

---

#### Cancel Registration (Student)

```http
DELETE /api/registrations/:eventId
```

**Headers:**

```
Authorization: Bearer <student_token>
```

**Response (200):**

```json
{
  "message": "Registration cancelled successfully"
}
```

---

### 4. Admin Routes (`/api/admin`)

#### Get All Students (Admin)

```http
GET /api/admin/students
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Response (200):**

```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "John Doe",
    "email": "john@college.com",
    "role": "student",
    "createdAt": "2026-01-15T10:30:00.000Z",
    "updatedAt": "2026-01-15T10:30:00.000Z"
  }
]
```

---

#### Get Dashboard Stats (Admin)

```http
GET /api/admin/stats
```

**Headers:**

```
Authorization: Bearer <admin_token>
```

**Response (200):**

```json
{
  "totalStudents": 25,
  "totalEvents": 10,
  "totalRegistrations": 75
}
```

---

## 🔒 Authorization

### Public Routes (No Auth Required)

- GET `/api/events` - Get all events
- GET `/api/events/:id` - Get single event
- POST `/api/auth/register` - Register student
- POST `/api/auth/login` - Login user

### Protected Routes (Auth Required)

- GET `/api/auth/profile` - Any authenticated user
- PUT `/api/auth/profile` - Any authenticated user
- POST `/api/registrations` - Student only
- GET `/api/registrations/my-registrations` - Student only
- DELETE `/api/registrations/:eventId` - Student only

### Admin Only Routes

- POST `/api/events` - Create event
- PUT `/api/events/:id` - Update event
- DELETE `/api/events/:id` - Delete event
- GET `/api/registrations/all` - All registrations
- GET `/api/registrations/event/:eventId` - Event registrations
- GET `/api/admin/students` - All students
- GET `/api/admin/stats` - Dashboard stats

---

## 📊 Event Categories

Valid event categories:

- `Technical`
- `Cultural`
- `Sports`
- `Workshop`
- `Seminar`
- `Other`

---

## ⚠️ Error Responses

### 400 Bad Request

```json
{
  "message": "User already exists"
}
```

### 401 Unauthorized

```json
{
  "message": "Not authorized, no token"
}
```

### 403 Forbidden

```json
{
  "message": "Access denied. Admin only."
}
```

### 404 Not Found

```json
{
  "message": "Event not found"
}
```

### 500 Internal Server Error

```json
{
  "message": "Something went wrong!"
}
```

---

## 🧪 Testing with cURL

### Register a Student

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@college.com\",\"password\":\"test123\"}"
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"admin@college.com\",\"password\":\"admin123\"}"
```

### Get All Events

```bash
curl http://localhost:5000/api/events
```

### Create Event (Admin)

```bash
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -d "{\"title\":\"New Event\",\"description\":\"Description\",\"date\":\"2026-04-01\",\"time\":\"10:00 AM\",\"venue\":\"Hall\",\"category\":\"Technical\"}"
```

---

## 📱 Testing with Postman

1. Import the base URL: `http://localhost:5000/api`
2. For protected routes, add header:
   - Key: `Authorization`
   - Value: `Bearer YOUR_TOKEN`
3. Set Content-Type to `application/json`
4. Add request body as raw JSON

---

## 🔑 JWT Token Structure

```json
{
  "id": "64f5a1b2c3d4e5f6g7h8i9j0",
  "iat": 1674648000,
  "exp": 1677240000
}
```

Token expires in 30 days.

---

## 📝 Notes

- All dates should be in ISO 8601 format
- Passwords are automatically hashed before storage
- Duplicate registrations are prevented by unique index
- Admin role must be set manually in database
- All timestamps are in UTC

**API Version:** 1.0.0  
**Last Updated:** 2026  
**Base URL:** http://localhost:5000/api
````
