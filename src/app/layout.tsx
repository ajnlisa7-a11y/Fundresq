import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {MouseSpotlight} from '@/components/ui/mouse-spotlight';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Fundoraid | Blockchain Transaction Tracing & Evidence Reports',
  description: 'Lost or stolen cryptocurrency? Fundoraid traces transaction histories, identifies where funds moved, and produces clear evidence reports for police, lawyers, and exchanges.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WV9D9KSJ');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Automatic Chunk Load Recovery for CDN timeouts & deployment updates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(event) {
                  var msg = event && event.message ? event.message : '';
                  var isChunkError = (
                    msg.indexOf('ChunkLoadError') !== -1 ||
                    msg.indexOf('Loading chunk') !== -1 ||
                    msg.indexOf('Failed to fetch dynamically imported module') !== -1
                  ) || (
                    event && event.target && event.target.tagName === 'SCRIPT' &&
                    event.target.src && event.target.src.indexOf('/_next/static/') !== -1
                  );
                  if (isChunkError) {
                    var reloadKey = 'fundoraid_chunk_recovery';
                    var lastReload = sessionStorage.getItem(reloadKey) || sessionStorage.getItem('fundresq_chunk_recovery');
                    var now = Date.now();
                    if (!lastReload || (now - parseInt(lastReload, 10)) > 10000) {
                      sessionStorage.setItem(reloadKey, String(now));
                      window.location.reload();
                    }
                  }
                }, true);
              }
            `,
          }}
        />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Google tag (gtag.js) - Placed before closing </head> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18466164360"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18466164360');
            `,
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30 relative">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV9D9KSJ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <MouseSpotlight />
        {children}
        <Toaster />
        
        {/* Start of Tawk.to Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6ad93a40d7c89934b94e522c/1k5g8n3v6';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
