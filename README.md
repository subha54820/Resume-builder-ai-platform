# 🚀 HireByte

**An AI-Powered ATS-Friendly Resume Builder with Real-Time Analysis.**

HireByte is a state-of-the-art platform designed to empower job seekers by creating professional, ATS-optimized resumes. Leveraging advanced AI, it provides instant feedback and intelligent suggestions to ensure your resume stands out to both recruiters and automated systems.

[Live Demo](https://hirebyte.vercel.app) • [Report Bug](https://github.com/subha54820/Resume-builder-ai-platform/issues)

---

## ✨ Key Features

- **🤖 AI-Powered Builder** – Create and edit resumes with real-time AI assistance for professional content.
- **📊 ATS Compatibility Scoring** – Get instant feedback on how well your resume matches specific job descriptions.
- **💬 AI Chat Assistant** – Personalized resume coaching and section-specific improvement tips via interactive chat.
- **📄 Smart PDF Extraction** – Upload existing resumes and extract text using a 3-tier system (OCR, pdf2json, and more).
- **📋 Content Generation** – Automatically generate professional summaries and work experience bullet points.
- **🎨 Dynamic Live Preview** – Real-time multi-page preview with drag-and-drop section reordering.
- **🌙 Modern UX** – Fully responsive design with dark/light mode and smooth Framer Motion animations.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router), TypeScript, React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration**: [Groq SDK](https://groq.com/) (Llama 3.3), [Google Gemini](https://ai.google.dev/)
- **PDF Processing**: [@react-pdf/renderer](https://react-pdf.org/), [Tesseract.js](https://tesseract.projectnaptha.com/), pdf2json
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/subha54820/Resume-builder-ai-platform.git
cd HireByte
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# AI Keys
GROQ_API_KEY=your_groq_api_key_here
GOOGLE_GEMINI_API_KEY=your_gemini_key_here (optional)

# Config
NEXT_PUBLIC_SITE_URL=http://localhost:9002
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:9002](http://localhost:9002) to see it in action.

## 📂 Project Overview

- **`src/app/api/ai/`**: Serverless functions for ATS analysis, chat, and text extraction.
- **`src/components/`**: Modular UI components including the resume builder and preview system.
- **`src/lib/services/`**: Core business logic and AI service integration (Groq/Gemini).
- **`src/lib/templates/`**: Professional resume layouts and styling.

---
Developed by **subhalaxmi Pradhan** | Licensed under **MIT**
