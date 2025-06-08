import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/app/ui/components/themeProvider'
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: 'Madhankumar | Full Stack Developer',
  description: 'Portfolio of Madhankumar - showcasing open source, projects, and blog.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
