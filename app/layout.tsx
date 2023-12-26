import { VStack } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Providers } from "~/app/providers";

import "./globals.css";

export default function Layout({
    children,
}: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en" className="dark">
            <body
                className={"min-h-screen bg-background font-sans antialiased"}
            >
                <Providers>
                    <VStack spacing={10} align="right" margin={5}>
                        <Header />
                        {children}
                        <Footer />
                    </VStack>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
