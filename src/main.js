import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/tailwind.css";
import store from "./store/index";
import router from "./router/index";

//Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import '@fortawesome/fontawesome-free/css/all.css';


const firebaseConfig = {
  apiKey: "AIzaSyD2VFwf0P5vMZ09OkHX8_fiITKvsV8phGw",
  authDomain: "beautystudio-67e90.firebaseapp.com",
  projectId: "beautystudio-67e90",
  storageBucket: "beautystudio-67e90.appspot.com",
  messagingSenderId: "551325760811",
  appId: "1:551325760811:web:09927f2df5b57721cc996e",
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore();

export { auth, db };

//Datepicker
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouse,
  faCalendarCheck,
  faUser,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouse,
  faCalendarCheck,
  faUser,
  faRightToBracket,
  faRightFromBracket
);

// Mounts Vue App
const app = createApp(App);
app.component("Datepicker", Datepicker);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router, axios, VueAxios);
app.use(store);
app.mount("#app");
