import { VStack, Heading, HStack } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { supabaseServerClient } from "@supabase/supabase-auth-helpers/nextjs";

import type { Package as PackageType } from "../../../types";

interface NameProps {
    package: PackageType;
}

export default function Name(props: NameProps): JSX.Element {
    return (
        <VStack spacing={5}>
            <HStack spacing={5}>
                <Heading>{props.package.name}</Heading>
                <Heading>v{props.package.version}</Heading>
            </HStack>
            <Heading size="md">
                {props.package.description}
            </Heading>
        </VStack>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const group = context.query.group;
    const name = context.query.name;

    const { data, error, status } = await supabaseServerClient(context)
        .rpc<PackageType>("get_packages")
        .select("*") // TODO: Improve selection: name, total downloads, updated_at, ...
        .eq("name", `${group}/${name}`)
        .limit(1)
        .single();
    if (error && status !== 406) {
        throw error;
    }

    return {
        props: {
            package: data,
        },
    };
};
