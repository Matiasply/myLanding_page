import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Open_Sans } from "next/font/google"
import { Contacts } from "./_components/contact";
import { AosInit } from "./_components/aos-init";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Página profissional - Matias Monteiro",
  description: "Landing page profissional e portfólio de Matias Monteiro",
  openGraph: {
    title:"Página profissional - Matias Monteiro",
    description: "Landing page profissional e portfólio de Matias Monteiro"
  },
  robots : {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col ${openSans.className}`}>
        {children}
        <footer>
          <Contacts/>
        </footer>
        <AosInit/>
        </body>
    </html>
  );
}
