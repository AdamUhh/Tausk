//* Styles
import { CollectionContainer, CollectionWrapper } from './CollectionStyling';
import { IconButton } from '../global/ExportedStylings';
import { MenuIconContainerInverse } from '../Nav/NavStylings';

//* Components
import CollectionsItems from './CollectionsItems';

//* Hooks, React
import React, { useRef } from 'react'; // remove this

//* SVG
import MenuIcon from '../SVG/MenuIcon';

const CollectionsBar = ({ hasSidebar, handleHideSide }) => {
    const countref = useRef(0); // remove this
    console.log('CollectionsBar.js: ' + countref.current++); // remove this

    return (
        <CollectionContainer>
            {hasSidebar && (
                <MenuIconContainerInverse>
                    <IconButton onClick={handleHideSide} transparent>
                        <MenuIcon width='35' />
                    </IconButton>
                </MenuIconContainerInverse>
            )}
            <CollectionWrapper>
                <CollectionsItems />
            </CollectionWrapper>
        </CollectionContainer>
    );
};

export default React.memo(CollectionsBar);
