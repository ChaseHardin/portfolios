import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from '../App';

test('allows a user to login to the app', () => {
    const {getByPlaceholderText, queryByText} = render(<App />);

    expect(queryByText('Hello World')).toBeNull();

    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');

    changeInput(username, 'test-user');
    changeInput(password, 'login-123');
    
    fireEvent.click(queryByText('Login'));
    
    expect(queryByText('Hello World')).toBeTruthy();
});

const changeInput = (input, value) => fireEvent.change(input, { target: { value } });