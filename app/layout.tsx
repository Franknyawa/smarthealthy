import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "Smart & Healthy by WIHYAD",
  description: "Votre sante est notre priorite",
};                                                           

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
