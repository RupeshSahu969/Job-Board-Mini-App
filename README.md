# Job Board Mini-App

## Objective
Build a Job Board Mini-App that demonstrates backend and frontend skills, including UI/UX design.

## Scenario
CareerBoost needs a platform where users can:
1. Browse job listings
2. View job details
3. Submit applications

## Technical Scope

### Backend (React + Node.js + Express + MongoDB/)
- **GET /jobs** – List job postings
- **GET /jobs/:id** – Job details
- **POST /applications** – Submit an application

#### Tables/Collections:
1. **jobs**: `id`, `title`, `company`, `location`, `description`, `type`
2. **applications**: `id`, `job_id`, `name`, `email`, `resume_link`, `cover_letter`

#### Seed Data:
Include data for 3+ job listings.

# Local Setup & Database Initialization

## 1. Clone the Repository
Clone the repo and navigate to the project directory:
```bash
git clone https://github.com/<your-username>/job-board-mini-app.git
cd job-board-mini-app

npm install

MONGO_URI=mongodb://localhost:27017/job-board  
PORT=8080

npm run server

node seed.js

cd frontend

npm install

npm start

Backend: Visit http://localhost:8080/ 
server:https://jobpotalbackend-3.onrender.com
Frontend: Visit http://localhost:3000
Live: https://loquacious-cocada-736aea.netlify.app/
Github link: https://github.com/RupeshSahu969/Job-Board-Mini-App


