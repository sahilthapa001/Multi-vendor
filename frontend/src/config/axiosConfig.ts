import axios, { AxiosInstance } from "axios";

const lwpAxios: AxiosInstance = axios.create({
	baseURL: "http://localhost:8000/api/v1",
	timeout: 5000,
});

export default lwpAxios;
