import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { Cursor } from "@/components/Cursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Андрей — геймдизайнер и Unity-разработчик",
    template: "%s — Андрей",
  },
  description:
    "Портфолио Андрея: 14 Unity-игр — от кооперативной долины 5×5 км до камерного хоррора, а также Go-сервисы, Telegram Mini App и инструменты автоматизации.",
  keywords: [
    "Unity",
    "C#",
    "game developer",
    "геймдизайнер",
    "портфолио",
    "геймдизайн",
    "Андрей",
    "Medieval Coop",
    "The Co-habitant",
    "ASTRION",
    "GoDojo",
    "Subscription Firewall",
  ],
  authors: [{ name: "Андрей", url: "https://github.com/GhostAndrey" }],
  creator: "Андрей",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Андрей — портфолио",
    title: "Андрей — геймдизайнер и Unity-разработчик",
    description:
      "14 Unity-игр, Go-сервисы, Telegram Mini App и инструменты автоматизации. Минск, геймдизайн.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Андрей — геймдизайнер и Unity-разработчик",
    description:
      "Unity-игры, Go-сервисы и веб-проекты: механики, системы, атмосфера и инженерия.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Андрей",
  jobTitle: "Game Designer & Unity Developer",
  description:
    "20 лет, родился в Узбекистане, учится на геймдизайнера в Минске. Делает игры на Unity, сервисы на Go и веб-проекты на Next.js.",
  url: siteUrl,
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Минск", addressCountry: "BY" },
  },
  sameAs: ["https://github.com/GhostAndrey"],
  knowsAbout: ["Unity", "C#", "Game Design", "Gameplay Programming", "Go", "Next.js", "React"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
        <div className="grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
