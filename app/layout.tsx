import type { Metadata } from "next";
import { Alex_Brush, Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const script = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "João & Maria",
  description:
    "Um memorial da nossa história — do primeiro encontro ao nosso sim.",
  icons: {
    icon: "/media/flores/flor-sem-caule-1.png",
    apple: "/media/flores/flor-sem-caule-1.png",
  },
  openGraph: {
    title: "João & Maria",
    description:
      "Um memorial da nossa história — do primeiro encontro ao nosso sim.",
    images: ["/media/capitulo-01-primeiro-encontro.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${script.variable} font-body antialiased bg-page text-body selection:bg-yellow-200 selection:text-primary-dark`}
      >
        {children}
      </body>
    </html>
  );
}
