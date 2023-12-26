"use client";

import { Input } from "@nextui-org/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchButton() {
    const [value, setValue] = useState("");
    const router = useRouter();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            router.push(`/search?q=${value}`);
        }
    };

    return (
        <Input
            type="search"
            placeholder="Search packages"
            aria-label="Search packages"
            startContent={
                <FontAwesomeIcon
                    className="text-default-600 dark:text-default-500"
                    icon={faMagnifyingGlass}
                    width={15}
                />
            }
            value={value}
            onValueChange={setValue}
            onKeyDown={handleKeyDown}
        >
            Search packages
        </Input>
    );
}
