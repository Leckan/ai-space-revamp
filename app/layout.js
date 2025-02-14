import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from 'next/font/google'
import next from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>

    </ClerkProvider>
  );
}
