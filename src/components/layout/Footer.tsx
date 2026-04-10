"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Status", href: "#" },
    { name: "Community", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Manage cookies", href: "#" },
    { name: "Do not share my personal information", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-10 mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright & Brand */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span>© {currentYear} AI Resume Builder.</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Branding Credit */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex justify-center">
           <span className="text-xs text-slate-400 dark:text-slate-500">
             Designed and developed by <span className="text-slate-600 dark:text-slate-300 font-medium">Subhalaxmi Pradhan</span>
           </span>
        </div>
      </div>
    </footer>
  );
}
