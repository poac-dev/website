import { Center, HStack, Heading } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404: Not Found",
};

export default function Custom404(): JSX.Element {
    return (
        <>
            <Center height="50px">
                <HStack>
                    <Heading>404</Heading>
                    <Heading size="md">This page could not be found.</Heading>
                </HStack>
            </Center>
        </>
    );
}
