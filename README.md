# 📊 Dashboard App

A **Next.js** application with user authentication and a dashboard displaying a data table with filtering and sorting.

---

## 🚀 Objective

Build a modern **Next.js** dashboard application with user authentication and session management, featuring a user-friendly data table.

---

## 📌 Features & Pages

### **1️⃣ Authentication (Login/Signup) Page**
- Users can **sign up** or **log in** using **email & password**.
- Input fields are validated, and error messages are displayed.
- **User session details** are stored in local storage.
- After login, users are redirected to the **Details Page**.

---

### **2️⃣ Dashboard (After Login)**
- **Navbar** with:  
  - **Logo** on the left.  
  - **User icon** on the right, with a dropdown menu:  
    - Show logged-in user details (**name & email**).  
    - **Logout** (clears local storage).  
    - **Delete Account** (removes user data from local storage).  
- **Sidebar** with navigation, highlighting the current page (**Details**).

---

### **3️⃣ Details Page (Data Table)**
- Displays user data fetched from a **third-party mock API (DummyJSON API)**.
- Includes:  
  ✅ **Sorting** (ascending/descending).  
  ✅ **Search filtering** (filter users based on input).  
  ✅ **Pagination** (display limited rows per page).  

---

## 🛠 Tech Stack & Tools

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS** (for styling)
- **Context API (or Redux)** for state management
- **Local Storage** for session management
- **DummyJSON API** (for fetching users data)

---


---

## 📦 Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/smiriti911/Dashboard-Nextjs.git
cd Dashboard-Nextjs
```
2️⃣ Install dependencies
```sh
npm install  # or yarn install or pnpm install
```
3️⃣ Run the development server
```sh
npm run dev  # or yarn dev or pnpm dev
```
### The app will run at http://localhost:3000

### 🔗 DummyJSON API for Users

This app fetches user data from DummyJSON API.

