#!/bin/bash

# Setup script for planner backend
# Run: bash setup-backend.sh

set -e

echo "🚀 Planner Backend Setup"
echo "========================"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js from nodejs.org"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env
    echo "✅ Created .env (you need to add your API keys)"
    echo ""
    echo "📝 Edit .env and add:"
    echo "   ANTHROPIC_API_KEY=sk-ant-... (from console.anthropic.com)"
    echo ""
else
    echo "✅ .env file exists"
fi

echo ""
echo "🎯 Next steps:"
echo "1. Edit .env and add your ANTHROPIC_API_KEY"
echo "2. Run: npm start"
echo "3. Open planner at: https://lauren2329.github.io/second-brain/digital-planner-final.html"
echo ""
echo "Backend will run on: http://localhost:3001"
echo ""
