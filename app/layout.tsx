import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../src/components/ThemeProvider";
import ClickSpark from "../src/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "انتخاب واحد دانشگاه صنعتی اصفهان صنعتی اصفهان",
  description: "وبسایت انتخاب واحد برای دانشجویان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClickSpark
          sparkColor='#3b82f6'
          sparkSize={8}
          sparkRadius={12}
          sparkCount={6}
          duration={300}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClickSpark>
      </body>
    </html>
  );
}
