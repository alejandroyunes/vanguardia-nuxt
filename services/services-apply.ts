import axios from 'axios'

type ServicesFormModel = {
  name: string
  email: string
  service_item: string
  service: string
}

const apiToken = import.meta.env.VITE_API
const apiUrl = import.meta.env.VITE_API_URL

export const formPostServicesPost = (data: ServicesFormModel) => {
  return axios
    .post(`${apiUrl}/paginaspro-service/`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}
