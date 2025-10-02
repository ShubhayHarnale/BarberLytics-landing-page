import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { StagewiseToolbar } from '@/components/stagewise-toolbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barberlytics - Your Barbershop\'s Growth Engine',
  description: 'Barberlytics helps you fix what\'s broken behind the chair — so your business runs smarter, grows faster, and finally works for you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-base leading-relaxed`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="animated-gradient fixed inset-0 -z-10" />
          {children}
          <StagewiseToolbar />
        </ThemeProvider>
      </body>
    </html>
  );
}