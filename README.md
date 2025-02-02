# 🚀 User Management System (MERN Stack) - Dockerized  

This project is a **full-stack user management system** built using **Next.js (Frontend), Node.js (Backend), and MongoDB (Database)**.  
It follows a **microservices-based architecture**, is **Dockerized**, and supports **scalability** using **Docker Compose**.

## 🎯 Features
✅ **User Management** - Add, Edit, View, and Delete Users  
✅ **Validation** - Frontend form validation (`yup`), Backend validation (`express-validator`)  
✅ **RESTful API** - Fully structured REST APIs  
✅ **Dockerized** - Runs seamlessly in containers  
✅ **Scalable & Portable** - Can be deployed on **AWS, DigitalOcean, Kubernetes, etc.**  
✅ **Next.js Frontend** - Interactive UI with Tailwind CSS  

---

## 🛠️ **Tech Stack**
| Component  | Technology |
|------------|-----------|
| **Frontend** | Next.js, Tailwind CSS, Axios |
| **Backend**  | Node.js, Express.js, Mongoose |
| **Database** | MongoDB |
| **Containerization** | Docker, Docker Compose |

---

## 🚀 **Project Structure**
/Project
│── /backend                    # Backend API (Express.js, MongoDB)
│   ├── models/                 # Mongoose Schemas (User, etc.)
│   ├── routes/                 # API Routes
│   ├── controllers/            # Business Logic
│   ├── middlewares/            #  Validation Middleware
│   ├── db/                     # Configuration Files (DB, env)
│   ├── Dockerfile              # Backend Docker Config
│   ├── package.json            # Dependencies & Scripts
│   ├── index.js                # Server Entry Point
|   │── .env                    # Environment Variables (Shared)
│
│── /frontend                          # Frontend (Next.js)
│   ├── components/ UserFrom           # Reusable Form
│   ├── app/                           # Next.js Pages (List, Detail, Add, Edit)
│   ├── service/                       # API Call Functions (Axios)
│   ├── Dockerfile                     # Frontend Docker Config
│   ├── package.json                   # Dependencies & Scripts
│
│── docker-compose.yml          # Docker Orchestration File
│── README.md                   # Project Documentation


## 🛠️ Installation
 
#  **backend 
    Install NPM packages      : npm install 
    start                     : npm start

# **frontend 
    Install NPM packages      : npm install 
    start                     : npm run dev 


#  🛠️ **API Endpoints**
 Method	| Endpoint	      |  Description
|-------|-----------------|
GET	    | /api/users	  | Fetch all users
GET	    | /api/users/:id  | Get a user by ID
POST	| /api/users	  | Create a new user
PUT	    | /api/users/:id  | Update an existing user
DELETE	| /api/users/:id  |	Delete a user


# 🚀 Contributors
Aniket Shrivastava - Full Stack Developer
