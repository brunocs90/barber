import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Footer from './_components/footer';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Barbearia',
  description: 'Projeto de Barbearia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} dark`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
