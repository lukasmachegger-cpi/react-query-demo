import axios from 'axios'

export const remoteCommandsApi = axios.create({
    baseURL: "http://localhost:8035/api/v1",
    timeout: 10000, // 10s
})
