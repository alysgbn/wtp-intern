import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const satoshiLight = localFont({
  src: "./../fonts/Satoshi-Medium.otf",
  display: "swap",
  variable: "--font-satoshi",
});
const satoshi = localFont({
  src: "./../fonts/Satoshi-Medium.otf",
  display: "swap",
  variable: "--font-satoshi-medium",
});
const satoshiBold = localFont({
  src: "./../fonts/Satoshi-Bold.otf",
  display: "swap",
  variable: "--font-satoshi-bold",
});

const generalSansLight = localFont({
  src: "./../fonts/GeneralSans-Regular.otf",
  display: "swap",
  variable: "--font-general-sans-light",
});
const generalSans = localFont({
  src: "./../fonts/GeneralSans-Medium.otf",
  display: "swap",
  variable: "--font-general-sans",
});
const generalSansBold = localFont({
  src: "./../fonts/GeneralSans-Bold.otf",
  display: "swap",
  variable: "--font-general-sans-bold",
});

const syne = localFont({
  src: "./../fonts/Syne-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Walk The Planet - Internship",
  description: "Front-End Internship at Walk The Planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${satoshi.variable} ${satoshiBold.variable} ${satoshiLight.variable} ${generalSans.variable} ${generalSansLight.variable} ${generalSansBold.variable} walk-the-planet antialiased`}>
        {children}
      </body>
    </html>
  );
}
