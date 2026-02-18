# COMMANDS CHEAT SHEET

## 🚀 Quick Start (Recommended)

### Step 1: Install All Dependencies
```bash
npm run install-all
```

### Step 2: Seed Database
```bash
npm run seed
```

### Step 3: Run Backend (Terminal 1)
```bash
npm run server
```

### Step 4: Run Frontend (Terminal 2)
```bash
npm run client
```

---

## 📦 Installation Commands

### Install Backend Dependencies Only
```bash
cd server
npm install
```

### Install Frontend Dependencies Only
```bash
cd client
npm install
```

### Install Both (from root)
```bash
npm run install-all
```

---

## 🏃 Running the Application

### Start Backend Server
```bash
# From root directory
npm run server

# OR from server directory
cd server
npm run dev
# or
npm start
```

### Start Frontend Server
```bash
# From root directory
npm run client

# OR from client directory
cd client
npm run dev
```

---

## 🗄️ Database Commands

### Start MongoDB (Windows)
```bash
net start MongoDB
```

### Start MongoDB (Mac/Linux)
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### Seed Database with Sample Data
```bash
# From root directory
npm run seed

# OR from server directory
cd server
node seed.js
```

### Access MongoDB Shell
```bash
mongosh
use college_event_management
db.users.find()
db.events.find()
db.registrations.find()
```

---

## 🔧 Development Commands

### Backend Development Mode (with auto-restart)
```bash
cd server
npm run dev
```

### Frontend Development Mode (with hot reload)
```bash
cd client
npm run dev
```

### Build Frontend for Production
```bash
cd client
npm run build
```

---

## 🧹 Cleanup Commands

### Remove node_modules (if needed)
```bash
# Backend
cd server
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux

# Frontend
cd client
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux
```

### Clear MongoDB Database
```bash
mongosh
use college_event_management
db.dropDatabase()
```

---

## 🔍 Testing Commands

### Test Backend API
```bash
# Check if server is running
curl http://localhost:5000/api

# Test login endpoint
curl -X POST http://localhost:5000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"admin@college.com\",\"password\":\"admin123\"}"
```

### Check Running Ports
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :5000
lsof -i :3000
```

---

## 📝 Git Commands (Optional)

### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: College Event Management Portal"
```

### Create .gitignore (already created)
```bash
# File already exists at root level
```

---

## 🌐 Access URLs

### Frontend Application
```
http://localhost:3000
```

### Backend API
```
http://localhost:5000/api
```

### API Endpoints
```
http://localhost:5000/api/auth/login
http://localhost:5000/api/events
http://localhost:5000/api/registrations
http://localhost:5000/api/admin/stats
```

---

## 🔐 Demo Login Credentials

### Admin Login
```
Email: admin@college.com
Password: admin123
```

### Student Login
```
Email: student@college.com
Password: student123
```

---

## 🐛 Troubleshooting Commands

### Check Node Version
```bash
node --version
# Should be v14 or higher
```

### Check npm Version
```bash
npm --version
```

### Check MongoDB Status
```bash
# Windows
sc query MongoDB

# Mac/Linux
sudo systemctl status mongod
```

### Kill Process on Port (if port is busy)
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Clear npm Cache
```bash
npm cache clean --force
```

---

## 📊 Useful MongoDB Queries

### View All Users
```javascript
db.users.find().pretty()
```

### View All Events
```javascript
db.events.find().pretty()
```

### View All Registrations
```javascript
db.registrations.find().pretty()
```

### Count Documents
```javascript
db.users.countDocuments()
db.events.countDocuments()
db.registrations.countDocuments()
```

### Find Admin Users
```javascript
db.users.find({ role: "admin" })
```

### Find Events by Category
```javascript
db.events.find({ category: "Technical" })
```

---

## 💡 Pro Tips

1. Always run backend before frontend
2. Keep both terminals open while developing
3. Use `npm run dev` for auto-restart during development
4. Check browser console for frontend errors
5. Check terminal for backend errors
6. Seed database after clearing it
7. Use Postman or Thunder Client for API testing

---

## 📞 Need Help?

- Check README.md for detailed documentation
- Check SETUP_INSTRUCTIONS.md for setup guide
- Check PROJECT_SUMMARY.md for project overview
- Review error messages in terminal/console
- Ensure MongoDB is running
- Verify all dependencies are installed
