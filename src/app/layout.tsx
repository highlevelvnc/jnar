import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jnarcondicionadopt.com"),
  title: {
    default: "JN Ar Condicionado — Instalação e Manutenção em Vagos, Aveiro",
    template: "%s · JN Ar Condicionado",
  },
  description:
    "Instalação de ar condicionado, bombas de calor e refrigeração em Vagos e Centro do país. Técnico certificado GFEE · CAT I AIPOR · APCER ET 3014.",
  keywords: [
    "ar condicionado Vagos",
    "ar condicionado Aveiro",
    "bombas de calor",
    "refrigeração comercial",
    "técnico GFEE",
    "instalação ar condicionado",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.jnarcondicionadopt.com",
    siteName: "JN Ar Condicionado",
    title: "JN Ar Condicionado — Climatização Certificada",
    description:
      "Técnico certificado GFEE · Instalação, manutenção e refrigeração em Vagos, Aveiro e Centro de Portugal.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="ambient" aria-hidden />
        {children}
      </body>
    </html>
  );
}
