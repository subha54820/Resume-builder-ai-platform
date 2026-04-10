"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-8 mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {/* Copyright & Brand */}
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            © {currentYear} AI Resume Builder. All rights reserved.
          </div>

          {/* Branding Credit */}
          <div className="text-xs text-slate-400 dark:text-slate-500">
             Designed and developed by <span className="text-slate-600 dark:text-slate-300 font-medium">Subhalaxmi Pradhan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
