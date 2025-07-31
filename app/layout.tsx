import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./style.css"
import localFont from "next/font/local";
import { Suspense } from "react";
import { NoisePattern } from "./components/graphics";
import { Footer, Header } from "./components/ui";
import "./style.css"

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const jetBrainsMonoNerd = localFont({src: '../public/fonts/JetBrainsMonoNerd.ttf'})

export const metadata: Metadata = {
  title: "CopyCat",
  description: "Переводы игр команды CopyCat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="style.css" />
      </head> */}
      <body className={`${jetBrainsMono.variable} ${jetBrainsMonoNerd.className} antialiased`}>

        <div id="background" />

        <Header title={metadata.title} />

        <div id="content">
          <NoisePattern />
          <div id="page">
            <Suspense fallback={<p>Загрузка</p>}>{children}</Suspense>
          </div>
        </div>

        <Footer />

      </body>
    </html>
  );
}
