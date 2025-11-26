'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion' // Corrected import
import { useState, useEffect } from 'react' // Import useEffect
import ShadowBox from '@/components/NavBar/ShadowBox'

const Links = [
    { href: "/works", title: "Work" },
    { href: "/projects", title: "Projects" },
    { href: "/blog", title: "Blog" },
]

const SCROLL_THRESHOLD_REM = 4; // Define the scroll distance threshold

const NavBar = () => {
    const [hovered, sethovered] = useState(null);
    const [scrolled, setScrolled] = useState(false); // New state to track scroll

    useEffect(() => {
        // Calculate the threshold in pixels (assuming 1rem = 16px)
        const SCROLL_THRESHOLD_PX = SCROLL_THRESHOLD_REM * 16; 

        const handleScroll = () => {
            const isScrolledPastThreshold = window.scrollY > SCROLL_THRESHOLD_PX;
            if (isScrolledPastThreshold !== scrolled) {
                setScrolled(isScrolledPastThreshold);
            }
        };

        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]); // Re-run effect only when 'scrolled' state changes

    // Define base and conditional classes
    const baseClasses = "mx-auto px-4 sticky top-3 left-0 z-20 rounded-full py-4 backdrop-blur-xl flex items-center justify-between transition-all duration-300 ease-in-out";
    // Conditional width class
    const widthClass = scrolled ? "w-[90%] dark:bg-black/50 bg-neutral-white/10" : "w-full";

    return (
        <>
        <div className={`${baseClasses} ${widthClass}`}>
            <div className="flex items-center justify-center gap-4">
                <Link href="/">
                    <Image
                        src="/prof-pic.jpg"
                        alt="Aryan's profile picture"
                        height={120}
                        width={120}
                        className="size-10 rounded-full border border-neutral-800 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-neutral-700 dark:border-neutral-600 relative"
                    />
                </Link>

                <div className="flex items-end justify-between">
                    {Links.map((link, indx) => (
                        <Link
                            onMouseEnter={() => sethovered(indx)}
                            onMouseLeave={() => sethovered(null)}
                            key={indx}
                            href={link.href}
                            className="text-[15px] relative font-medium py-px px-2 -ml-2 hover:text-neutral-200 dark:hover:text-neutral-700 transition-colors duration-150 ease-in-out"
                        >
                            {/* Motion component for hover effect */}
                            {hovered === indx && <motion.div layoutId='nav-hover-id' className='absolute inset-0 rounded-2xl bg-neutral-700 dark:bg-neutral-300 size-full flex items-center justify-center shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-500)] dark:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-400)] border-1.5 border-neutral-700 dark:border-neutral-300'></motion.div>}
                            <span className='relative'>{link.title}</span>
                        </Link>
                    ))}
                </div>

            </div>
            <ShadowBox />

        </div>
        </>
    )
}

export default NavBar


    // <Container className="mx-auto px-4 sticky inset-0 z-20 rounded-md py-4 backdrop-blur-sm flex items-center justify-between">
    //   <div className="flex items-baseline gap-4">
    //     <Link href="/">
    //       <Image
    //         src="/prof-pic.jpg"
    //         alt="Aryan's profile picture"
    //         height={120}
    //         width={120}
    //         className="size-14 rounded-md border border-neutral-800 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-neutral-700 dark:border-neutral-600 relative"
    //       />
    //     </Link>

    //     <div className="flex items-end justify-between">
    //       {Links.map((link, indx) => (
    //           <Link
    //             onMouseEnter={()=> sethovered(indx)}
    //             onMouseLeave={()=>sethovered(null)}
    //             key={indx}
    //             href={link.href}
    //             className="text-[15px] relative font-medium py-px px-2 -ml-px dark:hover:text-neutral-700  hover:text-neutral-50 transition-colors duration-150 ease-in-out"
    //           >
    //             {hovered === indx && <motion.div layoutId='nav-hover-id' className='absolute inset-0 rounded-2xl bg-neutral-900 dark:bg-neutral-300 size-full flex items-center justify-center shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-500)] dark:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-400)] border-1.5 border-neutral-700 dark:border-neutral-300'></motion.div>}
    //             <span className='relative'>{link.title}</span>
    //           </Link>
    //       ))}
    //     </div>
    //   </div>

    //   <ShadowBox />
    // </Container>


//     'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'
// import ShadowBox from '@/components/NavBar/ShadowBox'

// const Links = [
//     { href: "/works", title: "Work" },
//     { href: "/projects", title: "/Projects" },
//     { href: "/blog", title: "Blog" },
// ]

