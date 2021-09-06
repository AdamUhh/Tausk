//* Styles
import {
    DashboardHeaderContainer,
    DateContainer,
    WelcomeMsg,
    WelcomeMsgUser,
} from './DashboardStylings';

//* Components

//* Hooks, React
import React from 'react';
import { useRef } from 'react'; // remove this
import { useSelector } from 'react-redux';

//* SVG

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
];

const currentDate = () => {
    let date = new Date();

    return `${dayNames[date.getDay()]}, ${date.getDate()} ${
        monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
};

const getTimeOfDay = () => {
    let timeOfDay = new Date().getHours();

    //* 5pm
    if (timeOfDay >= 16) return 'Evening';
    //* 12pm
    else if (timeOfDay >= 12) return 'Afternoon';
    else return 'Morning';
};

const DashboardHeader = () => {
    const countref = useRef(0); // remove this
    console.log('DashboardHeader.js: ' + countref.current++); // remove this

    const folderState = useSelector((state) => state.notesDuck.folders);
    const settingState = useSelector((state) => state.notesDuck.settings) || '';

    //Todo: Fix the width of skeletons on mobile view
    if (folderState['SkeletonFolder']) {
        return (
            <>
                <div className='skeleton skeleton-dashboard-header'></div>
                <div className='skeleton skeleton-dashboard-header-date'></div>
            </>
        );
    }

    return (
        <DashboardHeaderContainer>
            <WelcomeMsg>
                Good {getTimeOfDay()}
                <WelcomeMsgUser> {settingState.username}</WelcomeMsgUser>
            </WelcomeMsg>
            <DateContainer>{currentDate()}</DateContainer>
        </DashboardHeaderContainer>
    );
};

export default DashboardHeader;
