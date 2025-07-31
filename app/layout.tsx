import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./style.css"
import localFont from "next/font/local";
import { Suspense } from "react";
import { NoisePattern } from "./components/graphics";
import { Footer, Header } from "./components/ui";
import "./style.css"
import { Thumbnail } from "./resources";

const baseUrl = "https://copycat.vortygon.space/"

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const jetBrainsMonoNerd = localFont({src: '../public/fonts/JetBrainsMonoNerd.ttf'})

// export const metadata: Metadata = {
//   title: "CopyCat",
//   description: "Переводы игр команды CopyCat",
// };

export async function generateMetadata(): Promise<Metadata> {
  const title = "Перевод Disgaea PC";

  const description =
    "Перевод Disgaea PC от команды CopyCat";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    themeColor: "black",
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: Thumbnail,
          secureUrl: Thumbnail,
          width: 1920,
          height: 768,
          alt: "DisgaeaPC",
        },
      ],
      type: "website",
      siteName: "CopyCat",
    },
  };
}


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

        <Header />

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
