import axios from 'axios';
import { setInterceptors } from './interceptor';


function createInstance() {
    return axios.create({
        baseURL: 'http://localhost:8080/'
    })
}

function createInstanceWithAuth() {
    const instance = axios.create({
        baseURL: 'http://localhost:8080/'
    });
    return setInterceptors(instance);
}


const instance = createInstance();
const instanceAuth = createInstanceWithAuth();
export { instance, instanceAuth };