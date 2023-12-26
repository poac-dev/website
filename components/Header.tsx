"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Center,
    Flex,
    IconButton,
    Image,
    LinkBox,
    Spacer,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { Link, LinkOverlay } from "~/components/Link";
import Search from "~/components/Search";

export default function Header(): JSX.Element {
    const pathname = usePathname();
    // const { toggleColorMode } = useColorMode();
    const logoName = "/logo-white.svg";

    return (
        <Flex>
            <Spacer />
            <LinkBox>
                <LinkOverlay href="/">
                    <Image width="80px" src={logoName} alt="Logo" />
                </LinkOverlay>
            </LinkBox>
            {pathname === "/" ? (
                <>
                    <Spacer />
                    <Center>
                        <Link href="/search" marginRight={5}>
                            Browse all packages
                        </Link>
                    </Center>
                </>
            ) : (
                <Search />
            )}
            <Spacer />
        </Flex>
    );
}
