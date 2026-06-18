import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Techcombank",
  description: "Techcombank Mobile Banking",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body>
        <div className="app-shell">
          <main className="page-content">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
