import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tours & Travels Website",
  description: "Explore tours, destinations, and experiences worldwide!"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
