# 🚀 GETTING STARTED GUIDE

## Welcome to College Event Management Portal!

This is a complete, production-ready MERN stack application for managing college events.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- ✅ **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- ✅ **npm** (comes with Node.js) or **yarn**
- ✅ **Git** (optional) - [Download](https://git-scm.com/)

### Verify Installation
```bash
node --version    # Should show v14.x.x or higher
npm --version     # Should show 6.x.x or higher
mongod --version  # Should show v4.4.x or higher
```

---

## 🎯 Quick Start (5 Minutes)

### Step 1: Open Terminal in Project Folder
```bash
cd "College Event Management Portal"
```

### Step 2: Install All Dependencies
```bash
npm run install-all
```
⏱️ This will take 2-3 minutes

### Step 3: Start MongoDB
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Step 4: Seed Database with Sample Data
```bash
npm run seed
```
✅ Creates admin, students, and 5 sample events

### Step 5: Start Backend Server (Terminal 1)
```bash
npm run server
```
✅ Backend running on http://localhost:5000

### Step 6: Start Frontend Server (Terminal 2 - New Terminal)
```bash
npm run client
```
✅ Frontend running on http://localhost:3000

### Step 7: Open Browser
Navigate to: **http://localhost:3000**

---

## 🔐 Login & Test

### Login as Admin
1. Go to http://localhost:3000/login
2. Email: `admin@college.com`
3. Password: `admin123`
4. Click Login

**What you can do:**
- View dashboard with statistics
- Create new events
- Edit existing events
- Delete events
- View all students
- View all registrations

### Login as Student
1. Logout from admin
2. Go to http://localhost:3000/login
3. Email: `student@college.com`
4. Password: `student123`
5. Click Login

**What you can do:**
- View all events
- Register for events
- View your registrations
- Update your profile

---

## 📁 Project Overview

### What's Included?

#### Backend (Server)
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based authorization (Admin/Student)
- ✅ Complete CRUD operations

#### Frontend (Client)
- ✅ React 18 with Vite
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Responsive design
- ✅ User-friendly interface

#### Features
- ✅ Student registration & login
- ✅ Admin login
- ✅ Event management (Create, Read, Update, Delete)
- ✅ Event registration system
- ✅ Dashboard for students and admins
- ✅ Profile management

---

## 🗂️ Understanding the Structure

```
College Event Management Portal/
├── server/          # Backend (Node.js + Express + MongoDB)
│   ├── models/      # Database schemas
│   ├── routes/      # API endpoints
│   ├── controllers/ # Business logic
│   └── middleware/  # Authentication
│
└── client/          # Frontend (React + Vite)
    └── src/
        ├── components/  # Reusable UI components
        ├── pages/       # Page components
        ├── context/     # State management
        └── services/    # API calls
```

---

## 🎓 Learning Path

### For Beginners

#### Day 1: Understand the Setup
1. ✅ Install and run the project
2. ✅ Login as admin and student
3. ✅ Explore all features
4. ✅ Read README.md

#### Day 2: Explore Backend
1. 📖 Open `server/server.js` - See how Express server is set up
2. 📖 Open `server/models/User.js` - Understand user schema
3. 📖 Open `server/routes/authRoutes.js` - See API routes
4. 📖 Open `server/controllers/authController.js` - See business logic

#### Day 3: Explore Frontend
1. 📖 Open `client/src/App.jsx` - See routing setup
2. 📖 Open `client/src/pages/Login.jsx` - See form handling
3. 📖 Open `client/src/context/AuthContext.jsx` - See state management
4. 📖 Open `client/src/services/api.js` - See API calls

#### Day 4: Make Changes
1. 🔧 Add a new field to event form
2. 🔧 Change colors in the UI
3. 🔧 Add a new page
4. 🔧 Modify existing features

---

## 🔧 Common Tasks

### Add a New Event Category
1. Open `server/models/Event.js`
2. Add category to enum array
3. Open `client/src/pages/CreateEvent.jsx`
4. Add option to select dropdown

### Change Port Numbers
1. Backend: Edit `server/.env` → Change `PORT=5000`
2. Frontend: Edit `client/vite.config.js` → Change `port: 3000`

### Add a New Page
1. Create file in `client/src/pages/NewPage.jsx`
2. Add route in `client/src/App.jsx`
3. Add navigation link in `client/src/components/Navbar.jsx`

### Add a New API Endpoint
1. Add controller function in `server/controllers/`
2. Add route in `server/routes/`
3. Add API call in `client/src/services/api.js`

---

## 🐛 Troubleshooting

### Problem: MongoDB not connecting
**Solution:**
```bash
# Check if MongoDB is running
# Windows
sc query MongoDB

# Mac/Linux
sudo systemctl status mongod

# Start MongoDB if not running
net start MongoDB  # Windows
brew services start mongodb-community  # Mac
sudo systemctl start mongod  # Linux
```

### Problem: Port 5000 already in use
**Solution:**
1. Open `server/.env`
2. Change `PORT=5000` to `PORT=5001`
3. Restart backend server

### Problem: Port 3000 already in use
**Solution:**
- Vite will automatically suggest another port (like 3001)
- Press 'y' to use the suggested port

### Problem: "Cannot find module" errors
**Solution:**
```bash
# Delete node_modules and reinstall
cd server
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux
npm install

cd ../client
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux
npm install
```

### Problem: Login not working
**Solution:**
1. Make sure backend is running
2. Make sure database is seeded
3. Check browser console for errors
4. Verify credentials:
   - Admin: admin@college.com / admin123
   - Student: student@college.com / student123

### Problem: Events not showing
**Solution:**
1. Run seed script: `npm run seed`
2. Check MongoDB connection
3. Check browser console for errors

---

## 📚 Documentation Files

- **README.md** - Complete project documentation
- **SETUP_INSTRUCTIONS.md** - Quick setup guide
- **PROJECT_SUMMARY.md** - Project overview
- **PROJECT_STRUCTURE.md** - Detailed file structure
- **COMMANDS.md** - All commands in one place
- **GETTING_STARTED.md** - This file!

---

## 🎯 Next Steps

### Beginner Level
1. ✅ Run the project successfully
2. ✅ Understand the folder structure
3. ✅ Read through the code files
4. ✅ Make small UI changes

### Intermediate Level
1. 🔧 Add new features (e.g., event search)
2. 🔧 Modify existing features
3. 🔧 Add form validations
4. 🔧 Improve styling

### Advanced Level
1. 🚀 Add image upload for events
2. 🚀 Add email notifications
3. 🚀 Add event capacity limits
4. 🚀 Deploy to production

---

## 💡 Tips for Success

1. **Keep Both Servers Running**: Always run backend before frontend
2. **Check Terminals**: Watch for errors in both terminal windows
3. **Use Browser DevTools**: Press F12 to see console errors
4. **Read Error Messages**: They usually tell you what's wrong
5. **Test After Changes**: Always test after making changes
6. **Commit Often**: Use Git to save your progress
7. **Ask for Help**: Check documentation or search online

---

## 🌟 Features to Explore

### Student Features
- ✅ Browse all events on home page
- ✅ View event details
- ✅ Register for events
- ✅ View your registrations in dashboard
- ✅ Update your profile

### Admin Features
- ✅ View dashboard statistics
- ✅ Create new events with all details
- ✅ Edit existing events
- ✅ Delete events
- ✅ View all registered students
- ✅ View all event registrations

---

## 🎉 You're Ready!

Congratulations! You now have a fully functional College Event Management Portal.

### What to do now?
1. ✅ Explore all features
2. ✅ Read the code
3. ✅ Make small changes
4. ✅ Build something amazing!

### Need Help?
- 📖 Read the documentation files
- 🔍 Check error messages carefully
- 💻 Use browser DevTools (F12)
- 🌐 Search online for specific errors

---

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the documentation files
3. Check terminal and browser console for errors
4. Verify all prerequisites are installed
5. Make sure MongoDB is running

---

## 🚀 Happy Coding!

You're all set to start learning and building with the MERN stack!

Remember: Every expert was once a beginner. Take your time, read the code, and don't be afraid to experiment!

---

**Project Created By:** Senior Full Stack MERN Developer
**Tech Stack:** MongoDB, Express.js, React.js, Node.js
**Level:** Beginner-Friendly
**Status:** Production-Ready ✅
