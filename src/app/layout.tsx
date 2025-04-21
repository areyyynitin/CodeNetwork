import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {  RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Network",
  description: "Coding Interview Platform",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23000000%22 />
      <text x=%2235%22 y=%2258%22 font-size=%2245%22 fill=%22%23ffffff%22>&gt;_</text>
    </svg>`, // Circular terminal icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
  <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>

        <div className="min-h-screen">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8" >{children}</main>
            </div>
            </SignedIn>
            
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>


       </ThemeProvider>

        <Toaster />
          
      </body>
    </html>
          </ConvexClerkProvider>
       );
}
