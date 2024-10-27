<script lang="ts" setup>
import './contact-promo-modal.scss'
import { ref } from 'vue'
import { reset } from '@formkit/core'
import { AxiosError } from 'axios'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import CrossSvg from '~/components/icons/CrossSvg.vue'

import Button from '~/components/atoms/buttons/fill/index.vue'
// import { formPost } from '~/services/services-apply'

const name = ref()
const email = ref()

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

type Props = {
  contact: {
    name: string
    phone: string
  }
}

const { toggleModal } = defineProps<{
  toggleModal: () => void
}>()

const submitHandler = async (createForm: Props) => {
  isLoading.value = true
  isConfirmInfoVisible.value = true

  try {
    isSuccess.value = false
    isRequestError.value = false
    isResponseError.value = false

    // const { contact } = createForm
    // await formPost(contact)

    isLoading.value = false
    isSuccess.value = true

    reset('contact-modal-form')

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
  <section class="contact-promo-modal">
    <div class="contact-promo-modal-inner">
      
      <div @click="toggleModal" class="contact-promo-modal-btn-close">
        <CrossSvg />
      </div>

      <div class="contact-promo-modal-form" v-if="!isConfirmInfoVisible">

        <h2 class="contact-promo-modal-title"><span>¡Aprovecha esta promoción </span> ahora!</h2>

        <FormKit type="form" id="contact-promo-modal-form" #default="{ state }" @submit="submitHandler">

          <FormKit type="group" name="contact">
           
            <div class="form-group-input">
              <label for="name">Nombre</label>
              <FormKit type="text" placeholder="Juan Pérez" maxLength="30" minLength="3" v-model="name" name="name"
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

            <Button :disabled="!state.valid" type="submit" text="Quiero la promo" />
          </FormKit>

        </FormKit>

      </div>

      <div v-else class="contact-promo-modal-info">

        <h3 v-show="isLoading" class="contact-promo-modal-title">Cargando...</h3>
        <p v-show="isLoading" class="contact-promo-modal-description">Cargando...</p>
        <Loading v-show="isLoading" />

        <h3 v-show="isSuccess" class="contact-promo-modal-title">¡Gracias por contactarnos!</h3>
        <p v-show="isSuccess" class="contact-promo-modal-description">En breve nos pondremos en contacto contigo.</p>

        <h3 v-show="isResponseError" class="contact-promo-modal-title">¡Ups! Algo salió mal</h3>
        <p v-show="isResponseError" class="contact-promo-modal-description">Intenta nuevamente</p>
        
        <h3 v-show="isRequestError" class="contact-promo-modal-title">¡Ups! Algo salió mal</h3>
        <p v-show="isRequestError" class="contact-promo-modal-description">Intenta nuevamente</p>

        <Button v-show="!isLoading" class="btn-submit" @click="toggleModal" text="Cerrar" />

      </div>
    </div>
  </section>
</template>
