<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

// defineProps<{ msg: string }>()

const count = ref(0)
const countMessage = () => `contador de tareas: ${count.value}` 

const cardSubTitle = `Organizador`
const iconcheck = `pi pi-check`

const isSpinner = ref(true)

setTimeout(() => isSpinner.value = !isSpinner.value, 1500)

defineExpose({
  countMessage
})
</script>

<template>
  <Card class="card">

    <template #title>
      Home
      <i id= "brujula" class="pi pi-compass"></i>
      <i v-if="isSpinner" id="load" class="pi pi-spin pi-spinner"></i>
      <i v-if="!isSpinner" id="load" class="pi pi-mobile"></i>
    </template>
    <template #subtitle>{{ cardSubTitle }}</template>
    <template #content>
      <Button :label="countMessage()" :icon="iconcheck" @click="count++" />
      <button @click="count++" >mi boton</button>
      <div>
        <p>
          

          {{ new Date().toString() }}
        </p>
      </div>

      <p>
        Calendario
      </p>
      <p>
        Actividades
      </p>
      <p class="read-the-docs">Administrar el día, conocer eventos próximos y mucho más al alcance de la mano.</p>
    </template>
  </Card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.card {
  width: 25em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  border: gray solid;
}

#load {
  margin-left: 65%;
  font-size: 2rem;
} 
 #brujula {
   margin: lef 3%;
   font-size: 2rem;
 }
</style>