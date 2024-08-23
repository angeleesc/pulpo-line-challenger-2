import type { Metadata } from "next";
import { Inter, Montserrat, Qwitcher_Grypen } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.className} `}>
      <body className="bg-gradient-to-r from-blue-gray-50 to-white">
        {children}
      </body>
    </html>
  );
}
