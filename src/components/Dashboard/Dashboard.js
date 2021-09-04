//* Styles

//* Components
import Main from '../global/Main';
import ModalController from '../Modal/ModalController';
import DashboardHome from './DashboardHome';

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG

const Dashboard = () => {
    const countref = useRef(0); // remove this
    console.log('Dashboard.js: ' + countref.current++); // remove this
    return (
        <>
            <ModalController />
            <Main title='Dashboard'>
                <DashboardHome />
            </Main>
        </>
    );
};

export default Dashboard;
