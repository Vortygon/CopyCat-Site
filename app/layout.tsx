import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./style.css"
import Link from "next/link";
import Socials from "./components/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CopyCat",
  description: "Переводы игр команды CopyCat",
};

function NoisePattern() {
  return (
    <div className="noise" />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div id="background" />

        <div id="header">
          <NoisePattern />
          <Link href="/translations/disgaea1pc">
            <button id="nav_button"><i className="nf nf-md-menu" /></button>
          </Link>
          <Link href="/">
            <img src="/CopyCat_logo.svg" id="logo" />
          </Link>
          <div id="header_title"><>{metadata.title}</></div>
          <Socials />
        </div>

        <div id="content">
          <NoisePattern />
          <div id="page">{children}</div>
        </div>

        <div id="footer">CopyCat ©️ 2024</div> 

      </body>
    </html>
  );
}
