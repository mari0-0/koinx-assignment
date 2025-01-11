import { ReactLenis } from "lenis/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["san-serif"],
});

export const metadata = {
  title: "KoinX | Bitcoin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </ReactLenis>
    </html>
  );
}
