import { Flex, IconButton, useColorMode, useColorModeValue, Spacer, Link, Image, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function Header(): JSX.Element {
    const { toggleColorMode } = useColorMode();
    const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

    return (
        <Flex>
            <Spacer />
            <LinkBox>
                <LinkOverlay href='/'>
                    <Image width='80px' src='/logo.svg' alt='Icon' />
                </LinkOverlay>
            </LinkBox>
            <Spacer />
            <Center marginRight={5}>
                <Link href={"https://doc.poac.pm/"} isExternal>Docs</Link>
            </Center>
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
