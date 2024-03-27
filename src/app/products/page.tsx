import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { client } from '../lib/sanity';
import { simplifiedBoilerPlate } from '../interface';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
    const query = `*[_type == "boilerplate"]{
    _id,
    "imageUrl":image.asset->url,
     price,
     title,
     tags,
     "fileUrl":zip.asset->url,
     "slug":slug.current
    }`;
    const data = await client.fetch(query);
    console.log(data);
    return data;
};
export const dynamic = 'force-dynamic';
const page = async () => {
    const boilers: simplifiedBoilerPlate[] = await getData();

    return (
        <div className="mt-10">
            <MaxWidthWrapper>
                <div>
                    <h1 className="md:text-xl lg:text-2xl font-bold md:tracking-wider">
                        Explore all {'  '}
                        <span className="text-primary">
                            boilerplates and templates
                        </span>
                    </h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4
                    mt-10 px-[10px]"
                    >
                        {boilers.map((boiler) => (
                            <div
                                className="w-full flex flex-col bg-card border-gray-100 rounded-sm p-[15px] space-y-[7px]"
                                key={boiler._id}
                            >
                                <h1 className="mx-auto text-primary font-extrabold tracking-wider">
                                    {boiler.title}
                                </h1>
                                <Image
                                    src={boiler.imageUrl}
                                    className="mx-auto rounded-md"
                                    height={320}
                                    width={320}
                                    alt="The image"
                                />

                                <Link
                                    href={`/products/${boiler.slug}`}
                                    className="mx-auto"
                                >
                                    <Button
                                        variant="default"
                                        className="mx-auto"
                                    >
                                        More info
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default page;
