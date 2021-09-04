import { Container } from './authStyles.js';

const CenteredContainer = ({ children }) => {
    return (
        <Container
            style={{
                minHeight: '100vh',
            }}
        >
            <div style={{ width: '100%', maxWidth: '450px' }}>{children}</div>
        </Container>
    );
};

export default CenteredContainer;
