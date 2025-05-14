# KenyaEcoTours 🐘🌍

**AI-Powered EcoTour Guide & Booking System for Kenya Wildlife Service (KWS)**

KenyaEcoTours is a smart information system designed to enhance wildlife conservation and tourism in Kenya. It provides an AI-powered chatbot that educates users about biodiversity, endangered species, and also assists tourists in planning and budgeting for visits to parks, booking tickets, and nearby restaurants.

---

## 🎯 Project Objectives

- Educate users about Kenya’s wildlife and national parks.
- Enable tourists to book park tickets and nearby restaurants.
- Suggest personalized trip itineraries based on user interests.
- Provide an interactive chatbot experience (GPT-3).
- Help generate revenue for wildlife conservation through eco-tourism.

---

## 🧠 Core Features

- 🤖 **AI Chatbot:** Interactive assistant for wildlife facts and trip planning.
- 🧾 **Dynamic Budgeting:** Estimate cost based on user selections.
- 🎟 **Bookings Automation:** Park & restaurant reservation system.
- 📲 **Mobile-first UI:** Accessible via web and WhatsApp integration.
- 📚 **Educational Content:** Learn about Kenya's flora and fauna.

---

## 🛠️ Tech Stack

| Layer        | Tools                             |
|--------------|------------------------------------|
| Frontend     | Vue.js + Vite                     |
| Backend      | Flask, Flask-CORS, Flask-JWT      |
| Database     | PostgreSQL, SQLAlchemy            |
| AI Chatbot   | OpenAI GPT-3 API                  |
| Auth         | JWT (JSON Web Token)              |
| Dev Tools    | Git, VS Code, Postman             |

---

## 📁 Project Structure

```
KenyaEcoTours/
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── venv/
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   └── axios.js
│   └── vite.config.js
├── .env
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/KenyaEcoTours.git
cd KenyaEcoTours
```

### 2. Backend Setup (Flask + PostgreSQL)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
flask --app app db init
flask --app app db migrate
flask --app app db upgrade
```

### 3. Frontend Setup (Vue + Vite)

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside `/backend` and define:

```env
FLASK_APP=app
FLASK_ENV=development
DATABASE_URL=postgresql://username:password@localhost/kenyaecotours
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET_KEY=your_jwt_secret
```

---

## 🌍 API Endpoints (Sample)

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | /auth/register        | User registration            |
| POST   | /auth/login           | User login                   |
| GET    | /chatbot/respond      | Get GPT-3 chatbot response   |
| POST   | /booking              | Create a booking             |
| GET    | /parks                | List all national parks      |
| GET    | /restaurants?park_id= | List restaurants by park     |

---

## 📅 MVP Timeline (2 Months)

| Milestone            | Date         |
|----------------------|--------------|
| System Design        | Week 1       |
| Backend API Setup    | Week 1–2     |
| Chatbot Integration  | Week 2–3     |
| Frontend UI Design   | Week 3–4     |
| Booking Module       | Week 4–5     |
| Budgeting Feature    | Week 5–6     |
| Testing & QA         | Week 6–7     |
| MVP Deployment       | Week 8       |

---

## 🤝 Contributing

We welcome contributions! Please open issues, fork the repo, and submit pull requests.

---

## 📜 License

This project is under the **MIT License** – feel free to use and adapt for non-commercial and conservation-oriented projects.

---

## 🌟 Acknowledgements

- Kenya Wildlife Service (KWS)
- OpenAI for GPT-3
- Vue & Flask Communities
-My sister Peninah Afande (Tax Officer @ KRA)

---

> Built with ❤️ to protect and promote Kenya’s rich biodiversity.