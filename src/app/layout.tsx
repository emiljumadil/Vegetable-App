import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { CategoryProvider } from "@/context/CategoryContext";
import { ActiveProductProvider } from "@/context/ActiveProductContext";


export const metadata: Metadata = {
  title: "Vegetable App 🥦",
  description: "Go Eat Some Fresh Vegetable 🥦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ActiveProductProvider>
          <CategoryProvider>
            <body className="font-sf-pro-display">{children}</body>
          </CategoryProvider>
        </ActiveProductProvider>
      </ReactQueryProvider>
    </html>
  );
}
