import { Divider, VStack, HStack, Link } from "@chakra-ui/react";

export default function Footer(): JSX.Element {
    return (
        <VStack spacing={5}>
            <Divider />
            <HStack spacing={10}>
                <Link href="https://github.com/poacpm" isExternal>
                    GitHub
                </Link>
                <Link href="https://github.com/sponsors/ken-matsui" isExternal>
                    Sponsor
                </Link>
            </HStack>
        </VStack>
    );
}
