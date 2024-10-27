<script lang="ts" setup>
import './contact-form.scss'
import { ref } from 'vue'
import { AxiosError } from 'axios'
import { reset } from '@formkit/core'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import { formPostServicesPost } from '~/services/services-apply'
import Button from '~/components/atoms/buttons/fill/index.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isResponseError = ref(true)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

type Props = {
  contact: {
    name: string
    email: string
    message: string
  }
}

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

    reset('contact-page')

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
  <section class="contact-form">

    <div class="contact-form-inner" v-if="!isConfirmInfoVisible">

      <FormKit type="form" id="contact-page" #default="{ state }" @submit="submitHandler">

        <FormKit type="group" name="contact">

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="name">Nombre</label>
              <FormKit
                type="text"
                placeholder="Ana"
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
                placeholder="ana@email.com"
                v-model="email"
                name="email"
                validation="required|email" />
            </div>
          </div>

          <div class="form-group-textarea">
            <label for="message">Mensaje</label>
            <FormKit
              type="textarea"
              name="message"
              placeholder="Mensaje"
              maxLength="85"
              v-model="message"
              validation="required" />
          </div>

          <Button :disabled="!state.valid" text="Enviar" type="submit" /> 

        </FormKit>

      </FormKit>

    </div>

    <div v-else class="contact-form-info">

      <h3 v-show="isLoading" class="contact-form-title">Cargando...</h3>
      <p v-show="isLoading" class="contact-form-description">Cargando...</p>
      <Loading v-show="isLoading" />

      <h3 v-show="isSuccess" class="contact-form-title">Mensaje enviado</h3>
      <p v-show="isSuccess" class="contact-form-description">Gracias por contactarnos, en breve nos pondremos en contacto contigo.</p>

      <h3 v-show="isResponseError" class="contact-form-title">Error</h3>
      <p v-show="isResponseError" class="contact-form-description">Hubo un error al enviar el mensaje, por favor intenta de nuevo.</p>

      <h3 v-show="isRequestError" class="contact-form-title">Error</h3>
      <p v-show="isRequestError" class="contact-form-description">Hubo un error al enviar el mensaje, por favor intenta de nuevo.</p>

      <Button v-show="!isLoading && !isSuccess" text="Cerrar" @click="isConfirmInfoVisible = false" />

    </div>

  </section>
</template>
