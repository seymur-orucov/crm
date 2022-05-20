import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyD59wnFxfk2qYhU96lZNY0h2jDVIhZev1c",
  authDomain: "vue-crm-181f8.firebaseapp.com",
  projectId: "vue-crm-181f8",
  storageBucket: "vue-crm-181f8.appspot.com",
  messagingSenderId: "624282198151",
  appId: "1:624282198151:web:49469afcec2fc25b539822",
  measurementId: "G-473P9HDNSH",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
