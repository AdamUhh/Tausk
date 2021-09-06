import { useRef, useState } from 'react';
import {
    BGContainer,
    Card,
    CardBody,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
    Alert,
    StyledLink as Link,
} from './authStyles.js';
import CenteredContainer from './CenteredContainer.js';

import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Stop user from spamming the SignUp Button
    const history = useHistory();

    const { currentUser, updateEmail, updatePassword } = useAuth(); // take out the signup function

    function handleSubmit(e) {
        e.preventDefault();

        // ? password validation
        if (passwordRef.current.value !== passwordConfirmationRef.current.value)
            return setError('Passwords do not match!');

        const promises = [];
        setLoading(true);
        setError('');

        // ? Check if input -> emailRef is not the same email as old email
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        // ? Check if input -> passwordRef is not the same password as old password
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        // ? Waits for all the async methods in promises to complete before routing to '/'
        Promise.all(promises)
            .then(() => {
                history.push('/');
            })
            .catch(() => {
                setError('Failed to update account');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <BGContainer>
            <CenteredContainer>
                <Card>
                    <CardBody>
                        <h2
                            style={{
                                textAlign: 'center',
                                margin: ' 0 0 1.5rem',
                                fontSize: 'calc(1.325rem + .9vw',
                            }}
                        >
                            Update Profile
                        </h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup id='email'>
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type='email'
                                    ref={emailRef}
                                    required
                                    defaultValue={currentUser.email}
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='password'>
                                <FormLabel>Password</FormLabel>
                                <FormControl
                                    type='password'
                                    ref={passwordRef}
                                    placeholder='Leave blank to keep the same'
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='password-confirmation'>
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl
                                    type='password'
                                    ref={passwordConfirmationRef}
                                    placeholder='Leave blank to keep the same'
                                ></FormControl>
                            </FormGroup>
                            <Button
                                variant='primary'
                                disabled={true}
                                // disabled={loading}
                                style={{ marginTop: `1.5rem`, width: `100%` }}
                                type='submit'
                            >
                                Update - Currently Not working!
                            </Button>
                        </Form>
                    </CardBody>
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            margin: '0 0 0.5rem 0',
                        }}
                    >
                        <Link to='/profile'>Cancel</Link>
                    </div>
                </Card>
            </CenteredContainer>
        </BGContainer>
    );
};

export default UpdateProfile;
