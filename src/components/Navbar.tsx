import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';
import Cart from './Cart';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { HoverBorderGradient } from './ui/over-border-gradient';
import { Button } from './ui/button';

const Navbar = () => {
    return (
        <nav className="py-2">
            <div className="h-16 flex justify-between items-center text-center align-middle px-2 md:justify-around md:px-20">
                <Link href="/">
                    <h1 className="text-xl md:text-2xl text-primary">
                        Boilerplates
                    </h1>
                </Link>
                <div className="md:hidden flex gap-4">
                    <SignedIn>
                        <Link href="/products" className="hover:text-primary">
                            <UserButton afterSignOutUrl="/" />
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                <span>Sign in</span>
                            </HoverBorderGradient>
                        </Link>
                    </SignedOut>
                </div>
                <div className="hidden md:block">
                    <div className="flex gap-8 items-center">
                        <SignedIn>
                            <Link
                                href="/products"
                                className="hover:text-primary"
                            >
                                <UserButton afterSignOutUrl="/" />
                            </Link>
                        </SignedIn>
                        <SignedOut>
                            <Link href="/sign-in">
                                <Button>Sign in</Button>
                            </Link>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
