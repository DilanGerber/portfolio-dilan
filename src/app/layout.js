import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Dilan Gerber",
  description: "Soy Dilan Gerber, desarrollador web especializado en crear soluciones digitales eficientes. Construyo experiencias digitales modernas y funcionales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable}`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
