//* Styles
import GlobalStyle from './themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';

//* Components
import Notes from './components/Notes/Notes.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Login from './authentication/Login';
import Profile from './authentication/Profile.js';
import SignUp from './authentication/SignUp';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';
import PrivateRoute from './authentication/PrivateRoute';

//* Hooks, React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './contexts/AuthContext';
import { getDataPost } from './redux/ducks/notesDuck';
import { useEffect } from 'react';

//* Styled

function App() {
    const theme = useSelector((state) => state.themeDuck.theme);

    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser && currentUser.uid) {
            dispatch(getDataPost(currentUser.uid));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />

                    <PrivateRoute
                        path='/Notes/:folderidurl?/:groupidurl?/:cardidurl?/:taskidurl?'
                        component={Notes}
                    />
                    {/* <PrivateRoute exact path='/Collab' component={Collab} />
                    {/* <PrivateRoute exact path='/Calendar' component={Calendar} /> */}

                    {/* Profile */}
                    <PrivateRoute
                        path='/update-profile'
                        component={UpdateProfile}
                    />
                    <PrivateRoute path='/profile' component={Profile} />

                    {/* Authentication */}
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route path='/forgot-password' component={ForgotPassword} />

                    {/* Error page not found */}
                    <PrivateRoute component={Dashboard} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
