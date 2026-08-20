import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import { Navigation } from "@/components/navigation/Navigation";
import { Preloader } from "@/components/ui/Preloader";
import { GridOverlay } from "@/components/ui/GridOverlay";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seven — Frank Bediako",
  description: "Seven — Frank Bediako. Software, systems, intelligent computing and hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-warm-white text-ink font-sans">
        <SmoothScroller>
          <Preloader />
          <CustomCursor />
          <GridOverlay />
          <Navigation />
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
