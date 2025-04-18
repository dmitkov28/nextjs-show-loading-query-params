import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loading Search Params Demo",
  description: "Show a loading state when changing the url query params",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
