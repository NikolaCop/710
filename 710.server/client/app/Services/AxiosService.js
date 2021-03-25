const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

export const api = axios.create({
  baseURL: base,
  timeout: 3000,
  withCredentials: true
})
