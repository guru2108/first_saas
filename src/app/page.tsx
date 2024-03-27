import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { Currency, FileQuestion, Leaf, Timer } from 'lucide-react';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/over-border-gradient';

export default function Home() {
    const points = [
        {
            id: 1,
            name: 'Why use boilerplate',
            description:
                "Don't waste your precious time on setting up, instead use a boilerplate and kickstart your project without hassle.",
            icon: Timer,
            style: 'text-primary',
        },
        {
            id: 2,
            name: 'Value for money',
            description:
                'Explore a variety of affordable stack boilerplates now! Satisfaction guaranteed with refunds available.',
            icon: Currency,
            style: 'text-primary',
        },
        {
            id: 3,
            name: 'Environmental awareness',
            description:
                'Help cultivate a greener future! Almost 20% of your purchase goes directly towards planting trees and initiatives.',
            icon: Leaf,
            style: 'text-primary',
        },
    ];
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-wide text-secondary-foreground">
                        Get started instantly with{'  '}
                        <span className="text-primary">
                            our crafted boilerplates.
                        </span>
                    </h1>
                    <p className="mt-5 text-lg max-w-prose text-muted-foreground">
                        Say goodbye to project setup woes! Our snazzy altered
                        boilerplate templates will have you coding in a flash.
                        No more procrastination – just pure productivity! 🚀
                    </p>
                    <div className="flex gap-4 mt-6">
                        <Link href="/products">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-[20px]"
                            >
                                <span>Explore now</span>
                            </HoverBorderGradient>
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>

            <div>
                <MaxWidthWrapper className="">
                    <div className="grid grid-cols-1 gap-4 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {points.map((point) => {
                            return (
                                <div
                                    className="flex flex-col items-center md:text-center p-[15px] bg-card rounded-md *:
                                    hover:animate-pulse ease-in h-[200px]"
                                    key={point.id}
                                >
                                    <point.icon
                                        className={cn(
                                            'w-1/4 h-1/4 md:w-1/5 md:h-1/5',
                                            point.style,
                                        )}
                                    />
                                    <h3 className="mt-2 md:mt-4 lg:mt-3 text-lg md:text-lg font-bold">
                                        {point.name}
                                    </h3>
                                    <p className="md:text-center items-start mt-2 md:mt-4 lg:mt-3 md:tracking-wide px-2">
                                        {point.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    );
}
