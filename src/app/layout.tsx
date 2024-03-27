import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Boilerplates',
    description: 'Created by Guru',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={cn(
                        'relative antialiased h-full font-sans dark',
                        inter.className,
                    )}
                >
                    <Navbar />
                    <main className="relative min-h-screen flex flex-col">
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
