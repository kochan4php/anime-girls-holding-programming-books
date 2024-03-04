import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: ` Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    },
});

export default api;
