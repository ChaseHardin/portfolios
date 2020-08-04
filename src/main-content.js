import React from 'react';
import { AppContext } from './app-context';
import Container from 'react-bootstrap/Container';
import { UserLogin } from './user-login/user-login';

export const MainContent = () => {
    const {appState} = React.useContext(AppContext);

    const renderContent = () => {
        return appState.isAuthenticated ? <h1>Hello World</h1> : <UserLogin />;
    };

    return (
        <Container>
            {renderContent()}
        </Container>
    )
}