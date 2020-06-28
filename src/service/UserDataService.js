import axios from 'axios'

class UserDataService {


    retrieveAllUser() {
        const username = window.sessionStorage.getItem("username");
         const url1 = axios.get(`http://localhost:8082/userDetails/`+username,);
         const url2 = axios.get(`http://localhost:8082/api/image/`+username,);
         return Promise.all([url1,url2]);
    }
}

export default new UserDataService()
