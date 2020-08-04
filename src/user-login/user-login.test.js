import React from 'react';
import { render, fireEvent, screen, waitForElement, act, queryByPlaceholderText, getByText } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

test('allows a user to login to the app', async () => {
    const resp = {
        data: {
            username: 'something'
        }
    };

    axios.get.mockResolvedValue(resp);

    const { getByPlaceholderText, queryByText } = render(<App />);

    expect(queryByText('Hello World')).toBeNull();
    expect(queryByText('Username and/or password is incorrect.')).toBeNull();

    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');

    changeInput(username, 'test-user');
    changeInput(password, 'login-1234');

    act(() => {
        fireEvent.click(queryByText('Login'))
    })

    await waitForElement(() => screen.getByText('Login'))

    expect(queryByText('Hello World')).toBeTruthy()
});

test('prevents a user from logging into the app when providing invalid creds', async () => {
    const resp = { data: {} };

    axios.get.mockResolvedValue(resp);

    const { getByPlaceholderText, queryByText, getByText } = render(<App />);

    expect(queryByText('Hello World')).toBeNull();

    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');

    changeInput(username, 'invalid-username');
    changeInput(password, 'invalid-password');

    act(() => {
        fireEvent.click(queryByText('Login'))
    })

    await waitForElement(() => screen.getByText('Login'))

    expect(queryByText('Hello World')).toBeNull();
    expect(getByPlaceholderText('Username')).toBeTruthy();
    getByText('Username and/or password is incorrect.');
});

const changeInput = (input, value) => fireEvent.change(input, { target: { value } });