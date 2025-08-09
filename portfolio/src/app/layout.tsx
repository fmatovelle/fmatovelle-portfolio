import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","700"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federico — Portfolio",
  description: "Creative portfolio for design, photo, and web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-secondary text-primary`}>
        <div className={spaceGrotesk.className}>{children}</div>
      </body>
    </html>
  );
}
