"use client";

import React from "react";

interface GlowingBorderProps {
    children: React.ReactNode;
    className?: string; // Container className
    borderRadius?: string;
    glowColor?: string;
    duration?: number;
    containerClassName?: string; // For compatibility
}

export default function GlowingBorder({
    children,
    className = "",
    borderRadius = "rounded-xl",
    glowColor = "white", // Not directly used in this specific gradient implementation but kept for prop compatibility
    duration = 8,
    containerClassName = ""
}: GlowingBorderProps) {

    return (
        <div className={`relative ${borderRadius} ${className}`}>
            {/* Content - Placed first so border overlays it (or use z-index) */}
            <div className={containerClassName || "h-full w-full"}>
                {children}
            </div>

            {/* Elemento de luz animada */}
            <div
                className={`absolute inset-0 ${borderRadius} pointer-events-none`}
                style={{
                    background: `linear-gradient(
            90deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 40%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.3) 60%,
            transparent 70%,
            transparent 100%
            )`,
                    backgroundSize: "300% 100%",
                    backgroundPosition: "-150% 0",
                    animation: `metallicSweep ${duration}s linear infinite`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "4px", // Thicker border for better visibility
                    filter: "blur(1px)", // Increased blur for glow
                    opacity: 1, // Full opacity for visibility
                    zIndex: 10
                }}
            />

            {/* Static border base (optional, for when light is not passing) */}
            <div className={`absolute inset-0 ${borderRadius} border border-white/10 pointer-events-none`} style={{ zIndex: 10 }}></div>
        </div>
    );
}
