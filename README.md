# API and Frontend Testing for Golden Movie Studio (server-gms)

This repository contains a test suite for the [Golden Movie Studio](https://github.com/EBAC-QE/golden-movie-studio) project, used to train EBAC QA students.

The project includes:
* A **Postman** API test collection for the [backend server (server-gms)](https://github.com/EBAC-QE/server-gms).
* End-to-end (E2E) tests with **Cypress** for the [frontend application (golden-movie-studio)](https://github.com/EBAC-QE/golden-movie-studio).

## 📝 Prerequisites

Before running the tests, make sure you have the following installed and configured:

* **Node.js**
* **Git**
* **Postman** (for the API tests)

---

## 🚀 API Tests (Postman)

### 1. Backend Server Setup (server-gms)

The API tests require the server to be running locally.

1.  Clone the server repository:
```bash
    git clone https://github.com/EBAC-QE/server-gms.git
```
2.  Navigate to the folder and install dependencies:
```bash
    cd server-gms
    npm install
```
3.  Start the server:
```bash
    npm start
```
    *The server will be running at `http://localhost:3000`.*

### 2. How to Use the Postman Collection

1.  Open **Postman**.
2.  Click **Import** in the top-left corner.
3.  Upload the `Golden Movie Studio.postman_collection.json` file from this repository.
4.  Once imported, the "Golden Movie Studio" collection will appear in your Collections tab.
5.  Run the tests individually, or click "Run collection" to run them all at once.

### ✅ API Tests Included

The collection covers the main API endpoints, testing both success and failure scenarios.

#### Users
* Fetch user by valid and invalid ID.
* Successful user registration.
* Registration validation with a duplicate email.
* Fetch user by valid and invalid email.

#### Movies
* Fetch movie by valid and invalid title.

---

## 🖥️ Frontend Tests (Cypress)

### 1. Frontend Environment Setup (golden-movie-studio)

To run the frontend tests, the application needs to be running locally.

1.  Clone the frontend repository into a **new folder**:
```bash
    git clone https://github.com/EBAC-QE/golden-movie-studio.git
```
2.  Navigate to the project directory and install dependencies:
```bash
    cd golden-movie-studio
    npm install
```
3.  Start the application:
```bash
    npm start
```
    *The frontend application will be accessible at `http://localhost:3000`.*

### 2. How to Run the Tests with Cypress

The tests are located in the `testesFrontend` folder of this repository.

1.  Navigate to the frontend tests folder:
```bash
    cd testesFrontend
```
2.  Install Cypress dependencies:
```bash
    npm install
```
3.  Open the Cypress dashboard to run the tests:
```bash
    npx cypress open
```
4.  In the Cypress window, click the test file you want to run.

### ✅ Frontend Tests Included

The automated tests cover the member registration functionality, ensuring the following validations:

* **Successful registration:** Verifies that a user is successfully registered when all required fields are filled in correctly.
* **Invalid email validation:** Ensures the system displays an error message when attempting to register with an invalid email format.
* **Required field validation:** Checks that the system displays an error message when attempting to submit an empty form.
* **Weak password validation:** Ensures the system blocks the use of passwords that don't meet security criteria.
* **Duplicate email validation:** Verifies that the system prevents registration of an email that already exists in the database.
