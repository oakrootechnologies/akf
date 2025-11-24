# Performance Check Script for Oksingreen (Windows PowerShell)
# This script builds the project and runs Lighthouse CI for performance testing

Write-Host "🚀 Starting performance check..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "📦 Building Next.js project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Step 2: Check if http-server is available, if not install it
if (-not (Get-Command http-server -ErrorAction SilentlyContinue)) {
    Write-Host "📥 Installing http-server..." -ForegroundColor Yellow
    npm install -g http-server
}

# Step 3: Check if lhci is available, if not install it
if (-not (Get-Command lhci -ErrorAction SilentlyContinue)) {
    Write-Host "📥 Installing Lighthouse CI..." -ForegroundColor Yellow
    npm install -g @lhci/cli
}

# Step 4: Start local server in background
Write-Host "🌐 Starting local server on port 3000..." -ForegroundColor Yellow
Set-Location out  # Next.js static export outputs to 'out' directory

$serverJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    http-server -p 3000 -c-1
}

# Wait for server to start
Start-Sleep -Seconds 3

# Step 5: Run Lighthouse CI
Write-Host "🔍 Running Lighthouse CI..." -ForegroundColor Yellow
lhci autorun `
  --collect.url=http://localhost:3000 `
  --collect.settings.emulatedFormFactor=mobile `
  --collect.settings.throttling.cpuSlowdownMultiplier=4 `
  --collect.settings.throttling.rttMs=150 `
  --collect.settings.throttling.throughputKbps=1638.4 `
  --collect.numberOfRuns=3 `
  --upload.target=temporary-public-storage

# Step 6: Cleanup
Write-Host "🧹 Cleaning up..." -ForegroundColor Yellow
Stop-Job $serverJob -ErrorAction SilentlyContinue
Remove-Job $serverJob -ErrorAction SilentlyContinue
Set-Location ..

Write-Host "✅ Performance check complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 View results:" -ForegroundColor Cyan
Write-Host "   - Check the .lighthouseci/ directory for detailed reports"
Write-Host "   - Or visit the temporary public storage URL shown above"
Write-Host ""
Write-Host "🎯 Target Metrics:" -ForegroundColor Cyan
Write-Host "   - LCP: < 2.5s"
Write-Host "   - CLS: < 0.1"
Write-Host "   - TBT: < 150ms"
Write-Host "   - FCP: < 1.8s"

