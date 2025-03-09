import axios, { AxiosInstance } from 'axios'

class HttpUtil {
  _instance: AxiosInstance
  constructor(baseURL: string) {
    this._instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    })
  }
}

const httpUtil = new HttpUtil('http://localhost:3000')

httpUtil._instance.interceptors.request.use(
  (config) => {
    const token = uni.getStorageSync('x-auth-token')
    if (token) config.headers['x-auth-token'] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpUtil._instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default httpUtil
