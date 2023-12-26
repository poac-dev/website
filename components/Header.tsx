import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import NextLink from "next/link";

import { Logo } from "./Logo";

export default function Header(): JSX.Element {
    return (
        <Navbar>
            <NavbarBrand>
                <NextLink href="/">
                    <dev className="flex items-center">
                        <Logo />
                        <p className="font-bold text-inherit">Poac</p>
                    </dev>
                </NextLink>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="https://doc.poac.dev">
                        Docs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="https://github.com/poac-dev">
                        GitHub
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="https://github.com/sponsors/ken-matsui"
                    >
                        Sponsor
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/search">Browse all packages</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
