import React from "react";
import { Metadata } from "next";
import ContactUs from "../components/ContactUs/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Techify Nation for product inquiries, customer support, sales questions, and technical assistance. Contact us via phone, email, or visit our website.",
  keywords: [
    "contact Techify Nation",
    "customer support",
    "sales inquiries",
    "IT hardware support",
    "Techify Nation contact",
  ],
  alternates: {
    canonical: "https://techifynation-8g63.vercel.app/contact-us",
  },
  openGraph: {
    title: "Contact Us | Techify Nation",
    description:
      "Get in touch with Techify Nation for product inquiries, customer support, and sales questions.",
    url: "https://techifynation-8g63.vercel.app/contact-us",
    siteName: "Techify Nation",
    images: [
      {
        url: "/contactus.png", // Replace with Techify Nation specific image if needed
        width: 1200,
        height: 630,
        alt: "Contact Us - Techify Nation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Techify Nation",
    description:
      "Get in touch with Techify Nation for product inquiries, customer support, and sales questions.",
    images: ["/contactus.png"], // Replace with actual image path if needed
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <div className="">
      <ContactUs />
    </div>
  );
};

export default page;
