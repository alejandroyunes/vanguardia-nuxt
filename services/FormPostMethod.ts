import axios from 'axios'

const apiAccessToken = import.meta.env.VITE_API

type FormModel = {
  name: string
  phone: string
}

const api = 'https://api.paginasprofesionales.co'

export const formPost = (data: FormModel) => {
  return axios
    .post(`${api}/drpuerta/`, data, {
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
