<template>
  <v-container class="fill-height">
    <v-list>
      <v-list-subheader>Click any item, app will slow down and become unresponsive</v-list-subheader>
      <v-list-subheader>Peristed state - {{ persistedValue }}</v-list-subheader>
      <v-list-item v-for="(item, index) in items" :key="index" @click="handleClick(item)">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTestStore } from './store';

const testStore = useTestStore();
const { persistedValue, nonPersistedLargeObject } = storeToRefs(testStore);

const items = [
  { title: 'Item 1', subtitle: 'Subtitle 1' },
  { title: 'Item 2', subtitle: 'Subtitle 2' },
  { title: 'Item 3', subtitle: 'Subtitle 3' },
  { title: 'Item 4', subtitle: 'Subtitle 4' },
  { title: 'Item 5', subtitle: 'Subtitle 5' },
];

function handleClick(item: { title: string; subtitle: string }) {
  testStore.updatePersistedState();
  console.log(testStore.nonPersistedLargeObject, testStore.persistedValue);
}
</script>
