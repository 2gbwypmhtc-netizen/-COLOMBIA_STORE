import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COLOMBIA_STORE | Official Store",
  description: "Official COLOMBIA_STORE online store.",
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
