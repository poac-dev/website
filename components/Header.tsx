import { Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header(): JSX.Element {
    const { toggleColorMode } = useColorMode();
    const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

    return (
        <Flex justifyContent="flex-end">
            <IconButton
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                icon={colorModeIcon}
                marginRight={5}
            />
        </Flex>
    );
}
