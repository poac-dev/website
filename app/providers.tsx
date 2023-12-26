"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
                <Next13ProgressBar
                    height="3px"
                    color="#29D"
                    options={{ showSpinner: false }}
                    showOnShallow
                />
            </NextThemesProvider>
        </NextUIProvider>
    );
}
