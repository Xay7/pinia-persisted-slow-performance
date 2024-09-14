import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';

export const useTestStore = defineStore(
  'test-store',
  () => {
    const nonPersistedLargeObject = shallowRef<Record<string, any>>({});

    const persistedValue = ref<number[]>([]);

    for (let index = 0; index < 10; index++) {
      nonPersistedLargeObject.value[index.toString()] = [];
      for (let i = 0; i < 1000000; i++) {
        nonPersistedLargeObject.value[index.toString()].push({
          id: i,
          name: `Item ${i}`,
          value: Math.random(),
          timestamp: new Date().toISOString(),
        });
      }
    }

    function updatePersistedState() {
      persistedValue.value.push(1);
    }

    return { nonPersistedLargeObject, persistedValue, updatePersistedState };
  },
  // When store persistance is removed performance is good
  {
    persist: {
      key: 'test',
      storage: localStorage,
      pick: ['persistedValue'],
    },
  }
);
