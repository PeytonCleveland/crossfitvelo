import "react-image-crop/dist/ReactCrop.css";
import "~/styles/globals.css";

import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@crossfit-velo/ui";
import { Toaster } from "@crossfit-velo/ui/toaster";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "./config";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      { url: "https://crossfit-velo-corp-lib.vercel.app/opengraph-image.png" },
    ],
    creator: "@Pcleveland1619",
  },
  metadataBase: new URL("https://crossfitvelo.com/"),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            fontMontserrat.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            {props.children}
            <TailwindIndicator />
          </ThemeProvider>
          <Analytics />
          <Toaster />
        </body>
      </html>
    </>
  );
}
