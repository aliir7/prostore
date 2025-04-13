import type { Metadata } from "next";
import Inter from "next/font/local";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  display: "swap",
  src: "./fonts/Inter.ttf",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
