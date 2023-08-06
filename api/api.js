import axios from "axios"
import { useAuth } from "./userAuth"

const API_URL = "http://172.19.0.14:8000"


export const API = {
    root: () => GetMethod({ url: `${API_URL}` }),
    user: () => GetMethod({ url: `${API_URL}/user`, headers }),
    signin: (body) => PostMethod({ url: `${API_URL}/signin`, body }),
    deploy: () => GetMethod({ url: `${API_URL}/deploy`, headers }),
    deploySpawn: () => PostMethod({ url: `${API_URL}/deploy`, headers }),
}

const GetMethod = async (props) => {
    try {
        const headers = props.headers ?? {}; // Set headers to an empty object if not provided
        const response = await axios.get(props.url, headers)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log("fetch error", err)
                // throw new Error(err.response.data);
            });
        return response.data;
    } catch (error) {
        console.log(error)
        // throw new Error(error.message);
    }
}

const PostMethod = async (props) => {
    try {
        const headers = props.headers ?? {};
        const body = props.body ?? {};
        const response = await axios.post(props.url, body, headers)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log("fetch error", err)
                // throw new Error(err.response.data);
            });
        return response;
    } catch (error) {
        console.log(error)
        // throw new Error(error.message);
    }
}

const PatchMethod = async ({ url, body }) => {
    try {
        const response = await axios.patch(url, body)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}

const DeleteMethod = async ({ url
}) => {
    try {
        const response = await axios.delete(url)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}



