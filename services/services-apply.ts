import axios from 'axios'

type ServicesFormModel = {
  name: string
  email: string
  service_item: string
  service: string
}

const api = import.meta.env.VITE_API

export const formPostServicesPost = (data: ServicesFormModel) => {
  return axios
    .post(`${api}/paginaspro-service/`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api}`
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}
