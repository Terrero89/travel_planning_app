import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Nav/Header";
import { NextUIProvider } from "@nextui-org/react";


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
        <NextUIProvider>

          <Header />
          <div className="border-2 w-auto mx-auto border-blue-100 border-opacity-25 text-white h-auto p-5 rounded-md my-8 container   ">
            {children}
          </div>

        </NextUIProvider>
      </body>
    </html>
  );
}
