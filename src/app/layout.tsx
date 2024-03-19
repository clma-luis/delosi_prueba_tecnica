import { Toaster } from "@/components/ui/Toast/toaster";
import ProtectRoute from "@/shared/hooks/ProtectRoutes";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DELOSI",
  description: "DELOSI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ProtectRoute>
            {children}
            <Toaster />
          </ProtectRoute>
        </ThemeProvider>
      </body>
    </html>
  );
}
