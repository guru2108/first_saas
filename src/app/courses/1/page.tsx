'use client';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { CopyBlock, dracula } from 'react-code-blocks';
export default function Component() {
    return (
        <div className="w-full py-12 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid items-start gap-8 lg:grid-cols-4 lg:gap-12 xl:gap-20">
                    <aside className="order-last lg:order-first col-span-full lg:col-span-1">
                        <div className="hidden md:flex flex-col gap-2">
                            <Label> Table of contents </Label>
                            <Link
                                className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <span className="font-normal">1.</span>
                                <span>Introduction</span>
                            </Link>
                            <Link
                                className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <span className="font-normal">2.</span>
                                <span>TODO app</span>
                            </Link>
                            <Link
                                className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <span className="font-normal">3.</span>
                                <span>Usage</span>
                            </Link>
                            <Link
                                className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <span className="font-normal">4.</span>
                                <span>Customization</span>
                            </Link>
                            <Link
                                className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <span className="font-normal">5.</span>
                                <span>Conclusion</span>
                            </Link>
                        </div>
                    </aside>
                    <div className="grid gap-4 lg:col-start-2 lg:col-span-3">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold lg:text-5xl">
                                Learn how to use React with firebase
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Learn how to build a simple application using
                                React and firebase
                            </p>
                        </div>
                        <section className="border-t border-gray-200 dark:border-gray-800">
                            <div className="grid gap-4 pt-4 lg:gap-8">
                                <div className="space-y-4">
                                    <h2
                                        className="text-2xl font-bold"
                                        id="introduction"
                                    >
                                        Introduction
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                                        <span className="text-primary">
                                            Firebase
                                        </span>{' '}
                                        - Firebase is a comprehensive platform
                                        provided by Google for building mobile
                                        and web applications, offering services
                                        such as authentication, real-time
                                        database and more, facilitating rapid
                                        development and scalability.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                                        <span className="text-primary">
                                            React.js
                                        </span>{' '}
                                        - React.js is a JavaScript library for
                                        building user interfaces, known for its
                                        component-based architecture and
                                        efficient rendering.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                                        Download the boilerplate and follow this
                                        tutorial along to create a simple to do
                                        app.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h2
                                        className="text-2xl font-bold"
                                        id="setup"
                                    >
                                        TODO app
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                                        Let's break the boilerplate code step by
                                        step and explain every part.
                                        <p className="text-primary">
                                            Coming soon
                                        </p>
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h2
                                        className="text-2xl font-bold"
                                        id="usage"
                                    >
                                        Usage
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400"></p>
                                </div>
                                <div className="space-y-4">
                                    <h2
                                        className="text-2xl font-bold"
                                        id="customization"
                                    >
                                        Customization
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400"></p>
                                </div>
                                <div className="space-y-4">
                                    <h2
                                        className="text-2xl font-bold"
                                        id="conclusion"
                                    >
                                        Conclusion
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400"></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
