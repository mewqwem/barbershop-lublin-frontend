import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import { Header } from "@/components/Layout/Header/Header";
import { Footer } from "@/components/Layout/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbershop | Poland",
  description:
    "Najlepszy barber w Polsce. Profesjonalne strzyżenie męskie i pielęgnacja brody.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
