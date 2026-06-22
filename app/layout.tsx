import type { Metadata } from 'next';
import { Permanent_Marker, Dosis, Raleway, Poppins } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
});

const dosis = Dosis({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-dosis',
});

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Victoria Scott',
    template: '%s - Victoria Scott',
  },
  description:
    'Victoria Scott is the author of nine novels. Her books have been YALSA-nominated and have received starred reviews—the highest honor—by top literary critics. Her stories have been translated and sold in thirteen countries.',
  twitter: {
    card: 'summary_large_image',
    creator: '@heytoriscott',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${permanentMarker.variable} ${dosis.variable} ${raleway.variable} ${poppins.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
