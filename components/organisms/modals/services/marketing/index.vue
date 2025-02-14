<script lang="ts" setup>
import './services-modal.scss'
import { ref } from 'vue'
import { reset } from '@formkit/core'
import { AxiosError } from 'axios'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import CrossSvg from '~/components/icons/CrossSvg.vue'

import Button from '~/components/atoms/buttons/fill/index.vue'
import { formPostServicesPost } from '~/services/services-apply'

const name = ref('')
const email = ref('')

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

type ServicesMarketingProps = {
  toggleModal: () => void
  serviceItem: string
  service: string
}

type ServicesFormModel = {
  services: {
    name: string
    email: string
  }
}

const { toggleModal, serviceItem, service } = defineProps<ServicesMarketingProps>()

const submitHandler = async (form: ServicesFormModel ) => {
  isLoading.value = true
  isConfirmInfoVisible.value = true

  const formData = {
    ...form.services,
    service_item: serviceItem,
    service
  }

  try {
    isSuccess.value = false
    isRequestError.value = false
    isResponseError.value = false

    await formPostServicesPost(formData)

    isLoading.value = false
    isSuccess.value = true

    reset('services-modal-form')

  } catch (error) {
    isLoading.value = false

    const axiosError = error as AxiosError<Error>

    if (axiosError.response) {
      isResponseError.value = true
    } else if (axiosError.request) {
      isRequestError.value = true
    }
  }

  isLoading.value = false
}

</script>

<template>
  <section class="services-modal">
    <div class="services-modal-inner">
      
      <div @click="toggleModal" class="services-modal-btn-close">
        <CrossSvg />
      </div>

      <div class="services-modal-form" v-if="!isConfirmInfoVisible">

        <h2 class="services-modal-title"><span>Solicitar servicio: </span>{{ serviceItem }}</h2>

        <FormKit type="form" id="services-modal-form" #default="{ state }" @submit="submitHandler">

          <FormKit type="group" name="services">
           
            <div class="form-group-input">
              <label for="name">Nombre</label>
              <FormKit
                type="text"
                placeholder="Juan Pérez"
                maxLength="30"
                minLength="3"
                v-model="name"
                name="name"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="email">Email</label>
              <FormKit
                type="email"
                placeholder="juanperez@email.com"
                v-model="email"
                name="email"
                validation="required|email" />
            </div>

            <Button :disabled="!state.valid" type="submit" text="Solicitar servicio" />
          </FormKit>

        </FormKit>

      </div>

      <div v-else class="services-modal-info">

        <h3 v-show="isLoading" class="services-modal-title">Cargando...</h3>
        <p v-show="isLoading" class="services-modal-description">Cargando...</p>
        <Loading v-show="isLoading" />

        <h3 v-show="isSuccess" class="services-modal-title">¡Gracias por contactarnos!</h3>
        <p v-show="isSuccess" class="services-modal-description">En breve nos pondremos en contacto contigo.</p>

        <h3 v-show="isResponseError" class="services-modal-title">¡Ups! Algo salió mal</h3>
        <p v-show="isResponseError" class="services-modal-description">Intenta nuevamente</p>
        
        <h3 v-show="isRequestError" class="services-modal-title">¡Ups! Algo salió mal</h3>
        <p v-show="isRequestError" class="services-modal-description">Intenta nuevamente</p>

        <Button v-show="!isLoading" class="btn-submit" @click="toggleModal" text="Cerrar" />

      </div>
    </div>
  </section>
</template>

