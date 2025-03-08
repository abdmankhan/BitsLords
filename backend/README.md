# Experience Sharing Platform - Backend

## 📌 Overview

This is the backend for the **Experience Sharing Platform**, where users can create, edit, and delete posts to share their experiences. The backend is built with **Node.js, Express, and MongoDB** and includes secure **user authentication, media uploads, likes, and a commenting system**.

## 🚀 Features

### 🔹 Core Features

1. **User Authentication** (JWT-based, secure authentication)
2. **Create, Read, Update, Delete (CRUD) Posts**
3. **Retrieve All Posts** (Home Page)
4. **Retrieve User's Own Posts** (My Posts Page)
5. **Media Uploads** (Users can upload images/videos with posts)
6. **Like System** (Users can like/unlike posts)
7. **Commenting System** (Users can comment on posts)

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JWT (JSON Web Tokens)
- **File Uploads**: Multer (for image/video uploads)
- **State Management**: Zustand (for frontend integration)

---

## 📂 Folder Structure

```
backend/
│── controllers/      # Business logic for authentication, posts, likes, comments
│── middleware/       # Authentication and file upload middleware
│── models/           # MongoDB Mongoose models (User, Post)
│── routes/           # Express routes
│── uploads/          # Storage for uploaded media files
│── .env              # Environment variables
│── server.js         # Main server entry point
```

---

## 🔐 Authentication

### **User Registration & Login**

- **Endpoint:** `POST /api/auth/signup` → Register a user
- **Endpoint:** `POST /api/auth/login` → Login a user & get JWT
- **JWT is stored in HTTP-only cookies for security**

---

## 📝 Post Management

### **Create a Post**

- **Endpoint:** `POST /api/posts`
- **Access:** Protected (Only logged-in users)
- **Supports media uploads (images/videos)**

### **Get All Posts** (Public)

- **Endpoint:** `GET /api/posts`
- **Access:** Public (Anyone can view all posts)

### **Get Logged-in User’s Posts**

- **Endpoint:** `GET /api/posts/myposts`
- **Access:** Protected (Only the logged-in user can see their own posts)

### **Edit a Post**

- **Endpoint:** `PUT /api/posts/:id`
- **Access:** Protected (Only the post owner can edit)

### **Delete a Post**

- **Endpoint:** `DELETE /api/posts/:id`
- **Access:** Protected (Only the post owner can delete)

---

## ❤️ Like System

- **Endpoint:** `PUT /api/posts/:id/like`
- **Access:** Protected (Only logged-in users can like/unlike a post)
- **Likes stored as an array of user IDs**

---

## 💬 Commenting System

- **Endpoint:** `POST /api/posts/:id/comment`
- **Access:** Protected (Only logged-in users can comment)
- **Comments stored as an array of objects (User, Text, Timestamp)**

---

## 📂 Media Uploads (Images/Videos)

- **File Upload Middleware:** `Multer`
- **Storage:** Uploaded files are saved in the `/uploads` folder
- **Supported Formats:** JPEG, PNG, MP4

### **Upload Media with a Post**

- **Endpoint:** `POST /api/posts` (Attach `media` in form-data)

## 🔍 API Testing

- Use **Postman** for testing API endpoints.
- Make sure to include a **JWT token** in the `Authorization` header for protected routes.
