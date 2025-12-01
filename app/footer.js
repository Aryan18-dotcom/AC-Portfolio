import Container from '@/components/helpingCompo/container'
import { GithubIcon, HomeIcon, TvIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Top Visual Grid */}
            <Container>
                <div className="grid grid-cols-[2.5rem_1fr] w-full divide-y divide-dashed divide-black/20 dark:divide-white/20">

                    {/* Mark Label (Reverting this back to items-center) */}
                    <div className="flex h-24 sm:h-28 items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 bg-background">
                        <span
                            className="text-xs sm:text-sm text-muted-foreground select-none opacity-70"
                            style={{ transform: "rotate(-90deg)" }}
                        >
                            Mark
                        </span>
                    </div>

                    {/* Mark SVG */}
                    <div className="flex items-center justify-center pr-6 sm:pr-8 bg-black/[0.01] dark:bg-white/[0.03]">
                        <svg width="200" height="70" viewBox="0 0 10 5" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="currentColor"
                                className="dark:text-neutral-300 text-neutral-700"
                                d="M1 0h1v1H1z M0 1h1v4H0z M2 3h1v2H2z M1 2h1v1H1z M2 1h1v1H2z M2 2h1v1H2z M5 0h2v1H5z M4 1h1v3H4z M5 4h2v1H5z"
                            />
                        </svg>
                    </div>

                    {/* Logotype Label (Reverting this back to items-center) */}
                    <div className="flex h-24 sm:h-28 items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 bg-background">
                        <span
                            className="text-xs sm:text-sm text-muted-foreground select-none opacity-70"
                            style={{ transform: "rotate(-90deg)" }}
                        >
                            Logotype
                        </span>
                    </div>

                    {/* Logotype SVG: ADDING mt-1 (margin-top) to nudge it up */}
                    <div className="flex items-center justify-center pr-6 sm:pr-8 bg-black/[0.01] dark:bg-white/[0.03] mx-auto">
                        <svg viewBox="0 0 58 5" xmlns="http://www.w3.org/2000/svg" className="mt-1 mx-auto size-full px-32 dark:text-neutral-300 text-neutral-700">
                            <path fill="currentColor" d="M2 0h1v1H2zM2 2h1v1H2zM1 1h1v4H1zM3 1h1v4H3zM6 0h2v1H6zM5 1h1v3H5zM6 4h2v1H6zM12 0h1v1h-1zM11 1h1v4h-1zM12 2h1v1h-1zM13 1h1v4h-1zM15 0h3v1h-3zM15 1h1v4h-1zM17 1h1v1h-1zM16 2h1v1h-1zM17 3h1v2h-1zM19 0h1v2h-1zM20 2h1v3h-1zM21 0h1v2h-1zM23 1h1v4h-1zM24 0h1v1h-1zM24 2h1v1h-1zM25 1h1v4h-1zM27 1h1v4h-1zM28 0h1v1h-1zM29 1h1v3h-1zM30 4h1v1h-1zM31 0h1v4h-1zM33 1h1v3h-1zM34 0h2v1h-2zM34 4h2v1h-2zM37 1h1v4h-1zM38 2h2v1h-2zM39 0h1v4h-1zM41 0h1v4h-1zM42 2h2v1h-2zM43 1h1v4h-1zM45 1h1v3h-1zM46 0h2v1h-2zM46 2h1v1h-1zM46 4h2v1h-2zM49 0h1v5h-1zM50 0h2v1h-2zM50 4h2v1h-2zM52 1h1v3h-1zM54 1h1v4h-1zM55 0h1v1h-1zM56 1h1v4h-1zM55 2h1v1h-1z" />
                        </svg>

                    </div>

                </div>
            </Container>

            {/* Bottom Footer */}
            <Container>
                <div className="relative mx-auto w-full border-y border-dashed border-black/20 dark:border-white/20 pt-6 pb-4">
                    <div className='flex flex-col items-center justify-center w-full divide-y divide-neutral-700 gap-4'>
                        {/* Credits */}
                        <div className="text-center border-x border-dashed border-black/20 dark:border-white/20 w-full pb-3">
                            <p className="font-mono md:text-sm text-[8px] text-muted-foreground mb-1">
                                Design inspired by{" "}
                                <Link href="https://chanhdai.com" className="hover:underline underline-offset-4">
                                    chanhdai.com
                                </Link>{" "}
                                &{" "}
                                <Link href="https://ramx.in" className="hover:underline underline-offset-4">
                                    ramx.in
                                </Link>
                            </p>

                            <div>
                                <p className="font-mono md:text-sm text-[8px] text-muted-foreground">
                                    Built by{" "}
                                    <Link href="/" className="hover:underline underline-offset-4 font-semibold">
                                        Aryan Chheda
                                    </Link>
                                    . Source code on{" "}
                                    <Link href="/" className="hover:underline underline-offset-4 font-semibold">
                                        GitHub
                                    </Link>
                                    .
                                </p>
                                {/* © 2025. All rights reserved. */}
                                <p className="font-mono md:text-xs text-[6px] text-muted-foreground mt-2 opacity-70">
                                    © <button type="button" className="underline underline-offset-4">2025</button>. All rights reserved.
                                </p>
                            </div>
                        </div>

                        {/* Icon Row */}
                        <div className="flex justify-center gap-6 border-x border-dashed border-black/20 dark:border-white/20 w-full">
                            {/* Home */}
                            <Link href="/" className="transition-opacity hover:opacity-100 opacity-70">
                                <HomeIcon className='md:size-6 size-4' />
                            </Link>

                            {/* Middle divider line */}
                            <div className="h-6 w-px bg-black/20 dark:bg-white/20"></div>

                            {/* GitHub */}
                            <Link href="/" className="transition-opacity hover:opacity-100 opacity-70">
                                <GithubIcon className='md:size-6 size-4' />
                            </Link>

                            {/* Divider */}
                            <div className="h-6 w-px bg-black/20 dark:bg-white/20"></div>

                            {/* TV Icon */}
                            <Link href="/" className="transition-opacity hover:opacity-100 opacity-70">
                                <TvIcon className='md:size-6 size-4' />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer