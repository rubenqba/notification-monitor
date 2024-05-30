import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@component/header";
import Navigation from "@component/navigation";
import Footer from "@component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notification Monitor",
  description: "Generated by @ruben.bresler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1">
            <Navigation />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
