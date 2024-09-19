import { type Metadata } from "next";

export const HOME_PAGE_SEO: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL!),
  robots: {
    index: true,
    follow: true,
  },
  title: "New project",
  description: "New project descirption",
  authors: [{ name: "Rafał Izdebski", url: "https://rafalizdebski.pl/" }],
  creator: "Rafał Izdebski",
  keywords: ["keyword-1", "keyword-2"],
  openGraph: {
    type: "website",
    countryName: "Polska",
    locale: "pl_PL",
    title: "",
    description: "",
    url: new URL(process.env.NEXT_PUBLIC_HOST_URL!),
    images: "",
    siteName: "",
  },
  twitter: {
    title: "",
    description: "",
    card: "summary_large_image",
    images: "",
    creator: "Rafał Izdebski",
  },
  icons: "/favicon.ico",
};
