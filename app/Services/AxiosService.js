// @ts-ignore
export const sandboxAPI = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 5000
})