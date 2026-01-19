import type { Metadata } from "next";
import { Libre_Bodoni } from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mosaique - Artisan Tiles",
  description: "Explore our signature collection of handcrafted mosaic tiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBodoni.className} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
