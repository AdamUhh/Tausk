//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG

const NotesLayout = () => {
    const countref = useRef(0); // remove this
    console.log('NotesLayout.js: ' + countref.current++); // remove this
    return <div></div>;
};

export default NotesLayout;
