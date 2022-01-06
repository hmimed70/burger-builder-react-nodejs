import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/'
});
instance.defaults.withCredentials = true;

instance.interceptors.response.use(response => {
    return response ;
  }, error => {
      if(error.response.status === 401) {
        localStorage.removeItem('isAuthenticate');
        localStorage.removeItem('userId');
      }
      return Promise.reject(error);
  });

export default instance;