// const SCROLL_THRESHOLD_REM = 4;

// const NavBar = () => {
//     const [hovered, sethovered] = useState(null);
//     const [scrolled, setScrolled] = useState(false);
//     const [animation, setanimation] = useState(false)

//     // --- SCROLL LOGIC ---
//     useEffect(() => {
//         const SCROLL_THRESHOLD_PX = SCROLL_THRESHOLD_REM * 16; 

//         const handleScroll = () => {
//             const isScrolledPastThreshold = window.scrollY > SCROLL_THRESHOLD_PX;
//             if (isScrolledPastThreshold !== scrolled) {
//                 setScrolled(isScrolledPastThreshold);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [scrolled]);

//     // --- ANIMATION TIMEOUT LOGIC ---
//     useEffect(() => {
//         let timer;
        
//         if (animation) {
//             timer = setTimeout(() => {
//                 setanimation(false);
//             }, 3000); // 3 seconds total duration
//         }

//         return () => {
//             if (timer) {
//                 clearTimeout(timer);
//             }
//         };
//     }, [animation]);

//     // Define base and conditional classes
//     const baseClasses = "mx-auto px-4 sticky top-3 left-0 z-20 rounded-full py-4 backdrop-blur-xl flex items-center justify-between transition-all duration-300 ease-in-out";
//     const widthClass = scrolled ? "w-[90%] dark:bg-black/50 bg-neutral-white/10" : "w-full";

//     // Framer Motion variant for the transition circle
//     const transitionVariants = {
//         initial: { 
//             // Start as a small circle at the top-right corner
//             scale: 0, 
//             opacity: 1,
//             originX: '100%', // Pivot point for scale: Top Right corner
//             originY: '0%',
//         },
//         animate: {
//             // Scale up to cover the whole screen
//             scale: 250, // A large value to ensure it covers the entire viewport
//             transition: {
//                 type: "spring",
//                 stiffness: 100, // Controls how hard the spring snaps (higher = faster initial movement)
//                 damping: 40,    // Controls how quickly the spring settles (lower = more bounce, higher = faster settling)
//                 mass: 1,        // Mass of the object (higher = slower acceleration)
//                 duration: 0.8, // The perceived duration of the animation
//             }
//         }
//     };

//     return (
//         <>
//         {/* The motion.div transition overlay */}
//         {animation && (
//             <motion.div
//                 variants={transitionVariants}
//                 initial="initial"
//                 animate="animate"
//                 // The key prop is essential to remount and re-animate the component when 'animation' state changes
//                 key={animation ? 'start' : 'end'} 
//                 className='absolute h-screen w-full bg-red-400 z-[9999] top-0 left-0 rounded-full' 
//                 style={{
//                     // This creates the circular shape at the start
//                     borderRadius: '50%',
//                     // Ensures the color doesn't transition (use a discrete color for transition)
//                     backgroundColor: 'rgb(239 68 68)', // Tailwind red-500 equivalent
//                 }}
//             />
//         )}

//         <div className={`${baseClasses} ${widthClass}`}>
//             <div className="flex items-center justify-center gap-4">
//                 <Link href="/">
//                     <Image
//                         src="/prof-pic.jpg"
//                         alt="Aryan's profile picture"
//                         height={120}
//                         width={120}
//                         className="size-10 rounded-full border border-neutral-800 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-neutral-700 dark:border-neutral-600 relative"
//                     />
//                 </Link>

//                 <div className="flex items-end justify-between">
//                     {Links.map((link, indx) => (
//                         <Link
//                             onMouseEnter={() => sethovered(indx)}
//                             onMouseLeave={() => sethovered(null)}
//                             key={indx}
//                             href={link.href}
//                             className="text-[15px] relative font-medium py-px px-2 -ml-2 dark:hover:text-neutral-700  hover:text-neutral-50 transition-colors duration-150 ease-in-out"
//                         >
//                             {hovered === indx && <motion.div layoutId='nav-hover-id' className='absolute inset-0 rounded-2xl bg-neutral-900 dark:bg-neutral-300 size-full flex items-center justify-center shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-500)] dark:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-400)] border-1.5 border-neutral-700 dark:border-neutral-300'></motion.div>}
//                             <span className='relative'>{link.title}</span>
//                         </Link>
//                     ))}
//                 </div>

//             </div>
//             <ShadowBox onThemeChangeStart={setanimation} /> 

//         </div>
//         </>
//     )
// }

// export default NavBar