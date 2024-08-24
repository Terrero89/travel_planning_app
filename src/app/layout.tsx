import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Nav/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Planning App",
  description: "App created to plan trips and budgetting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className=" w-auto mx-auto border-blue-100 border-opacity-25 text-white h-auto p-5 my-8 container   ">
          {children}
        </div>
      </body>
    </html>
  );
}
