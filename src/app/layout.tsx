"use client";

import { Lexend } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const lexend = Lexend({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Syl&apos;s Sanctuary</title>
      </head>
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
