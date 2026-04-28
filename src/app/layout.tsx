import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Name – Official Movie Page",
  description:
    "Explore [Movie Name], the best animated film directed by [Creator Name]. Discover the cast, storyline, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
