import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/common/navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Cover Letter",
  description: "Generate cover letter using AI",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
