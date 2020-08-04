import axios from 'axios';
// todo => will build out authentication system after prototype is built
const VALID_USERNAME = 'test-user';
const VALID_PASSWORD = 'login-1234';

export const validateUser = async (username, password) => {
    const isValid = username === VALID_USERNAME && password === VALID_PASSWORD;

    if (isValid) {
        return await axios.get('http://localhost:4000/get-user').then(res => res.data);
    }
}