# 🚀 HireByte

**An AI-Powered ATS-Friendly Resume Builder with Real-Time Analysis.**

Build professional resumes with AI assistance and instant ATS compatibility scoring.

[Live Demo](https://hirebyte.vercel.app) • [Report Bug](https://github.com/subha54820/Resume-builder-ai-platform/issues)

---

## ✨ Features

- **🤖 AI Analysis** - Intelligent resume feedback using Groq (Llama 3.3) and Google Gemini.
- **📊 Real-Time ATS Scoring** - Instant compatibility analysis with detailed improvement suggestions.
- **📄 Professional PDF Export** - ATS-optimized formatting with high-quality PDF rendering.
- **🎨 Dynamic Preview** - Real-time multi-page preview with drag-and-drop section reordering.
- **🌙 Modern UI** - Fully responsive design with dark/light mode and smooth animations.
- **🔍 Smart Extraction** - 3-tier system for extracting text from any PDF (standard, scanned, or image-based).

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Framer Motion
- **AI Integration**: Groq SDK, Google Gemini, HuggingFace
- **PDF Processing**: @react-pdf/renderer, pdf2json, Tesseract.js

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/subha54820/Resume-builder-ai-platform.git
cd HireByte
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root:

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
