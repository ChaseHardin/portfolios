import React from 'react';

export const AppContext = React.createContext({
    isAuthenticated: false
});

export const AppProvider = props => {
    const [appState, setAppState] = React.useState({
        isAuthenticated: false
    });

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {props.children}
        </AppContext.Provider>
    )
}