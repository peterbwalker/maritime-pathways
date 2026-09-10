import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maritime Pathways Navigator",
  description: "Chart your course to a maritime career.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#e9eeed]">
      <body className="antialiased">{children}</body>
    </html>
  );
}
