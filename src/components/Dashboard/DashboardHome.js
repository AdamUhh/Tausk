//* Styles
import { DashboardHomeContainer } from './DashboardStylings';

//* Components
import DashboardHeader from './DashboardHeader';
import DashboardItems from './DashboardItems/DashboardItems';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
const DashboardHome = () => {
    const countref = useRef(0); // remove this
    console.log('DashboardHome.js: ' + countref.current++); // remove this

    //Todo: Maybe remove dashboardHome and move its return to just Dashboard
    return (
        <DashboardHomeContainer>
            <DashboardHeader />
            <DashboardItems />
        </DashboardHomeContainer>
    );
};

export default DashboardHome;
