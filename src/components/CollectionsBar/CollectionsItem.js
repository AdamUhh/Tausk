//* Styles

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this
import { IconButtonLink } from '../global/ExportedStylings';

//* Styled

const CollectionsItem = ({ icon, goTo }) => {
    const countref = useRef(0); // remove this
    console.log('CollectionsItem.js: ' + countref.current++); // remove this

    //Todo: Add Tooltip and check if it performs badly
    return (
        <IconButtonLink radius='8px' margin='6px 5px' to={'/' + goTo}>
            {icon}
        </IconButtonLink>
    );
};

export default CollectionsItem;
