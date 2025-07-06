import { FC, PropsWithChildren, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import Loading from "./loading";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full select-auto">
        <ThemeProvider attribute="data-theme">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
