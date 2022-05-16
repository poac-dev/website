import { useState } from "react";
import { Center, Text, VStack } from "@chakra-ui/react";

import type { Package as PackageType, Position } from "~/utils/types";
import SearchPagination from "~/components/SearchPagination";
import Package from "~/components/Package";

interface SearchResultProps {
    packages: PackageType[];
    group?: string;
    query?: string;
    pathname: string;
    page: number;
    totalCount: number;
}

export default function SearchResult(props: SearchResultProps): JSX.Element {
    const [currentPos, setCurrentPos] = useState<Position>({ first: 0, last: 0 });

    return (
        <Center>
            <VStack maxWidth={700} spacing={5}>
                {props.totalCount !== 0 ?
                    <Text size="xs">
                        Displaying <Text as="b">
                            {currentPos.first}-{currentPos.last}
                        </Text> of <Text as="b">
                            {props.totalCount}
                        </Text> total results
                    </Text> :
                    <Text as="b">
                        0 packages found.
                    </Text>
                }
                <VStack spacing={5}>
                    {props.packages.map((p) => <Package key={p.id} package={p} group={props.group} />)}
                </VStack>
                <SearchPagination
                    pathname={props.pathname}
                    query={props.query ? { query: props.query } : undefined}
                    setCurrentPos={setCurrentPos}
                    page={props.page}
                    totalCount={props.totalCount}
                />
            </VStack>
        </Center>
    );
}
