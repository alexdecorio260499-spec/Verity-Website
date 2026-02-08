# Setup Guide

This project requires Node.js to run. Since it was not found on your system, please follow these steps:

## 1. Install Node.js
Download and install the **LTS (Long Term Support)** version of Node.js from the official website:
[https://nodejs.org/](https://nodejs.org/)

After installation, verify it by opening a new terminal window and running:
```bash
node -v
npm -v
```

## 2. Install Dependencies
Navigate to the project directory and run:
```bash
cd "/Users/alex/Desktop/VERITY WEBSITE"
npm install
```

## 3. Configure Environment
A `.env.local` file has been created for you. Open it and add your Gemini API key:
```env
GEMINI_API_KEY=your_api_key_here
```

## 4. Run the Application
Start the development server:
```bash
npm run dev
```
