import { Geist, Geist_Mono, Cormorant_Garamond, Cairo } from "next/font/google";
import localFont from "next/font/local";
import "./globals/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { CurrencyProvider } from "../context/CurrencyContext";
import ToasterProvider from "./components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

/* ✅ CORRECT: Mona Sans Variable */
const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-Black.woff2",
      weight: "200 900",
      style: "normal",
    },
  ],
  variable: "--font-mona",
  display: "swap",
});

export const metadata = {
  title: "MONTERO",
  description: "...",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${monaSans.variable}
          ${cormorant.variable}
          ${cairo.variable}
          antialiased
        `}
      >
        <AuthProvider>
          <CurrencyProvider>
            <ToasterProvider />
            {children}
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
