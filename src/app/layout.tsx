import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pirates of The South – Official Movie Page",
  icons: { icon: "/Movie/image/company.png" },
  description:
    "Explore Pirates of The South, the best animated film directed by Jason Cook. Discover the cast, storyline, and more.",
  openGraph: {
    title: "Pirates of The South – Official Movie Page",
    description:
      "Explore Pirates of The South, the best animated film directed by Jason Cook. Discover the cast, storyline, and more.",
    type: "website",
    locale: "en_US",
    url: "https://lamhoyin1234.github.io/Movie/",
    // images: [{ url: "https://lamhoyin1234.github.io/Movie/og-image.jpg", width: 1200, height: 630, alt: "Pirates of The South" }],
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
