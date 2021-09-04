//* Styles
import { FilterContainer } from '../NavStylings';

//* Components
import ContextSearchFilter from '../../ContextDropdown/CustomContextDropdowns/ContextSearchFilter';

//* Hooks, React
import React, { useRef } from 'react'; // remove this
import ContextDropdown from '../../ContextDropdown/ContextDropdown';

//* SVG
import FilterIcon from '../../SVG/FilterIcon';

//* Styled

const SearchFilter = ({ filter, setFilter }) => {
    const countref = useRef(0); // remove this
    console.log('SearchFilter.js: ' + countref.current++); // remove this
    return (
        <FilterContainer>
            <ContextDropdown icon={<FilterIcon />} transparent stayOpen>
                <ContextSearchFilter filter={filter} setFilter={setFilter} />
            </ContextDropdown>
        </FilterContainer>
    );
};

export default React.memo(SearchFilter);
