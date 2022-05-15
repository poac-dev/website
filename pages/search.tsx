import type { GetServerSideProps } from "next";
import { VStack, Text, LinkBox, Heading, LinkOverlay, HStack, Center } from "@chakra-ui/react";
import { supabaseServerClient } from "@supabase/supabase-auth-helpers/nextjs";

import { Package } from "../types";

interface PackageProps {
    package: Package;
}

function Package(props: PackageProps): JSX.Element {
    return (
        <LinkBox borderWidth="1px" borderRadius="md" boxShadow="md" padding={5} minWidth="100%">
            <HStack spacing={3}>
                <Heading size="sm" my="2">
                    <LinkOverlay href="#">
                        {props.package.name}
                    </LinkOverlay>
                </Heading>
                <Text>v{props.package.version}</Text>
            </HStack>
            <Text>{props.package.description}</Text>
        </LinkBox>
    );
}

interface SearchProps {
    packages: Package[];
    page: number;
    totalCount: number;
}

export default function Search(props: SearchProps): JSX.Element {
    return (
        <Center>
            <VStack maxWidth={700} align="left" spacing={5}>
                {props.totalCount !== 0 ?
                    <Text size="xs">
                        {/* TODO: Implement this logic correctly and pagination */}
                        Displaying <Text as="b">1-{props.totalCount}</Text> of <Text as="b">{props.totalCount}</Text> total results
                    </Text> :
                    <Text as="b">
                        0 packages found.
                    </Text>
                }
                <VStack spacing={5}>
                    {props.packages.map((p) => <Package key={p.id} package={p} />)}
                </VStack>
            </VStack>
        </Center>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query.query;
    const page = context.query.page ? +context.query.page : 1;
    const perPage = context.query.perPage ? +context.query.perPage : 10;

    let request = supabaseServerClient(context)
        .from<Package>("packages")
        .select("*", { count: "exact" }); // TODO: Improve selection: name, total downloads, updated_at, ...
    if (query) {
        request = request.like("name", `%${query}%`);
    }

    const startIndex = (page - 1) * perPage;
    request = request.range(startIndex, startIndex + (perPage - 1));

    const { data, error, status, count } = await request;
    if (error && status !== 406) {
        throw error;
    }

    return {
        props: {
            packages: data,
            page,
            totalCount: count ? count : 0,
        },
    };
};
