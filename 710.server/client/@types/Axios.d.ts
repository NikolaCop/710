class Axios {
  defaults: AxiosRequestOptions
  create(options: AxiosConfig): Axios { }
  get(url: string, options?: AxiosRequestOptions): Promise<AxiosResponse>
  post(url: string, payload: any, options?: AxiosRequestOptions): Promise<AxiosResponse>
  put(url: string, payload: any, options?: AxiosRequestOptions): Promise<AxiosResponse>
  delete(url: string, options?: AxiosRequestOptions): Promise<AxiosResponse>
}

declare const axios = new Axios

interface AxiosConfig extends AxiosRequestOptions {
  baseURL: string
  timeout?: number = 8000
  withCredentials?: boolean = false
}

interface AxiosRequestOptions {
  headers?: any
  params?: any
  query?: any
}

interface AxiosResponse {
  data: any
}

interface AxiosError {
  status: number
  message: string
  response: AxiosResponse
}
