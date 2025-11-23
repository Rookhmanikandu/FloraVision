FloraVision — Frontend (Vite + React + Tailwind)

A modern plant shop landing/marketing site built with Vite, React and Tailwind CSS.
This repo contains the frontend implementation of the FloraVision UI (hero, cards, customer reviews, top plants sections, footer), optimized responsively while keeping the original images intact.

Status: In development / ready to run locally
Tech: Vite, React, Tailwind CSS, PostCSS

Table of contents

Live demo

Project setup (what this README describes)

Run locally

Build for production

Deploy (Vercel / Render)

Project structure

Assets / Images

How to update README on GitHub

Notes & troubleshooting

Contact

🚀 Tech Stack

React.js

Vite

Tailwind CSS

JavaScript (ES6)

Responsive Web Design

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

2️⃣ Navigate into the project folder
cd YOUR-REPO-NAME

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev  OR npx vite


Now open the URL shown in your terminal, usually:

http://localhost:5173/

🛠️ Build for Production
npm run build


Production-ready files will be generated inside:

/dist


You can deploy this folder on Vercel / Netlify / Render.

🌐 Live Demo URL

(Add your deployed Vercel/Netlify URL here)
Example:

https://floravision.vercel.app/

📁 Project Structure
your-project/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │    ├── images/          # all images
│   │    ├── icons/           # icons
│   │    └── logos/           # brand/logo files
│   │
│   ├── components/
│   │    ├── Hero/
│   │    │    └── Hero.jsx
│   │    ├── Reviews/
│   │    │    └── CustomerReview.jsx
│   │    ├── Products/
│   │    │    ├── OurTopPlants.jsx
│   │    │    └── OurBest.jsx
│   │    ├── Footer/
│   │    │    └── LastSection.jsx
│   │    └── Navbar/
│   │         └── Navbar.jsx
│   │
│   ├── pages/
│   │    └── HomePage.jsx
│   │
│   ├── styles/
│   │    └── globals.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js



Live demo

Add your deployed URL here (Vercel / Render).
https:[//your-deployment-url.example.com](https://flora-vision-five.vercel.app/)

🎯 Notes for Reviewers

This project is designed according to the assigned Figma Design.

Completely responsive for all screen sizes.

No backend is used.

Only frontend UI implementation.

👨‍💻 Developer

Your Name
Email: rookhmanikandu@gmail.com

GitHub: [https://github.com/YOUR-USERNAME](https://github.com/Rookhmanikandu/FloraVision)

