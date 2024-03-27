import React from 'react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
const Cart = () => {
    const itemCount: number = 0;
    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag />
            </SheetTrigger>
            <SheetContent className="bg-background" side={'right'}>
                <SheetHeader>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {itemCount > 0 ? (
                    <></>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div
                            aria-hidden="true"
                            className="relative mb-4 h-60 w-60 text-muted-foreground"
                        ></div>
                        <div className="text-xl font-semibold text-white">
                            Your cart is empty
                        </div>
                        <SheetTrigger asChild>
                            <Link href="/products">
                                <Button
                                    variant="default"
                                    className="text-white"
                                >
                                    Add items to your cart to checkout
                                </Button>
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
