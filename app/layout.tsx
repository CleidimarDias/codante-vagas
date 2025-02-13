// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";
import {Maven_Pro, Barriecito} from "next/font/google"

const mavenPro = Maven_Pro({weight: "variable", subsets:["latin"], variable: "--font-maven-pro"})

const barriecito = Barriecito({weight: "400", subsets:["latin"], variable: "--font-barriecito"})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Codante Vagas",
  description: "O Codante vagas conecta candidatos a empregos reais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={(mavenPro.variable, barriecito.variable)}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
