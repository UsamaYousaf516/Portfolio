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
  title: { default: 'Usama Yousaf — Flutter & Product Engineer', template: '%s — Usama Yousaf' },
  description:
    'Flutter-first product engineer with 3+ years building production-ready mobile and web experiences — from polished interfaces to APIs, realtime systems and deployment.',
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
