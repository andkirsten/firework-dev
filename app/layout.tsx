import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirsten Andersen Morris — Independent Software Engineer",
  description: "Full-stack software engineer helping businesses build web apps and SaaS products that actually solve problems. Based in Iowa, working everywhere.",
  openGraph: {
    title: "Kirsten Andersen Morris — Independent Software Engineer",
    description: "Full-stack software engineer helping businesses build web apps and SaaS products that actually solve problems.",
    url: "https://fireworkdev.com",
    siteName: "Firework Development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
