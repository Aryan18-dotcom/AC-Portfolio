import React from 'react'

const SectionHeading = ({sectionHeader="Featured", sectionTitle}) => {
    return (
        <div className='flex flex-col justify-between w-full mb-5 border-b-2 border-neutral-300/70 pb-2'>
            <p className='text-md/2 tracking-tighter text-neutral-400 text-secondary'>{sectionHeader}</p>
            <h2 className='text-2xl/6 font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-900 from-neutral-900 via-neutral-700/90 to-neutral-300'>{sectionTitle}</h2>
        </div>
    )
}

export default SectionHeading