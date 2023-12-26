"use client";

import { DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, VStack } from "@chakra-ui/react";

// import Meta from "~/components/Meta";
import Search from "~/components/Search";

export function HomePage() {
    return (
        <>
            {/* <Meta /> */}
            <VStack spacing={5} textAlign={"center"}>
                <Heading as="h1">A Poac's community registry</Heading>
                <Search />
                <HStack>
                    <Button
                        as="a"
                        href="https://github.com/poac-dev/poac#installation"
                        leftIcon={<DownloadIcon />}
                    >
                        Install Poac
                    </Button>
                    <Button
                        as="a"
                        href="https://doc.poac.dev/guide"
                        leftIcon={<InfoIcon />}
                    >
                        Getting Started
                    </Button>
                </HStack>
            </VStack>
        </>
    );
};
