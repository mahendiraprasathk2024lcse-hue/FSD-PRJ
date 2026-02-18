@echo off
echo Starting College Event Management Portal...
echo.

cd server
start "BACKEND SERVER - Port 5000" cmd /k "node server.js"
echo Backend server starting on http://localhost:5000
echo.

timeout /t 3 /nobreak >nul

cd ..\client
start "FRONTEND SERVER - Port 3000" cmd /k "npm run dev"
echo Frontend server starting on http://localhost:3000
echo.
echo.
echo ========================================
echo DEMO CREDENTIALS:
echo ========================================
echo Admin:   admin@college.com / admin123
echo Student: student@college.com / student123
echo ========================================
echo.
echo Open your browser and go to: http://localhost:3000
echo.
pause
