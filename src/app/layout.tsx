import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasnain Decoration — Weddings, Birthdays & Events in Rawalpindi & Islamabad",
  description:
    "Hasnain Decoration — wedding stage, marriage, mehndi, walima, dholki, birthday and milad decoration, plus home lights, in Rawalpindi & Islamabad. Decorated personally by Muhammad Jamil Bhatti, 15 years of experience.",
  icons: { icon: "data:," },
};

/**
 * Root layout — shared shell only.
 * Each route imports its own frozen-design stylesheet in its route layout,
 * exactly as the three original standalone pages did.
 * Fonts are loaded with the same Google Fonts <link>s as the originals.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Theme pre-paint (same as the originals): a saved choice in
            localStorage "hd-theme" wins; pages 1–2 key off the .dark class,
            page 3 keys off the data-theme attribute. No flash of wrong theme. */}
        <Script id="hd-theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("hd-theme");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.setAttribute("data-theme","dark");}else{document.documentElement.setAttribute("data-theme","light");}}catch(e){}})();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
