import { Syne, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const plex = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-plex',
})

export const metadata = {
  title: "Isidor Manning",
  description: "My thoughts and notes on various topics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable}`}>
      <body className="antialiased font-plex bg-obsidian text-gentle">
        {children}
      </body>
    </html>
  );
}
