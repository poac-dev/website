import { connectSearchBox } from "react-instantsearch-dom"
import { Input } from '@chakra-ui/react'

// @ts-ignore
function SearchBox({ refine }) {
    return (
        <>
            <Input
                id="algolia_search"
                type="search"
                placeholder="Search for articles!"
                onChange={(e) => refine(e.currentTarget.value)}
            />
        </>
    )
}

export default connectSearchBox(SearchBox)
