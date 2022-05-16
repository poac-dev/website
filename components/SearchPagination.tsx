import {
    Pagination,
    PaginationContainer, PaginationNext,
    PaginationPage,
    PaginationPageGroup,
    PaginationPrevious, usePagination,
} from "@ajna/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { PER_PAGE } from "~/utils/constants";
import type { Position } from "~/utils/types";

interface SearchPaginationProps {
    pathname: string;
    query?: Record<string, unknown>;
    setCurrentPos: Dispatch<SetStateAction<Position>>;
    page: number;
    totalCount: number;
}

export default function SearchPagination(props: SearchPaginationProps): JSX.Element {
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

    useEffect(() => {
        router.push({
            pathname: props.pathname,
            query: {
                page: currentPage,
                ...props.query,
            },
        });
    }, [currentPage]);

    useEffect(() => {
        const currentLast = currentPage * PER_PAGE;
        props.setCurrentPos({
            first: currentLast - (PER_PAGE - 1),
            last: currentLast > props.totalCount ? props.totalCount : currentLast,
        });
    }, [currentPage, props.totalCount]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    return ( // @ts-ignore
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
    );
}
