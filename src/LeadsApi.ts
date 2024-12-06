import axios from "axios";


const leads = axios.create({
    baseURL: 'http://ec2-98-82-33-217.compute-1.amazonaws.com:8000/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "Allow",
    }
  });

export default leads