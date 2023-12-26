"use client";

// TODO: metadata
import SearchResult from "./_components/SearchResult";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
import { CircularProgress } from "@nextui-org/react";

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams?.get("q") ?? "";
    const page = Number(searchParams?.get("page") ?? 1);
    const perPage = Number(searchParams?.get("perPage") ?? 10);

    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`/search/api?q=${query}&page=${page}&perPage=${perPage}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data || data.packages.length === 0) {
                    return;
                }
                setPackages(data.packages);
                setTotalCount(data.packages_aggregate?.aggregate?.count);
                setLoading(false);
            });
    }, [query, page, perPage]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <CircularProgress size={"lg"} />
            </div>
        );
    }

    return (
        <>
            {packages && totalCount ? (
                <SearchResult
                    packages={packages}
                    query={query}
                    perPage={perPage}
                    page={page}
                    totalCount={totalCount}
                />
            ) : (
                <Center>
                    <Text>no packages found</Text>
                </Center>
            )}
        </>
    );
}
