<template>
    <div class="about">
    <head>
      <title>Font Awesome Icons</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="about-page">
      <h2><b>MOTIVACIJA ZA PROJEKT</b></h2>
      <br /><br />
      <p>
        I mi smo korisnice beauty usluga pojedinih salona ljepote i ponekad
        zakazivanje termina iziskiva 'male brige'.<br />
        Inspirirani time, odlučile smo da će tema našeg projekta biti baš ta, jer
        bi i u stvarnom životu ova usluga <br />
        olakšala zakazivanje termina za brojne usluge.
      </p>
      <div class="team-grid">
        <div v-for="member in teamMembers" :key="member.id" class="team-member">
          <img :src="member.image" alt="Team Member" class="profile-photo" />
          <h3>
            <b>{{ member.name }}</b>
          </h3>
          <br />
          <p>{{ member.position }}</p>
          <p>{{ member.description }}</p>
          <a
            :href="`https://www.github.com${member.button}`"
            target="_blank"
            role="button"
            id="git"
            ><i class="fa fa-github" style="font-size: 36px"></i
          ></a>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            name: "IVA PETROVIĆ",
            position: "Studentica 3.godine studija Informatike.",
            description: "Dolazim iz Ljubuškog i imam 24 godine.",
            image: require("../assets/IVA.jpg"),
            button: "/IvaPetrovicc",
          },
          {
            id: 2,
            name: "ANA KORDIĆ",
            position: "Studentica 3.godine studija Informatike.",
            description: "Dolazim iz Ljubuškog i imam 21 godinu.",
            image: require("../assets/ANA.jpg"),
            button: "/anaakordic",
          },
        ],
      };
    },
  };
  </script>
  
  
  
  <style scoped>
  .about-page {
  /* existing style rules */
  background-image: url('');
  background-size: cover; /* adjusts the image size to cover the container */
  background-position: center center; /* centers the image horizontally and vertically */
}

  .about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    font-family: Verdana, sans-serif;
  }
  
  .team-grid {
    display: grid;
    /*background-color: rgba(227, 227, 235, 0.205);*/
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 100px;
    width: 1300px;
    height: 500px;
    margin-top: 110px;
  }
  
  .team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(127, 127, 136, 0.027);
  }
  
  .profile-photo {
    width: 200px;
    height: 235px;
    border-radius: 50%;
    margin-bottom: 40px;
    margin-top: 40px;
  }
  
  #git {
    padding: 15px;
    border: none;
    border-radius: 20px;
  }
  h2 {
    font-size: 30px;
  }
  </style>