import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai . Fund your projects with chai",
  description: "This website is for crowdfunding for creaters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-red-100 h-[0.2px] opacity-10"></div>
        <div className="min-h-[79vh] bg-[#000]">

        {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
