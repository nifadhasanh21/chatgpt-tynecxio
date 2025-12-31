# TynecXio — Official Website

Premium agency website for **TynecXio** (Design • Development • Growth).  
Built with **Vite + React** and deployed on **Vercel**, including a serverless contact API.

## ✨ Features
- Premium landing page UI (animations, gradient blobs, micro-interactions)
- Fully responsive layout (mobile / tablet / desktop)
- Contact form with email delivery (Resend + Vercel Serverless Function)
- Fast build + optimized assets (Vite)

## 🧱 Tech Stack
- React + Vite
- Framer Motion (animations)
- Vercel Serverless Functions (`/api`)
- Resend (email)

## 🚀 Getting Started (Local)
### 1) Install
```bash
cd client
npm install
2) Run
npm run dev


Open: http://localhost:5173

📩 Email / Contact Form Setup (Resend)

Add these environment variables in Vercel (Project → Settings → Environment Variables):

RESEND_API_KEY = your key

CONTACT_TO_EMAIL = your receiving email

CONTACT_FROM_EMAIL = your verified sender email (Resend)

🌍 Deployment

This project is deployed on Vercel.
