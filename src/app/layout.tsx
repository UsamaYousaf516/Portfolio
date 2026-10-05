import type { Metadata, Viewport } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import Effects from '@/components/Effects';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { themeInitScript } from '@/lib/theme';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-unbounded',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Usama Yousaf — AI Developer & Software Engineer', template: '%s — Usama Yousaf' },
  description:
    'AI developer and software engineer using Claude, ChatGPT and MCP servers to build mobile and web applications. 3+ years of experience across Flutter, API integrations, realtime systems and production releases.',
  // The share image comes from app/opengraph-image.png. No og:title is set, so each page's
  // own <title> is used when its link is shared.
  openGraph: { type: 'website', siteName: 'Usama Yousaf' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
