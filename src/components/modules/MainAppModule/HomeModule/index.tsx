"use client"
import Section from '@/components/ui/section'
import React from 'react'
import FlashCardSection from './FlashCardSection'

function HomeModule() {
    return (
     <section className="relative w-full ">
        <div className='container px-5 sm:px-8 md:px-10 lg:px-[60px] lg:py-0'>
            <FlashCardSection/>
        </div>
     </section>
    )
}

export default HomeModule
