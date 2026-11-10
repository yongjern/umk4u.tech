import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umk4u.tech"),
  title: "UMK4U | Tools built for UMK students",
  description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
  icons: {
    icon: "/logo_128.png",
    apple: "/logo_128.png"
  },
  openGraph: {
    type: "website",
    url: "https://umk4u.tech",
    siteName: "UMK4U",
    title: "UMK4U | Tools built for UMK students",
    description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
    images: [{
      url: "/logo_128.png",
      width: 128,
      height: 128,
      alt: "UMK4U logo"
    }]
  },
  twitter: {
    card: "summary",
    title: "UMK4U | Tools built for UMK students",
    description: "Simple, focused digital tools for the Universiti Malaysia Kelantan community.",
    images: ["/logo_128.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}