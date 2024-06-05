import { cn } from '@/lib/utils';
import React from 'react'

type PopulateCardProps = {
    children: React.ReactNode;
    width?: string;
    heigh?: string;
    border?: string;
    shadow?: string;
    bg?: string;
}

function Populatecard({children, border, heigh, shadow, width, bg}: PopulateCardProps) {
    return (
        <div className={cn(
            "p-16 rounded-2xl border-2 border-black bg-[#f5f3ea]"
        )}>
            {children}
        </div>
    )
}

export default Populatecard
