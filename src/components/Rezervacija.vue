<template>
    <div class="min-h-screen w-screen my-14">
        <div
            class="relative w-screen h-[42vh] md:h-[50vh] flex items-center justify-center md:justify-start bg-hero-pattern-mobile md:bg-hero-pattern bg-cover bg-right bg-no-repeat">

            <!-- Background filter on small devices -->
            <div class="block md:hidden absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.40)]"></div>

            <!-- Hero text -->
            <h1 h1 class="mx-auto text-center md:text-left md:leading-[3rem] text-gray-700 text-2xl font-bold drop-shadow-lg shadow-black z-10 md:w-[50%] lg:w-[30%] md:text-4xl md:pl-10">
    Beauty comes from inside, inside the beauty salon.
            </h1>
        </div>

        <div class="min-h-[50vh] w-[90%] md:w-2/3 flex-col mx-auto items-center justify-center space-y-8 pt-10">
            <!-- Odabir vrste termina -->
            <div>
                <label for="countries" class="block mb-2 text-sm font-medium text-dark">Odaberite
                    termin</label>
                <select v-model="type" id="countries"
                    class="bg-gray-700 border border-gray-00 text-white-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
                    <option selected value="">Odabir vrste termina</option>
                    <option value="Nokti">Nadogradnja Noktiju gelom</option>
                    <option value="TrajniLak">Nokti - trajni lak</option>
                    <option value="Pedikura">Pedikura</option>
                    <option value="ManiPedi">Manikura + Pedikura</option>
                    <option value="Uklanjanje">Uklanjanje gela/trajnog laka</option>
                    <option value="Obrve">Uređivanje obrva</option>
                    <option value="Šminkanje">Šminkanje</option>
                    <option value="Farbanje kose + šišanje">Farbanje kose + šišanje</option>
                    <option value="Svečana frizura">Svečana frizura</option>
                    <option value="Feniranje">Feniranje</option>
                
                    
                </select>
            </div>

            <!-- Datum i vrijeme termina -->
            <Datepicker v-model="date" :min-time="{ hours: 8, minutes: 0 }" :max-time="{ hours: 18, minutes: 0 }"
                minutes-increment="30" hide-offset-dates :is-24="true" :disabled-week-days="[0]" :disabled-dates="bookedDates[type]" :clearable="false">
            </Datepicker>

            <!-- Success message  -->
            <div v-if="success" class="flex items-center bg-pink-700 text-white text-sm font-bold px-4 py-3"
                role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
                <p>Termin koji ste odabrali je dostupan</p>
            </div>

            <!-- Error message  -->
            <div v-if="error" class="flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3 px-6 py-4 border-t-4 border-pink-700 rounded-b shadow-md" role="alert">
                
                <p>Termin koji ste odabrali nije dostupan</p>
            </div>

            <!-- Error message  -->
            <div v-if="type === ''" class=" flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3 px-6 py-4 border-t-4 border-pink-700 rounded-b shadow-md"
                role="alert">
                
                   
                <p>Molimo odaberite vrstu termina</p>
            </div>

            <!-- Button error message -->
            <div v-if="user.loggedIn === false"
                class="flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3 px-6 py-4 border-t-4 border-pink-700 rounded-b shadow-md" role="alert">
                
                <p>Morate biti prijavljeni kako biste rezervirali termin</p>
            </div>

            <!-- Button -->
            <button :disabled="user.loggedIn === false || error === true || type === ''" @click="addAppointment"
                class="bg-pink-700 hover:bg-white-700 disabled:bg-gray-600 disabled:text-light float-right text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Rezerviraj termin
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../main.js';

export default {
    data() {
        return {
            date: ref(new Date()),
            type: '',
            error: false,
            success: false,
            user: false,
            appointments: [],
            appointmentsDates: [],
            reservations: [],
            bookedDates: {
                'Nokti': ['2022-05-05', '2022-05-06'],
                'TrajniLak': ['2022-05-07', '2022-05-08'],
                'Pedikura': ['2022-05-09', '2022-05-10'],
                'ManiPedi': ['2022-05-11', '2022-05-12'],
                'Uklanjanje': ['2022-05-13', '2022-05-14'],
                'Obrve': ['2022-05-15', '2022-05-16'],
                'Šminkanje': ['2022-05-17', '2022-05-18'],
                'Farbanje kose + šišanje': ['2022-05-19', '2022-05-20'],
                'Svečana frizura': ['2022-05-21', '2022-05-22'],
                'Feniranje': ['2022-05-23', '2022-05-24']
             }
        }
    },
    mounted() {
        //Get user from store
        this.user = this.$store.state.user;
        console.log(this.user)
        //Set date to tommorow at 8:00
        this.date = this.resetDate();
        //Get all appointments
        this.getAppointments();
    },
    watch: {
        date: function (val) {
            console.log(this.resetDate().getTime(), val.getTime());
            if (this.appointmentsDates.includes(val.getTime())) {
                this.error = true;
                this.success = false;
            } else if (this.resetDate().getTime() >= val.getTime()) {
                this.error = true;
                this.success = false;
            } else {
                this.error = false;
                this.success = true;
            }
        }
    },
    methods: {
        //Fetch collection of appointments from firebase
        async getAppointments() {
            const appointments = await getDocs(collection(db, "termin"));
            appointments.forEach((doc) => {
                this.appointments.push(doc.data());
                this.appointmentsDates.push(doc.data().time.seconds * 1000);
                console.log(this.appointments);
            });
        },
        async addAppointment() {
            await setDoc(doc(collection(db, "termin")), {
                app_type: this.type,
                time: this.date,
                user_id: this.user.data.email,
                displayName: this.user.data.displayName,
            });

            this.date = this.resetDate();
            this.type = "";
            alert("Vaš termin je uspješno rezerviran. Molimo vas da dođete na vrijeme. Hvala!")
        },
        resetDate() {
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 1);
            currentDate.setHours(8, 0, 0, 0);
            return currentDate;
        },

        bookTreatment() {
            const { type, date } = this;
            if (!type) {
                this.error = true;
                return;
            }

            if (!date) {
                this.error = true;
                return;
            }

            if (this.bookedDates[type].includes(date.toISOString())) {
                this.error = true;
                return;
                }

            this.success = true;
            this.error = false;
    
            this.bookedDates[type].push(date.toISOString());
            this.type = '';
            this.date = null;
        },   

        bookAppointment() {
            if (this.type === '') {
                this.error = true;
                return;
            }

            if (!this.date) {
                this.error = true;
                return;
            }
            
            const bookedDatesForType = this.bookedDates[this.type];
            if (bookedDatesForType && bookedDatesForType.includes(this.date)) {
                this.error = true;
                return;
            }
            this.success = true;
            this.error = false;

  },


    },
}


</script>