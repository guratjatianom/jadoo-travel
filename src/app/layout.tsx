import type { Metadata } from "next";
import { volkhov, poppins } from "./fonts/fonts";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
