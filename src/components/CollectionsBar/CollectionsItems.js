//* Components
import CollectionsItem from './CollectionsItem';

//* Hooks, React
import { useRef } from 'react' // remove this 
import React from 'react';

//* SVG
import HomeIcon from '../SVG/HomeIcon';
import NotesIcon from '../SVG/NotesIcon';
import CollabIcon from '../SVG/CollabIcon';
import CalendarIcon from '../SVG/CalendarIcon';


const CollectionItems = () => {
    const countref = useRef(0) // remove this 
    console.log('CollectionItems.js: ' + countref.current++); // remove this
    return (
        <>
            <CollectionsItem icon={<HomeIcon />} goTo='' />
            <CollectionsItem icon={<NotesIcon />} goTo='Notes' />
            <CollectionsItem icon={<CollabIcon />} goTo='Collab' />
            <CollectionsItem icon={<CalendarIcon />} goTo='Calendar' />
        </>
    );
};

export default React.memo(CollectionItems);
