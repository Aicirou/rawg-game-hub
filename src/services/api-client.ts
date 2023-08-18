import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd1b1e69de48e4b3e9a85f01b96fb68f9'
    }
});
