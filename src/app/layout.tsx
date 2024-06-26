import SearchModal from "@/components/SearchModal";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";
import Script from 'next/script';

const GA_TRACKING_ID = 'G-THJP4GMD8G'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <meta name="google-site-verification" content="xGfKcUzJYFOYPCbx6ac-nRsL600rVekYV-60SYL3p48" />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
        {/* favicon */}
        <link rel="icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="Enklar" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <meta property="og:title" content="Enklar - Energieberatung | Förderservice | iSFP" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.enklar.de" />
        <meta property="og:description" content="Ihr verlässlicher Partner für die energetische Sanierung" />
        <meta property="og:image" content="https://enklar.de/images/favicon.png" />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />

      </head>
      <Script 
          id="cookieyes" type="text/javascript" 
          src="https://cdn-cookieyes.com/client_data/cb78db5a365ffbf4f2d14700/script.js" 
          strategy="afterInteractive"
        />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      
      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Header />
          <SearchModal />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
