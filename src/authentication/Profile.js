import { BGContainer, Card, CardBody, Button, Alert } from './authStyles.js';
import CenteredContainer from './CenteredContainer.js';
import ArrowLeft from './SVG/ArrowLeft.js';

import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;

    &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }
`;

const Profile = () => {
    const [error, setError] = useState('');
    const history = useHistory();

    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login');
        } catch (error) {
            setError('Failed to Logout');
        }
    }

    return (
        <BGContainer>
            <CenteredContainer style={{ backgroundColor: 'green' }}>
                <Card>
                    <ArrowLeft link='/' />
                    <CardBody>
                        <h2
                            style={{
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                                fontSize: 'calc(1.325rem + .9vw)',
                            }}
                        >
                            Profile
                        </h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <strong>Email: </strong> {currentUser.email}
                        <StyledLink
                            to='/update-profile'
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                        >
                            Update Profile
                        </StyledLink>
                    </CardBody>
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '0.5rem',
                        }}
                    >
                        <Button variant='link' onClick={handleLogout}>
                            Log Out
                        </Button>
                    </div>
                </Card>
            </CenteredContainer>
        </BGContainer>
    );
};

export default Profile;
