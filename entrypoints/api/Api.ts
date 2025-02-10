import axios from "axios";

axios.defaults.baseURL = 'https://gng.daouoffice.com/api';

const login = async (username:string, pwd:string) => {
    const params = {"username":username,"password":pwd,"captcha":"","returnUrl":""}
    const response = await axios.post('/login', params);
    return response.data;
}

export default {
    login
}