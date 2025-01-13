"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LinkWrapper({ href, children }: { href: string; children: React.ReactNode }) {
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        if (isClicked) {
            e.preventDefault(); 
            return;
        }
        setIsClicked(true);
        router.push(href); 
    };

    return (
        <div onClick={handleClick} role="link" tabIndex={0}>
            {children}
        </div>
    );
}