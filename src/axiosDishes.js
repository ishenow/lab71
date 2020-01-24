import axios from 'axios';

const axiosDishes = axios.create({
    baseURL: 'https://mydishes-768fc.firebaseio.com/'
});


export default axiosDishes;
