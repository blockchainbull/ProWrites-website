import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  title: 'ProWrites - Medical Writing Solutions',
  description: 'Physician-authored medical writing that drives real results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-4LT6JGJE5Y" />
    </html>
  );
}