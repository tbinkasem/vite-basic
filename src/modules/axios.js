import axios from 'axios'

const defaultAxios = axios.create({
  baseURL: '/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const install = ({ app, store }) => {
  app.config.globalProperties.$axios = defaultAxios
  app.config.globalProperties.$http = defaultAxios
}
