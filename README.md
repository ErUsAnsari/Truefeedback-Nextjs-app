# 🚀 True Feedback

![True Feedback Thumbnail](public/truefeedback%20thumbnail.png)

---

## 🌟 Overview

**True Feedback** is a modern **full-stack MERN-style** application built using **Next.js 16**.
It provides a secure and **anonymous** environment where users can send and receive **feedback** without **exposing** their **identity**.

The platform is designed to encourage **transparency**, **unfiltered expression**, and **constructive growth** — whether for individuals, creators, teams, or organizations.

---

## ✨ Key Features

- 🔐 **OTP-Based Email Verification**
- 📨 **Anonymous Feedback Submission**
- 🤖 **AI-Assisted Message Suggestions** (Vercel OpenAI SDK)
- 🛡️ **Secure Input Validation using Zod**
- 📬 **Email Integration using Resend**
- 📱 **Fully Responsive Design**
- ⚡ **Built with Next.js 16 App Router**
- 🧠 **Form Management with React Hook Form**
- 🎨 **Clean UI using Tailwind CSS & ShadCN**

---

## 🏗️ Tech Stack

| Layer             | Technology                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 🖥️ Frontend       | Next.js 16 (App Router), Typescript, Tailwind CSS. ShadCN UI, React Hook Form                                             |
| 🧠 Backend        | Next.js Route Handlers (Full-Stack Architecture), Zod (Schema Validation), OTP Verification Logic, Resend (Email Service) |
| 🤖 AI Integration | Vercel OpenAI SDK (AI-powered feedback suggestions)                                                                       |
| 🗄️ Database       | MongoDB                                                                                                                   |

---

## 🔐 Authentication Flow

1. User registers with email.
2. OTP verification is sent via Resend.
3. User verifies account.
4. Anonymous feedback can be received via unique profile link.
5. Messages are securely stored in MongoDB.

---

## 🤖 AI Suggestion System

True Feedback integrates AI-powered suggestions to:

- Help users craft constructive feedback
- Improve clarity of submitted messages
- Encourage meaningful communication.

AI is integrated via the Vercel OpenAI SDK for seamless server-side generation.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ErUsAnsari/true-feedback.git
cd true-feedback
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```bash
DATABASE_URL=
RESEND_API_KEY=
OPENAI_API_KEY=
NEXTAUTH_SECRET=
AUTH_SECRET=
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit:

```bash
http://localhost:3000
```

---

## 🎯 Use Cases

- Anonymous peer feedback
- Creator feedback collection
- Student evaluation platforms
- Team retrospective tools
- Honest product reviews

---

## 💡 Why True Feedback?

In many environments, people hesitate to share honest opinions due to fear of judgment.
True Feedback creates a psychologically safe space that enables growth through constructive anonymity.

---

## 🧑‍💻 Author

Built with ❤️ using Next.js 16 & modern full-stack tools.
