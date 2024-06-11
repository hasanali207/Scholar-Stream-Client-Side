import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://scholar-stream-server.vercel.app',
    
  });
const useAxiosPublic = () => {
  return axiosPublic    
}

export default useAxiosPublic