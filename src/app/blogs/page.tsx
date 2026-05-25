import React from "react";
import BlogContainer from "../components/Blogs/BlogContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://server-blink.vercel.app"),
  title: {
    default: "Blogs",
    template: "%s | Blogs ",
  },
  description:
    "Read the latest articles and insights on servers, networking equipment, and IT solutions at Techify Nation. Stay informed with tech trends and product guides.",
  keywords: [
    "Techify Nation blog",
    "servers articles",
    "networking guides",
    "IT solutions insights",
    "tech trends",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://server-blink.vercel.app/blogs",
    siteName: "Techify Nation",
    title: "Techify Nation Blogs – Servers, Networking & IT Insights",
    description:
      "Explore expert blogs on servers, networking equipment, and IT solutions at Techify Nation.",
    images: [
      {
        url: "/serverblink-logo.png", // Replace with your actual banner/logo
        width: 1200,
        height: 630,
        alt: "Techify Nation Blog Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techify Nation Blogs – Servers, Networking & IT Insights",
    description:
      "Stay updated with expert insights on servers and IT solutions from Techify Nation.",
    images: ["/serverblink-logo.png"], // Replace with actual image
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const page = () => {
  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default page;
