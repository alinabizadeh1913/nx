import Layout from "@/components/layout";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nx: Smart Monorepos . Fast CI",
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
        className={`${Font.className} antialiased dark:bg-[#021117] duration-100`}
      >
        <Layout>{children}</Layout>
        <Script
          src="https://kit.fontawesome.com/79a164c540.js"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
