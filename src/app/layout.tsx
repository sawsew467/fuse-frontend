import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Providers from "./providers";
import Cursor from "@/components/ui/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fuse - innocode 2024",
  description: "Generated by create next app",
  icons: "/fuse.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)} suppressHydrationWarning={true}>
        <Providers>
          {children}
          {/* <Cursor /> */}

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
