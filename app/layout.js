import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";
import { ThemeToggle } from "@/components/global/theme-toggle";

const oswald = Oswald({
  variable: "--font-oswald-serif",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-sourceSans3-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Git Finder",
  description: "Find your favorite GitHub users and repositories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body
        className={`${oswald.variable} ${sourceSans3.variable} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
