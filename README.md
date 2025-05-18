# ☕ Cafficionado

**Track. Measure. Reflect.**  
*Cafficionado* is a caffeine tracking app built for coffee lovers who want to quantify their consumption, visualize its effect on their body, and manage the cost of their habit—all in one responsive web interface.

![image](https://github.com/user-attachments/assets/d5296f44-27e9-4bcc-8530-d10c456a5e20)


---

## 🚀 Features

✅ **Coffee Tracking**  
Log every cup of coffee you drink, with details like type, size, and time consumed.

✅ **Caffeine Metabolism Simulation**  
Get a real-time estimate of your **blood caffeine levels** based on scientific metabolism models.

✅ **Addiction Cost Analysis**  
Automatically calculates how much you’re spending on your caffeine habit and helps you see trends over time.

✅ **Secure User Authentication**  
Sign up or log in with Firebase Authentication — all user data is scoped and securely managed.

✅ **Data Persistence**  
Your data is stored using Firebase Firestore in a NoSQL document structure, and synced in real-time across devices.

✅ **Responsive Design**  
Built with **React** and styled using **FantaCSS**, the UI adapts seamlessly to mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Technology         | Purpose                               |
|--------------------|----------------------------------------|
| **React.js**        | Frontend Framework                     |
| **Firebase Auth**   | User Sign-In / Sign-Up Authentication  |
| **Firestore DB**    | NoSQL Cloud Database for persistence   |
| **FantaCSS**        | Utility-first CSS framework for styling |
| **JavaScript**      | Core scripting language                |
| **HTML5/CSS3**      | Markup and Styling                     |



---

## 🔐 Authentication

- Uses **Firebase Authentication** for secure user management.
- Supports email/password login (can be extended to OAuth).
- User-specific data is scoped within Firestore to ensure privacy.

## ☁️ Database Design

- Firestore used with **NoSQL document format**.
- Documents are organized by user ID, each containing:
  - Coffee entries
  - Timestamps
  - Cost

## 🧠 Caffeine Simulation Logic
The app simulates blood caffeine levels using a simplified metabolic model:
- Assumes caffeine half-life of ~5 hours
- Automatically decays your caffeine level over time
- Visual output helps users see how long caffeine remains in their system

## 📦 Getting Started (For Developers)

Clone and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/cafficionado.git
cd cafficionado
npm install
npm start
```

Set up Firebase by creating a .env file in the root directory:

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_id
REACT_APP_APP_ID=your_app_id

## 🤝 Contributing
This is a solo project, but suggestions, bug reports, and pull requests are always welcome.

## 🧑‍💻 Author

**Akshith Gunasheelan**  
[LinkedIn](https://www.linkedin.com/in/akshith-gunasheelan-b8068921a/)  
[GitHub](https://github.com/akshithg05)
