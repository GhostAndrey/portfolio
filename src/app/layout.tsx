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
    default: "Портфолио — Unity-разработчик",
    template: "%s — Портфолио",
  },
  description:
    "Портфолио разработчика: два Unity-проекта — кооперативная долина 5×5 км и камерный хоррор, а также финтех, edtech и автоматизация на Go, React и Electron.",
  keywords: [
    "Unity",
    "C#",
    "game developer",
    "портфолио",
    "геймдизайн",
    "Medieval Coop",
    "The Co-habitant",
    "ASTRION",
    "GoDojo",
    "Subscription Firewall",
  ],
  authors: [{ name: "Портфолио", url: "https://github.com/GhostAndrey" }],
  creator: "Портфолио",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Портфолио",
    title: "Портфолио — Unity-разработчик",
    description:
      "Два Unity-проекта в разработке, а также Go-сервисы, Telegram Mini App и инструменты автоматизации.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Портфолио — Unity-разработчик",
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
  name: "Unity-разработчик",
  jobTitle: "Unity Game Developer",
  url: siteUrl,
  sameAs: ["https://github.com/GhostAndrey"],
  knowsAbout: ["Unity", "C#", "Game Design", "Gameplay Programming", "Go", "React"],
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
