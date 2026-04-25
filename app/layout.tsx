import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Clinic Name | Modern Medical Care in City, Area",
  description:
    "Book appointments for general consultation, dental care, skin treatment, pediatrics, and diagnostics at Your Clinic Name in City, Area.",
  keywords: [
    "clinic",
    "doctor appointment",
    "general physician",
    "dental care",
    "skin treatment",
    "diagnostics",
    "City Area clinic",
  ],
  openGraph: {
    title: "Your Clinic Name | Your Health, Our Priority",
    description: "Clean, compassionate, and modern medical care for patients aged 18–60.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
