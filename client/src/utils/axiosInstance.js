import axios from "axios";

const liveUrl = "https://moodmate-ai-gexx.onrender.com/api/v1";
const localUrl = "http://localhost:7000/api/v1";

const axiosInstance = axios.create({
  baseURL: liveUrl,
  withCredentials: true, // because you're using cookies for JWT
});

export default axiosInstance;
