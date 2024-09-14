// Components
import App from './App.vue';
import vuetify from './plugins/vuetify';
// Composables
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { loadFonts } from './plugins/webfontloader';

// Create the Pinia store
const store = createPinia();
store.use(piniaPluginPersistedState);

// Create the Vue application
const app = createApp(App);

// Load fonts before using Vuetify
loadFonts();

// Use plugins
app.use(store);
app.use(vuetify);

// Mount the application
app.mount('#app');
