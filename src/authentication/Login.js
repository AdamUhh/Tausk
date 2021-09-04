// @ts-nocheck
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

import { useHistory } from 'react-router-dom'; //Link -> Redirect using <a></a>  ~ useHistory -> Redirect forcefully
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Stop user from spamming the SignUp Button
    const history = useHistory();

    const { login } = useAuth(); // take out the signup function

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (error) {
            setError('Failed to login');
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
                            Login
                        </h2>
                        <p
                            style={{
                                margin: ' 0 0 1.5rem',
                                textAlign: 'center',
                                fontSize: '0.8em',
                                fontWeight: '600',
                            }}
                        >
                            Please login to continue
                        </p>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup id='email'>
                                {/* <FormLabel>Email</FormLabel> */}
                                <FormControl
                                    type='email'
                                    ref={emailRef}
                                    required
                                    placeholder='Email'
                                ></FormControl>
                            </FormGroup>
                            <FormGroup id='password'>
                                {/* <FormLabel>Password</FormLabel> */}
                                <FormControl
                                    type='password'
                                    ref={passwordRef}
                                    required
                                    placeholder='Password'
                                ></FormControl>
                            </FormGroup>
                            <div
                                style={{
                                    width: '100%',
                                    textAlign: 'right',
                                    fontSize: '0.8em',
                                    fontWeight: '600',
                                }}
                            >
                                <Link to='/forgot-password'>
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button
                                variant='primary'
                                disabled={loading}
                                style={{ marginTop: `1.5rem`, width: `100%` }}
                                type='submit'
                            >
                                Login
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
                        Need an account? <Link to='/signup'>Sign Up!</Link>
                    </div>
                </Card>
            </CenteredContainer>
        </BGContainer>
    );
};

export default Login;
