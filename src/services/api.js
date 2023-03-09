import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnote-api-vgpn.onrender.com',
})
