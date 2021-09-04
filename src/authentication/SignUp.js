import { useRef, useState } from 'react';
import {
    BGContainer,
    Card,
    CardBody,
    Form,
    FormGroup,
    FormControl,
    Button,
    Alert,
    StyledLink as Link,
} from './authStyles.js';
import CenteredContainer from './CenteredContainer.js';

import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Stop user from spamming the SignUp Button
    const history = useHistory();

    const { signup } = useAuth(); // take out the signup function

    async function handleSubmit(e) {
        e.preventDefault();

        // ? password validation
        if (passwordRef.current.value !== passwordConfirmationRef.current.value)
            return setError('Passwords do not match!');

        try {
            setError('');
            setLoading(true);
            await signup(
                usernameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value
            );
            history.push('/');
        } catch (e) {
            setError('Failed to create an account!');
        }
    }

    return (
        <BGContainer>
            <CenteredContainer>
                <Card>
                    <CardBody>
                        <h2
                            style={{
                                textAlign: 'center',
                                fontSize: 'calc(1.325rem + .9vw',
                            }}
                        >
                            Sign Up
                        </h2>
                        <p
                            style={{
                                margin: ' 0 0 1.5rem',
                                textAlign: 'center',
                                fontSize: '0.8em',
                                fontWeight: '600',
                            }}
                        >
                            Signup to start using the app!
                        </p>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup id='nickname'>
                                <FormControl
                                    type='text'
                                    ref={usernameRef}
                                    required
                                    placeholder='Username'
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='email'>
                                <FormControl
                                    type='email'
                                    ref={emailRef}
                                    required
                                    placeholder='Email'
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='password'>
                                <FormControl
                                    type='password'
                                    ref={passwordRef}
                                    required
                                    placeholder='Password (atleast 6 digits)'
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='password-confirmation'>
                                <FormControl
                                    type='password'
                                    ref={passwordConfirmationRef}
                                    required
                                    placeholder='Password Confirmation'
                                ></FormControl>
                            </FormGroup>
                            <Button
                                variant='primary'
                                disabled={loading}
                                style={{ marginTop: `1.5rem`, width: `100%` }}
                                type='submit'
                            >
                                Sign Up
                            </Button>
                        </Form>
                    </CardBody>
                    <div
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            margin: '-5px 0 0.5rem 0',
                        }}
                    >
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </Card>
            </CenteredContainer>
        </BGContainer>
    );
};

export default SignUp;
