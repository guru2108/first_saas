import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { client } from '@/app/lib/sanity';
import { simplifiedBoilerPlate } from '@/app/interface';
import Image from 'next/image';
import Link from 'next/link';

async function getData(slug: string) {
    const query = `*[_type == "boilerplate" && slug.current == "${slug}"][0] {
        _id,
        "imageUrl":image.asset->url,
         price,
         title,
         tags,
         "fileUrl":zip.asset->url,
         slug
      }`;

    const data = await client.fetch(query);

    return data;
}

export const dynamic = 'force-dynamic';

export default async function Component({
    params,
}: {
    params: { slug: string };
}) {
    const data: simplifiedBoilerPlate = await getData(params.slug);
    return (
        <div className="grid flex-col-reverse md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
            <div className="grid gap-4 md:gap-10 items-start">
                <div className="md:flex items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">
                            {data.title}
                        </h1>
                        <div>
                            <p className="space-y-[30px]">
                                ❌ Setting up React.js with vite and tailwindcss
                                - 5mins
                                <br /> ❌ Setting up firebase - 10mins <br /> ❌
                                Setting up firebase auth - 20mins
                                <br /> ❌ Setting up crud operations using
                                firebase - 20mins
                                <br /> ✅ Save 55mins in total
                            </p>
                        </div>
                    </div>
                </div>
                <form className="grid gap-4 md:gap-10">
                    <div className="grid gap-2">
                        <Label className="text-base" htmlFor="color">
                            Technologies
                        </Label>
                        <div className="flex space-x-2">
                            {data.tags.map((tag) => (
                                <div className="w-1/4 p-[4px] text-center border-2 rounded-md border-card " key={slug}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button size="lg">
                        <Link href={data.fileUrl}>Buy now </Link>
                    </Button>
                    <Button size="lg">
                        <Link href="/courses/1">Read article</Link>
                    </Button>
                </form>
            </div>
            <div className="grid gap-4 md:gap-10 items-start">
                <Image
                    src={data.imageUrl}
                    alt="The cover image"
                    height={600}
                    width={600}
                />
            </div>
        </div>
    );
}
