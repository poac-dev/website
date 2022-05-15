import type { GetServerSideProps } from "next";
import { VStack, Text, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { supabaseServerClient } from "@supabase/supabase-auth-helpers/nextjs";
import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
} from "@ajna/pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { Package as PackageType } from "~/utils/types";
import Package from "~/components/Package";

const PER_PAGE = 10;

interface Position {
    first: number;
    last: number;
}

interface SearchProps {
    packages: PackageType[];
    query: string;
    page: number;
    totalCount: number;
}

export default function Search(props: SearchProps): JSX.Element {
    const router = useRouter();
    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages,
    } = usePagination({
        total: props.totalCount,
        initialState: {
            pageSize: PER_PAGE,
            currentPage: props.page,
        },
    });
    const [currentPos, setCurrentPos] = useState<Position>({ first: 0, last: 0 });

    useEffect(() => {
        router.push({
            pathname: "/search",
            query: { query: props.query, page: currentPage },
        });
    }, [currentPage]);

    useEffect(() => {
        const currentLast = currentPage * PER_PAGE;
        setCurrentPos({
            first: currentLast - (PER_PAGE - 1),
            last: currentLast > props.totalCount ? props.totalCount : currentLast,
        });
    }, [currentPage, props.totalCount]);

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
                    {props.packages.map((p) => <Package key={p.id} package={p} />)}
                </VStack>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                >
                    <PaginationContainer>
                        <PaginationPrevious marginRight={5} paddingX={3}>
                            <ChevronLeftIcon />
                        </PaginationPrevious>
                        <PaginationPageGroup>
                            {pages.map((page: number) => (
                                <PaginationPage
                                    key={`pagination_page_${page}`}
                                    page={page}
                                    fontSize="sm"
                                    paddingX={3}
                                    isDisabled={page === currentPage}
                                />
                            ))}
                        </PaginationPageGroup>
                        <PaginationNext marginLeft={5} paddingX={3}>
                            <ChevronRightIcon />
                        </PaginationNext>
                    </PaginationContainer>
                </Pagination>
            </VStack>
        </Center>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query.query;
    const page = context.query.page ? +context.query.page : 1;
    const perPage = context.query.perPage ? +context.query.perPage : PER_PAGE;

    let request = supabaseServerClient(context)
        .rpc<PackageType>("get_uniq_packages", {}, { count: "exact" })
        .select("*"); // TODO: Improve selection: name, total downloads, updated_at, ...
    if (query) {
        request = request.like("name", `%${query}%`);
    }

    const startIndex = (page - 1) * perPage;
    request = request.range(startIndex, startIndex + (perPage - 1));

    const { data, count } = await request;
    if (data && count) {
        return {
            props: {
                packages: data,
                query,
                page,
                totalCount: count,
            },
        };
    }
    return {
        notFound: true,
    };
};
