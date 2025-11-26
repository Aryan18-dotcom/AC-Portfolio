import { Providers } from "./providers";
import "./globals.css";
import { Sora, Outfit } from "next/font/google";
import { Fira_Code, JetBrains_Mono } from "next/font/google";

const sora = Sora({
  variable: "--font-primary",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-tertiary",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-quaternary",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aryan - Full Stack Web Developer",
  description:
    "I'm a Full Stack web developer, I love building products to solve real-world problems. I'm specialized in building ---. Explore my projects, experience, and technical expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${fira.variable} ${outfit.variable} ${jetbrains.variable} antialiased h-full w-full relative`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

