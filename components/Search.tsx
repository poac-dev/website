import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
    'IOCVK5FECM',
    '9c0a76bacf692daa9e8eca2aaff4b2ab'
);

export default function Search(): JSX.Element {
    return (
        <InstantSearch
            indexName="packages"
            searchClient={searchClient}
        >
            <SearchBox />
            <Hits />
        </InstantSearch>
    )
}
