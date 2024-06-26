# REST API Project

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Setup and Installation](#-setup-and-installation)
- [API Endpoints](#-api-endpoints)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 📜 Introduction

Welcome to the REST API project repository! This project is a straightforward and efficient example of a RESTful API, implemented with Node.js and Express. It is designed to demonstrate basic principles and operations of RESTful services, focusing on simplicity and scalability.

## ✨ Features

- **CRUD Operations:** Perform Create, Read, Update, and Delete operations on various resources.
- **Simple Architecture:** Clean and understandable code structure.
- **Error Handling:** Consistent and meaningful error responses.
- **Modular Design:** Components are neatly organized to facilitate maintenance and scalability.

## 🛠️ Technologies Used

- **Node.js:** JavaScript runtime for building fast and scalable network applications.
- **Express:** Web framework for building robust APIs and web applications.
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Mongoose:** ODM for MongoDB to manage data schemas.
- **dotenv:** Module for loading environment variables from a `.env` file.

## ⚙️ Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB instance (local or cloud)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prabej7/REST-API.git
   cd REST-API
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The API should now be running at `http://localhost:5000`.

## 🗃️ API Endpoints

### User Routes

- **POST /:** Create a new user.
- **GET /:apiKey:** To see if verified.
- **PUT /api/update/:apiKey/:username** To update the username.
- **DELETE /api/delete/:apiKey:** Delete a user.

## 🤝 Contributing

Contributions are welcome! Here are the steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature-name
   ```

3. **Commit your changes:**

   ```bash
   git commit -m 'Add new feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature-name
   ```

5. **Create a pull request.**

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

Feel free to reach out if you have any questions or need further information.

- **Email:** prabej@example.com
- **GitHub:** [prabej7](https://github.com/prabej7)

---

This README provides a clear and concise overview of your REST API project, highlighting the technologies used and guiding users on how to set up and use the API.
