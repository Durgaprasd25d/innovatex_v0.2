### ✅ `frontend/README.md`

```markdown
# 🚀 Hackathon Frontend

This is the frontend for the Innovatex Hackathon registration platform. It is built using **React.js** with **Vite**, **Tailwind CSS**, and **React Router DOM** for routing. The application provides a landing page, registration form, dashboard, and more.

## 🌐 Live Preview

[🔗 Dev Station (Live Site)](https://devstation.netlify.app/)

## 🧰 Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- JSX Components
- Axios (for API calls)

## 🗂️ Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Preloader.jsx
│   ├── Hero.jsx
│   ├── CountdownTimer.jsx
│   ├── Timeline.jsx
│   ├── Tracks.jsx
│   ├── Prizes.jsx
│   ├── Sponsors.jsx
│   ├── FAQ.jsx
│   ├── Team.jsx
│   ├── Footer.jsx
│   ├── CommingSoon.jsx
│   ├── Guideline.jsx
│   └── admin/
│       └── Dashboard.jsx
├── App.jsx
└── main.jsx
```

## 📦 Installation

```bash
cd frontend
npm install
```

## 🚀 Run the app

```bash
npm run dev
```

## 🧪 Routes

- `/` – Home
- `/register` – Team Registration Form
- `/hakathon-dashboard` – Admin Dashboard
- `/timeline`, `/tracks`, `/prizes`, `/sponsors`, `/faq`, `/team` – Informative pages
- `/guideline`, `/commingsoon` – Extras

## 📄 API Base URL

Set your backend base URL in your API service file or environment:

```js
const BASE_URL = "http://localhost:8000/api";
```

---

### ✅ `backend/README.md`

```markdown
# 🛠️ Hackathon Backend

This is the backend server for Innovatex Hackathon registration. It handles team registration, file uploads via Cloudinary, and admin verification with EJS confirmation slips.

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary
- EJS (for rendering confirmation slips)
- dotenv
- morgan
- cors

## 📁 Project Structure

```
backend/
├── config/
│   ├── db.js
│   └── cloudinary.js
├── models/
│   └── teamModel.js
├── routes/
│   ├── teamRoutes.js
│   └── adminRoutes.js
├── views/
│   └── confirmation.ejs
├── public/
│   └── (static assets)
├── server.js
└── .env
```

## 📦 Installation

```bash
cd backend
npm install
```

## ⚙️ Environment Variables (`.env`)

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🚀 Run the server

```bash
npm run dev
```

## 🔐 API Routes

| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| POST   | `/api/team/register`    | Register a new team               |
| GET    | `/api/team/all`         | Get all registered teams          |
| GET    | `/api/team/:teamName`   | Get team by name                  |
| GET    | `/confirmation/:id`     | View confirmation slip (EJS)      |
| POST   | `/api/admin/verify`     | Admin: Verify team (add teamId)   |
| GET    | `/api/admin/teams`      | Admin: View all registered teams  |

## 📄 Notes

- `teamId` is generated sequentially (e.g., team1, team2...) during admin verification.
- File uploads are stored on Cloudinary under `hackathon_payments/`.

---

## 📬 Contact

For any questions or issues, reach out to **Durga Prasad Dalai** at:  
📧 [durgaprasaddalai10@gmail.com](mailto:durgaprasaddalai10@gmail.com)

```