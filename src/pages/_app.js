import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/fonts.css';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          sizes='16x16 32x32 48x48'
          type='image/png'
          href='/myicongg.png'
        />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
          <Analytics />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
