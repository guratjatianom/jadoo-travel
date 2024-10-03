import type { Metadata } from "next";
import { volkhov, poppins } from "./fonts/fonts";
import "./globals.css";
import { PaddingContainer } from "@/components/Common";

export const metadata: Metadata = {
  title: "Jadoo Travel",
  description: "Travel Agency Website",
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
        <PaddingContainer>{children}</PaddingContainer>
      </body>
    </html>
  );
}
