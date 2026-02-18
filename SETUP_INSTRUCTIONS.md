# QUICK SETUP INSTRUCTIONS

## Prerequisites Check
✓ Node.js installed (v14+)
✓ MongoDB installed and running
✓ npm or yarn installed

## Installation Steps

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Start MongoDB
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

### 3. Seed Database with Sample Data
```bash
# From server directory
node seed.js
```

### 4. Start Backend Server
```bash
# From server directory
npm run dev
```
✓ Backend running on http://localhost:5000

### 5. Install Frontend Dependencies (New Terminal)
```bash
cd client
npm install
```

### 6. Start Frontend Server
```bash
# From client directory
npm run dev
```
✓ Frontend running on http://localhost:3000

## Test the Application

### Login as Admin:
- Email: admin@college.com
- Password: admin123
- Access: http://localhost:3000/login

### Login as Student:
- Email: student@college.com
- Password: student123
- Access: http://localhost:3000/login

## Verify Everything Works

1. ✓ Backend API responds at http://localhost:5000/api
2. ✓ Frontend loads at http://localhost:3000
3. ✓ Can login with demo credentials
4. ✓ Admin can create/edit/delete events
5. ✓ Students can view and register for events

## Common Issues

### Issue: MongoDB not connecting
Solution: Check if MongoDB service is running

### Issue: Port 5000 already in use
Solution: Change PORT in server/.env file

### Issue: Port 3000 already in use
Solution: Vite will automatically suggest another port

### Issue: Cannot find module errors
Solution: Delete node_modules and package-lock.json, then run npm install again

## Project Structure Overview

```
server/
  ├── models/          # Database schemas
  ├── routes/          # API endpoints
  ├── controllers/     # Business logic
  ├── middleware/      # Auth middleware
  ├── config/          # DB configuration
  └── server.js        # Entry point

client/
  ├── src/
  │   ├── components/  # Reusable UI components
  │   ├── pages/       # Page components
  │   ├── context/     # State management
  │   ├── services/    # API calls
  │   └── App.jsx      # Main component
  └── index.html       # HTML template
```

## Next Steps

1. Explore the admin dashboard
2. Create new events
3. Register students for events
4. Customize the styling
5. Add more features as needed

## Support

For issues or questions:
- Check README.md for detailed documentation
- Review API endpoints in server/routes/
- Check browser console for frontend errors
- Check terminal for backend errors
