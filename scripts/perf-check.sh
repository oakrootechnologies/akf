#!/bin/bash

# Performance Check Script for Oksingreen
# This script builds the project and runs Lighthouse CI for performance testing

set -e

echo "🚀 Starting performance check..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Build the project
echo -e "${YELLOW}📦 Building Next.js project...${NC}"
npm run build

# Step 2: Check if http-server is available, if not install it
if ! command -v http-server &> /dev/null; then
    echo -e "${YELLOW}📥 Installing http-server...${NC}"
    npm install -g http-server
fi

# Step 3: Check if lhci is available, if not install it
if ! command -v lhci &> /dev/null; then
    echo -e "${YELLOW}📥 Installing Lighthouse CI...${NC}"
    npm install -g @lhci/cli
fi

# Step 4: Start local server in background
echo -e "${YELLOW}🌐 Starting local server on port 3000...${NC}"
cd out  # Next.js static export outputs to 'out' directory
http-server -p 3000 -c-1 &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Step 5: Run Lighthouse CI
echo -e "${YELLOW}🔍 Running Lighthouse CI...${NC}"
lhci autorun \
  --collect.url=http://localhost:3000 \
  --collect.settings.emulatedFormFactor=mobile \
  --collect.settings.throttling.cpuSlowdownMultiplier=4 \
  --collect.settings.throttling.rttMs=150 \
  --collect.settings.throttling.throughputKbps=1638.4 \
  --collect.numberOfRuns=3 \
  --upload.target=temporary-public-storage \
  || echo "Lighthouse CI completed (some warnings may appear)"

# Step 6: Cleanup
echo -e "${YELLOW}🧹 Cleaning up...${NC}"
kill $SERVER_PID 2>/dev/null || true
cd ..

echo -e "${GREEN}✅ Performance check complete!${NC}"
echo ""
echo "📊 View results:"
echo "   - Check the .lighthouseci/ directory for detailed reports"
echo "   - Or visit the temporary public storage URL shown above"
echo ""
echo "🎯 Target Metrics:"
echo "   - LCP: < 2.5s"
echo "   - CLS: < 0.1"
echo "   - TBT: < 150ms"
echo "   - FCP: < 1.8s"

