import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Name – Official Movie Page",
  icons: { icon: "/Movie/image/company.png" },
  description:
    "Explore Movie Name, the best animated film directed by Creator Name. Discover the cast, storyline, and more.",
  openGraph: {
    title: "Movie Name – Official Movie Page",
    description:
      "Explore Movie Name, the best animated film directed by Creator Name. Discover the cast, storyline, and more.",
    type: "website",
    locale: "en_US",
    url: "https://lamhoyin1234.github.io/Movie/",
    // images: [{ url: "https://lamhoyin1234.github.io/Movie/og-image.jpg", width: 1200, height: 630, alt: "Movie Name" }],
  },
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
