import type { NextPage } from "next";
import { VStack, Heading, Button, HStack } from "@chakra-ui/react";
import { DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import Search from "~/components/Search";
import Meta from "~/components/Meta";

const Home: NextPage = () => {
    return (
        <>
            <Meta />
            <VStack spacing={5}>
                <Heading as="h1">Package Manager for C++ Developers</Heading>
                <Heading as="h2" size="md">
                    Poac is a C++ package manager which is for open source
                    software.
                    <br />
                    Easy to introduce to your projects; you can use packages
                    intuitively.
                </Heading>
                <Search />
                <HStack>
                    <NextLink
                        href='https://doc.poac.dev/getting-started/installation.html'
                        passHref
                    >
                        <Button as="a" leftIcon={<DownloadIcon />}>
                            Install Poac
                        </Button>
                    </NextLink>
                    <NextLink href='https://doc.poac.dev/guide' passHref>
                        <Button leftIcon={<InfoIcon />}>Getting Started</Button>
                    </NextLink>
                </HStack>
            </VStack>
        </>
    );
};

export default Home;
