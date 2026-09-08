import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Firew Mulat | Full-Stack Software Engineer",
    template: "%s | Firew Mulat",
  },
  description:
    "Firew Mulat is a full-stack software engineer building high-performing websites, dashboards, and digital products for growing businesses.",
  keywords: [
    "Firew Mulat",
    "full-stack software engineer",
    "freelance web developer",
    "Next.js developer",
    "React developer",
    "NestJS developer",
    "business website development",
    "dashboard development",
    "custom web applications",
  ],
  authors: [{ name: "Firew Mulat" }],
  creator: "Firew Mulat",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Firew Mulat | Full-Stack Software Engineer",
    description:
      "Websites, dashboards, and digital products built with clarity, strong UX, and reliable engineering.",
    type: "website",
    siteName: "Firew Mulat Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1150,
        height: 765,
        alt: "Firew Mulat, full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firew Mulat | Full-Stack Software Engineer",
    description:
      "I build high-performing websites, dashboards, and digital products for growing businesses.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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