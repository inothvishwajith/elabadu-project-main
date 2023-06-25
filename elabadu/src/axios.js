import axios from "axios";

const instance = axios.create({
    baseURL: ''//'http://localhost:5001/elabadunew/us-central1/api' //API URL


});

export default instance;