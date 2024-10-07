<script lang="ts" setup>
import './contact-modal.scss'
import { ref } from 'vue'
import { reset } from '@formkit/core'
import { AxiosError } from 'axios'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import CrossSvg from '~/components/icons/CrossSvg.vue'
import Button from '~/components/atoms/buttons/fill/index.vue'
import { formPost } from '~/utils/apis/FormPostMethod'

const name = ref()
const phone = ref()
const message = ref()

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

    const { contact } = createForm
    await formPost(contact)

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
  <section class="contact-modal">
    <div class="contact-modal-inner">
      
      <div @click="toggleModal" class="contact-modal-btn-close">
        <CrossSvg />
      </div>

      <div class="contact-modal-form" v-if="!isConfirmInfoVisible">

        <h2 class="contact-modal-title"><span>¡Aprovecha esta promoción </span> ahora!</h2>

        <FormKit type="form" id="contact-modal-form" #default="{ state }" @submit="submitHandler">

          <FormKit type="group" name="contact">
           
            <div class="form-group">
              <label for="name">Nombre</label>
              <FormKit type="text" placeholder="Ana Perez" maxLength="30" minLength="3" v-model="name" name="name"
                validation="required" />
            </div>

            <div class="form-group">
              <label for="tel">Teléfono</label>
              <FormKit maxLength="10" minLength="10" inputmode="numeric" name="phone"
                oninput="this.value = this.value.replace(/\D/g, '')"
                :validation="[['matches', /^.{10,10}$/], ['required']]" v-model.number="phone" type="text"
                placeholder="301 456 7890" />
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <FormKit
                type="textarea"
                name="message"
                placeholder="Mensaje"
                maxLength="85"
                v-model="message"
                validation="required" />
            </div>

            <Button :disabled="!state.valid" type="submit" text="Solicitar promo" />
          </FormKit>

        </FormKit>

      </div>

      <div v-else class="contact-modal-info">

        <h3 v-show="isLoading" class="contact-modal-title">Cargando...</h3>
        <p v-show="isLoading" class="contact-modal-description">Espera un momento por favor</p>
        <Loading v-show="isLoading" />

        <h3 v-show="isSuccess" class="contact-modal-title">Gracias por contactarnos</h3>
        <p v-show="isSuccess" class="contact-modal-description">En breve nos pondremos en contacto contigo</p>

        <h3 v-show="isResponseError" class="contact-modal-title">Hubo un error con el envío</h3>
        <p v-show="isResponseError" class="contact-modal-description">Por favor intenta nuevamente en unos minutos</p>

        <h3 v-show="isRequestError" class="contact-modal-title">Error de comunicación</h3>
        <p v-show="isRequestError" class="contact-modal-description">Por favor, asegúrate de tener una conexión de internet estable y vuelve a intentarlo. Si el problema persiste, por favor contacta al soporte para obtener asistencia.</p>

        <Button v-show="!isLoading" class="btn-submit" @click="toggleModal" text="Cerrar" />

      </div>
    </div>
  </section>
</template>
