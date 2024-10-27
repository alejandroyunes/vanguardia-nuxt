import axios from 'axios'

const apiAccessToken = import.meta.env.VITE_API

export type ServicesFormModel = {
  name: string
  email: string
  serviceItem: string
  service: string
}

const api = 'https://api.paginasprofesionales.co'

export const formPostServicesPost = (data: ServicesFormModel) => {
  return axios
    .post(`${api}/paginaspro-services/`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiAccessToken}`
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}
