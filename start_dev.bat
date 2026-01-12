@echo off
echo Starting AgriKrishiFarms (Oakroot Commerce Engine)...
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:3000/api
echo Studio:   http://localhost:3000/studio
echo.
cd /d "%~dp0"
npm run dev
pause
