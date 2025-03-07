#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js app
echo "Building Next.js app..."
npm run build

echo "Build completed successfully!" 