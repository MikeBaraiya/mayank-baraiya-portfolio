import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";
import "@/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayankbaraiya.com"),
  title: "Mayank Baraiya | Backend Developer",
  description:
    "Result-oriented Backend Developer with 4+ years of experience in PHP, Laravel, and modern backend development. Building scalable APIs and automation workflows.",
  authors: [{ name: "Mayank Baraiya" }],
  keywords: ["Laravel Developer", "PHP Developer", "Backend Developer", "Rajkot", "India", "Web Developer"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mayank Baraiya | Backend Developer",
    description:
      "Result-oriented Backend Developer with 4+ years of experience in PHP, Laravel, and modern backend development.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Baraiya | Backend Developer",
    description:
      "Result-oriented Backend Developer with 4+ years of experience in PHP, Laravel, and modern backend development.",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}