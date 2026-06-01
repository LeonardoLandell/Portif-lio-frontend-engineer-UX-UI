import type { Metadata } from "next";

import "@/app/globals.css";

import { BackgroundSystem } from "@/components/background-system/background-system";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

export const metadata: Metadata = {
  title: "Leonardo Landell",
  description: "Frontend Engineer • Product Engineer • Interactive Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <BackgroundSystem />

            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
