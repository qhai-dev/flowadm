import { ReactNode } from 'react'
import  { ThemeProvider } from 'next-themes'
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full">
          <ThemeProvider attribute="data-theme">
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
