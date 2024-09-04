import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentiment Survey Service",
  description:
    "Create Surveys using the Constellation Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider client={client}>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}