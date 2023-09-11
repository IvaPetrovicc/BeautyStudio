<template>
    <br>
    <br>
    <br>
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Welcome to Beauty Studio</h2>
            <p class="mt-3 text-gray-600">We provide professional beauty services to help you look and feel your best.</p>
            <div class="mt-8">
              <a href=""  @click="navigateToRezervacija" target=”_blank” class="bg-gray-800 text-gray-100 py-2 px-4 rounded-md hover:bg-gray-700">Book an Appointment</a>
            </div>
          </div>
          <div class="mt-8 md:mt-0 md:w-1/2">
            <img src="https://www.thepostoakhotel.com/img/wellness/salon-hero-7.jpg" alt="Beauty Studio" class="w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Services section -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap mt-8">
          <div class="w-full md:w-1/3 xl:w-1/4 p-6">
           
          </div>
    <div>
      <div class="bg-gray-100 py-8">
        <div class="container px-6 mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Beauty Studio</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <br>
                <img src="https://www.instyle.com/thmb/xKCqj1pUeUcBoMuBvGg9rn53QDI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/279417197_529043688630871_2337743083923937756_n-008e3646bb584b068fc6ce62f6c5a668.jpg" alt="nail icon" class="w-54 h-54">
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Nail Care</h3>
              <p class="text-gray-600 text-center">We offer a variety of nail services to help you look and feel your best, including manicures, pedicures, and nail art.</p>
        
            </div>
            <div class="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <img src="https://livetruelondon.com/wp-content/uploads/2022/07/blonde-balayage-creamy-blonde-balayage-gorgeous-balayage-sunkissed-balayage-natural-balayage-best-london-hair-salon-central-london-salon-soho-balayage-1221x1536.jpeg" alt="hair icon" class="w-54 h-54">
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Hair Care</h3>
              <p class="text-gray-600 text-center">Our experienced stylists can help you achieve the perfect haircut, color, and style to enhance your natural beauty.</p>
            </div>
            <div class="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
              <div class="mb-4">
                <img src="https://i.pinimg.com/564x/d1/c2/fd/d1c2fd1c82faf82a0ecaa14e0b4f08e7.jpg" alt="spa icon" class="w-54 h-54">
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Make up</h3>
              <p class="text-gray-600 text-center">Treat your makeup like jewelry for the face. Play with colors, shapes, structure - it can transform you.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white py-8">
        <div class="container px-6 mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Manicures and Pedicures</h3>
              <p class="text-gray-600 mb-4">Our nail technicians are skilled at providing luxurious manicures and pedicures, complete with massage and nail art.</p>
              <ul class="list-disc text-gray-600 pl-4">
                <li>Gel Polish</li>
                <li>Nail Art</li>
                <li>French Manicure</li>
                <li>Acrylic Nails</li>
          
                <br>
                <br>
                
                
                  <button class="bg-gray-500 text-gray-100 py-2 px-4 rounded-md hover:bg-pink-700" @click="showManiPrices = !showManiPrices">Pricing list</button>
                
                <a v-if="showManiPrices">
                  <li>Gel Polish: $20</li>
                  <li>Nail Art: $5 per nail</li>
                  <li>French Manicure: $25</li>
                  <li>Acrylic Nails: $35</li>
                  
                </a>

              </ul>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Hair treatments</h3>
              <p class="text-gray-600 mb-4">Our nail technicians are skilled at providing luxurious manicures and pedicures, complete with massage and nail art.</p>
              <ul class="list-disc text-gray-600 pl-4">
                <li>Hair coloring</li>
                <li>Festive hairstyles</li>
                <li>Hair cutting</li>
                <li>Hair repair treat</li>
                <li>Hair extensions</li>
                <br>
                <button class="bg-gray-500 text-gray-100 py-2 px-4 rounded-md hover:bg-pink-700" @click="showHairPrices = !showHairPrices">Pricing list</button>
                <a v-if="showHairPrices">
                  <li>Hair coloring - $50</li>
                  <li>Festive hairstyles - $75</li>
                  <li>Hair cutting - $30</li>
                  <li>Hair repair treat - $40</li>
                  <li>Hair extensions - $100</li>
                
                  
                </a>
              </ul>
            </div>

            <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Make up</h3>
              <p class="text-gray-600 mb-4">Our nail technicians are skilled at providing luxurious manicures and pedicures, complete with massage and nail art.</p>
              <ul class="list-disc text-gray-600 pl-4">
                <li>Full glam make up</li>
                <li>Classic make up</li>
                <li>Bridal make up</li>
                <li>Make up school</li>
                <br>
                <br>
                <button class="bg-gray-500 text-gray-100 py-2 px-4 rounded-md hover:bg-pink-700" @click="showMakeupPrices = !showMakeupPrices">Pricing list</button>
                <a v-if="showMakeupPrices">
                  <li>Full glam make up - $80</li>
                  <li>Classic make up - $50</li>
                  <li>Bridal make up - $150</li>
                  <li>Make up school - $200</li>
                </a>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>

    <footer class="footer" text="center">
    <div class="container"  text="center">
      <div class="row">
        <div class="col-md-4">
          <a href="#"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;
          <a href="#"><i class="fab fa-facebook-f"></i></a>&nbsp;&nbsp;
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-md-4">
          <p>Copyright © 2023
            <a href="#"> BeautyStudio&nbsp;</a>| All rights reserved.</p>
        </div>
       
      </div>
    </div>
  </footer>

    </template>

<script>
export default {
  data() {
    return {
      showManiPrices: false,
      showHairPrices: false,
      showMakeupPrices: false,
    };
  },
  methods: {
    navigateToRezervacija() {
      this.$router.push({ name: 'Rezervacija' })
    }
  }
}


</script>

<style>
.footer {
  background-color: #f2f2f2;
  color: #777;
  padding: 30px 0;
  text-align: center;
}

.footer a {
  color: #777;
  margin-right: 15px;
}

.footer a:hover {
  color: #333;
}

.footer p {
  font-size: 14px;
  margin-bottom: 0;
}
</style>   