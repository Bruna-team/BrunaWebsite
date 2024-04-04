<script setup lang="ts">
import { ref } from 'vue';
const links = ref([
  {
    name: 'Inicio',
    link: '/'
  },
  {
    name: 'Nosotros',
    link: '/nosotros'
  },
  {
    name: 'Contacto',
    link: '/contacto'
  },
  {
    name: 'Soporte',
    link: '/soporte'
  },
])
</script>

<template>
  <v-layout>
    <v-app-bar
      color="primario"
      density="compact"
    >
      <template v-slot:prepend>
        <img src="./assets/logo.svg"/>
      </template>

      <v-app-bar-title class="text-white">
        <h1 class="text-h4 font-bruna">
          Bruna
        </h1>
      </v-app-bar-title>

      <template v-slot:append>
        <v-row justify="center" no-gutters>
          <template v-for="(link, l) in links" :key="l">
            <RouterLink :to="link.link">
              <v-btn
                class="mx-2"
                color="white"
                rounded="xl"
                variant="text"
              >
                {{ link.name }}
              </v-btn>
            </RouterLink>
          </template>
        </v-row>
      </template>
    </v-app-bar>

    <v-main>
      <RouterView />
      <v-footer color="secundario" class="justify-center">
        <div>
          <v-btn
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
            prepend-icon="mdi-"
          >
            Telegram
          </v-btn>
        </div>
        <p class="text-center">
          @Copyright BrunaTeam 2024
        </p>
      </v-footer>
    </v-main>
  </v-layout>
</template>
