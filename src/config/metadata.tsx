/**
 * All config-based metadata is located here.
 * This includes:
 * @baseMetadata shared metadata for all pages
 * @staticMetadata metadata for specific static pages
 * @baseViewport viewport options for all pages
 * @sitemap the generated sitemap for static and dynamic pages.
 * @robots the generated robots.txt file
 * @manifest the generated manifest file
 *
 * For dynamic metadata, we recommend using the generateMetadata function from Next.js inside
 * Individual pages:
 *
 * And as for structured data (JSON-LD) we installed `next-seo` and we recommend using it
 * on individual page/layout files.
 *
 * Here are the docs: https://www.npmjs.com/package/next-seo#json-ld
 */

import { Metadata, MetadataRoute, Viewport } from "next"

import { siteConfig } from "@/config/next-inject"

export const baseMetadata: Metadata = {
  title: {
    default: "<NEXT-INJECT-NAME>",
    template: `%s | <NEXT-INJECT-NAME>`,
  },
  description:
    "Boost your productivity with <NEXT-INJECT-NAME> – the all-in-one solution for [describe your product's main functionality or benefits]. Streamline your workflow with intuitive features like [mention key features]. Trusted by [mention user base or industry], <NEXT-INJECT-NAME> is designed to [solve specific problems or address needs].",
  keywords: [
    "<NEXT-INJECT-NAME>",
    "SaaS solution",
    "cloud-based platform",
    "productivity tools",
    "business software",
    "workflow automation",
    "data security",
    "scalable solution",
    "collaboration tools",
    "customer support software",
    "enterprise software",
    "mobile app integration",
    "user-friendly interface",
    "startup tools",
    "small business software",
    "data analytics",
    "CRM software",
    "marketing automation",
    "project management",
    "task management",
    "team collaboration",
    "software development tools",
    "API integration",
    "payment processing",
    "subscription management",
    "email marketing",
    "business intelligence",
    "cloud computing",
    "software as a service",
    "online service",
    "digital transformation",
    "remote work tools",
  ],
  applicationName: "<NEXT-INJECT-NAME>",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "./",
  },
  // ! Make sure to change the base opengraph and manifest images, located in public/images.
  openGraph: {
    title: {
      default: "<NEXT-INJECT-NAME>",
      template: `%s | <NEXT-INJECT-NAME>`,
    },
    description:
      "Boost your productivity with <NEXT-INJECT-NAME> – the all-in-one solution for [describe your product's main functionality or benefits]. Streamline your workflow with intuitive features like [mention key features]. Trusted by [mention user base or industry], <NEXT-INJECT-NAME> is designed to [solve specific problems or address needs].",
    url: "/",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/next-inject-og.webp`,
        type: "image/webp",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "<NEXT-INJECT-NAME>",
      template: `%s | <NEXT-INJECT-NAME>`,
    },
    description:
      "Boost your productivity with <NEXT-INJECT-NAME> – the all-in-one solution for [describe your product's main functionality or benefits]. Streamline your workflow with intuitive features like [mention key features]. Trusted by [mention user base or industry], <NEXT-INJECT-NAME> is designed to [solve specific problems or address needs].",
    // ! Change the twitter handle (e.g. @craciun_07)
    creator: "@<NEXT-INJECT-NAME> - TWITTER",
    images: [
      {
        url: `${siteConfig.url}/images/next-inject-og.webp`,
        type: "image/webp",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
}

export const baseViewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
  colorScheme: "dark light",
}

export const staticMetadata = {
  ...baseMetadata,
  mainPage: {
    title: { absolute: "<NEXT-INJECT-NAME>" },
    openGraph: {
      ...baseMetadata.openGraph,
      title: { absolute: "<NEXT-INJECT-NAME>" },
    },
    twitter: {
      ...baseMetadata.twitter,
      title: { absolute: "<NEXT-INJECT-NAME>" },
    },
  } satisfies Metadata,
  // ! Write page-specific static metadata configurations here...
}

export async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries = [
    ...siteConfig.navLinks.map((page) => ({
      url: siteConfig.url + page.href,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    })),
    // ! Render dynamic sitemap entries here...
  ] as MetadataRoute.Sitemap

  return sitemapEntries
}
// ! These are the base robots.txt properties, make sure to change/add additional properties as you see fit.
export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

// ! These are the most important manifest properties, make sure to add additional properties as you see fit.
export function manifest(): MetadataRoute.Manifest {
  return {
    name: "<NEXT-INJECT-NAME>",
    short_name: "<NEXT-INJECT-NAME>",
    description:
      "Boost your productivity with <NEXT-INJECT-NAME> – the all-in-one solution for [describe your product's main functionality or benefits]. Streamline your workflow with intuitive features like [mention key features]. Trusted by [mention user base or industry], <NEXT-INJECT-NAME> is designed to [solve specific problems or address needs].",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    display: "standalone",
    start_url: "/",
    orientation: "portrait-primary",
    lang: "en-US",
    scope: "/",

    // ! Feel free to add/remove the icon sizes here.
    icons: [
      {
        src: "/images/icon-72x72.webp",
        sizes: "72x72",
        type: "image/webp",
      },
      {
        src: "/images/icon-96x96.webp",
        sizes: "96x96",
        type: "image/webp",
      },
      {
        src: "/images/icon-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/icon-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  }
}
