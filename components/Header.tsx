import { Flex, IconButton, useColorMode, useColorModeValue, Spacer, Link, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function Header(): JSX.Element {
    const { toggleColorMode } = useColorMode();
    const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

    return (
        <Flex justify="space-evenly">
            <Spacer />
            <LinkBox>
                <LinkOverlay href='/'>
                    <Image boxSize='80px' src='/logo.svg' alt='Icon' />
                </LinkOverlay>
            </LinkBox>
            <Spacer />
            <Link href={"https://doc.poac.pm/"} isExternal>Docs</Link>
            <IconButton
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                icon={colorModeIcon}
                marginRight={5}
            />
            <Spacer />
        </Flex>
    );
}
