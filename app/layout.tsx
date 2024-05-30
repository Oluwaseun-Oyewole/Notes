import type { Metadata } from "next";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Notes",
  description: "Learn React By Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
