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
// import { Link } from 'react-router-dom'; //Link -> Redirect using <a></a>  ~ useHistory -> Redirect forcefully
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {
    const emailRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Stop user from spamming the SignUp Button
    const [message, setMessage] = useState('');
    const { resetPassword } = useAuth(); // take out the signup function

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch (error) {
            setError('Failed to reset password');
        }
        setLoading(false);
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
                            Reset Password
                        </h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {message && <Alert variant='success'>{message}</Alert>}
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

                            <Button
                                disabled={loading}
                                style={{ marginTop: `1.5rem`, width: `100%` }}
                                type='submit'
                            >
                                Reset Password
                            </Button>
                        </Form>
                        <div
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                        >
                            <Link
                                to='/login'
                                style={{
                                    color: 'royalblue',
                                }}
                            >
                                Login
                            </Link>
                            <span> if you've got an account</span>
                            <br />
                            OR
                            <br />
                            <Link to='/signup' style={{ color: 'royalblue' }}>
                                Sign Up!
                            </Link>
                            <span> if you need one!</span>
                        </div>
                    </CardBody>
                </Card>

                <div
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '0.5rem',
                    }}
                ></div>
            </CenteredContainer>
        </BGContainer>
    );
};

export default ForgotPassword;
