import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umk4u.tech"),
  title: "𝐔𝐌𝐊𝟰𝐔 ✦ Tools built for UMK students",
  description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
  icons: {
    icon: "/logo_128.png",
    apple: "/logo_128.png"
  },
  openGraph: {
    type: "website",
    url: "https://umk4u.tech",
    siteName: "UMK4U",
    title: "𝐔𝐌𝐊𝟰𝐔 ✦ Tools built for UMK students",
    description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
    images: [{
      url: "/logo_128.png",
      width: 128,
      height: 128,
      alt: "UMK4U logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "𝐔𝐌𝐊𝟰𝐔 ✦ Tools built for UMK students",
    description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
    images: ["/logo_128.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-type="software" data-site-kind="software" className={`${archivo.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}