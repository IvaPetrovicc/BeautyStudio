<template>
 <div class="relative overflow-x-auto mt-[10vh] md:mx-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Ime Korisnika
          </th>
          <th scope="col" class="px-6 py-3">
            Vrsta termina
          </th>
          <th scope="col" class="px-6 py-3">
            Vrijeme
          </th>
          <th scope="col" class="px-6 py-3">
            Otkažite termin
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in appointments" :key="app.uid" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ app.user }}
          </th>
          <td class="px-6 py-4">
            {{ app.type }}
          </td>
          <td class="px-6 py-4">
            {{ new Date(app.time).toLocaleString() }}
          </td>
          <td class="px-6 py-4">
            <button @click="showConfirmationModal = true; uid = app.uid">Otkaži</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" :class="{ 'is-active': showConfirmationModal }">
      <div class="modal-background"></div>
      <div class="modal-content box custom-modal-content">
        <p class="custom-modal-text">Jeste li sigurni da želite otkazati termin?</p>
        <div class="buttons is-right">
          <button class="button is-danger" @click="deleteAppointment(uid)">Da</button><br><br>
           <div class="spacer"></div>
          <button class="button" @click="showConfirmationModal = false">Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocs, query, where, collection, deleteDoc,doc} from "firebase/firestore";
import { db } from "../main.js";
//import { async } from "@firebase/util";

export default {
    data() {
        return {
            user: false,
            appointments: [],
            uidList: [],
            showConfirmationModal: false,
            uid: '',

        }
    },
    mounted() {
        this.user = this.$store.state.user.loggedIn;
        if (!this.user) {
            this.$router.push('/auth');
        }
        this.getAppointments();
        console.log(this.$store.state.user.data);
    },
    methods: {
        async getAppointments() {
            let q;
            if (this.$store.state.user.data.email === 'admin@gmail.com') {
                q = query(collection(db, "termin"));
            } else {
                q = query(collection(db, "termin"), where("user_id", "==", this.$store.state.user.data.email));
            }

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.appointments.push({
                    uid: doc.id,
                    user: doc.data().displayName ? doc.data().displayName : doc.data().user_id,
                    type: doc.data().app_type,
                    time: doc.data().time.seconds * 1000
                });
            });
            this.appointments.sort((a, b) => {
                return b.time - a.time;
            });
        },
        async deleteAppointment(uid) {
            // remove the appointment from the database
            await deleteDoc(doc(db, "termin", uid));
            // remove the appointment from the local appointments array
            const index = this.appointments.findIndex(app => app.uid === uid);
            if (index !== -1) {
                this.appointments.splice(index, 1);
            }
            this.showConfirmationModal = false; 
        },

        
    
    }
}
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.is-active {
  display: block;
}

.modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.modal-content {
  margin: 10% auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f8f8f8;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.custom-modal-content {
  width: 500px; 
  background-color: rgb(239, 201, 207) 
}
.spacer {
  width: 20px;

}

.custom-modal-text {
  margin-bottom: 10px;
}
</style>