import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./components/providers/AuthProvider"; // ✅ Uncomment kiya

export const metadata: Metadata = {
  title: "Asli AI - Programming Learning Platform",
  description:
    "Asli AI Learn programming easily with courses, tutorials and AI-powered tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {" "}
          {/* ✅ Ab ye active hai */}
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </AuthProvider>{" "}
        {/* ✅ Ab ye active hai */}
      </body>
    </html>
  );
}
