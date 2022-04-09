import {User} from "../interfaces/interfaces"
import axios, { AxiosError } from 'axios';
const API_URL = 'http://localhost:4000';
export const loginUser=async (user:User)=>{
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
}