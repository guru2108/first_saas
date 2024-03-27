import React from 'react';
import { Separator } from './ui/separator';
import MaxWidthWrapper from './MaxWidthWrapper';
export const Footer = () => {
    return (
        <div className="w-full mt-[20px] md:mt-[0px]">
            <Separator />
            <MaxWidthWrapper>
                <h1 className="mx-auto flex justify-center text-center p-[30px] whitespace-nowrap">
                    Created by Boilerplates
                    <span className="ml-[4px] text-primary">
                        currently in Beta mode
                    </span>
                </h1>
            </MaxWidthWrapper>
        </div>
    );
};
