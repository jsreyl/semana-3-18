<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ServicesC from './components/ServicesC.vue';
import TeamC from './components/TeamC.vue';

export default {
  name: 'App',
  components:{
    ServicesC,
    TeamC,
  },
  data(){
    return{
      service: [
        {
          title:"Arquitectura de Servicios Tecnológicos",
          descripcion:"Busca apoyar a la Dirección de Tecnologías y Sistemas de la Información o a quien haga sus veces con lineamientos y estándares orientados a la definición y diseño de la Arquitectura de la infraestructura tecnológica que se requiere para soportar los Sistemas de Información y el portafolio de servicios.",
          url:"https://www.mintic.gov.co/arquitecturati/630/w3-propertyvalue-8095.html",
          image: require("./assets/servicio1.png")
        },
        {
          title:"Operación de Servicios Tecnológicos",
          descripcion:"Busca estructurar e implementar los procesos de operación, monitoreo y supervisión de los Servicios Tecnológicos.",
          url:"https://www.mintic.gov.co/arquitecturati/630/w3-propertyvalue-8096.html",
          image: require("./assets/servicio2.png")
        },
        {
          title:"Gestión de la calidad y seguridad de los Servicios Tecnológicos",
          descripcion:"Busca la definición y gestión de los controles y mecanismos para alcanzar los niveles requeridos de seguridad y trazabilidad de los Servicios Tecnológicos.",
          url:"https://www.mintic.gov.co/arquitecturati/630/w3-propertyvalue-8098.html",
          image: require("./assets/servicio3.png")}
      ],
      equipo: [
        {
          codigo: 1,
          nombre: "Alejandro Díaz Moscoso",
          descripcion: "Vive en Armenia, Quindío. Este joven de 27 años es químico de la Universidad del Quindío, y Magíster en Ciencias-Química de la Universidad de los Andes. Entre sus pasatiempos están: Mirar series/películas (ahora con el curso MisiónTIC2022 ni tiempo tiene); hacer cursos virtuales (MisiónTIC2022, Cambio Climático y Huella de Carbono, Diplomado en Excel que consta de 4 cursos, y dos idiomas); ir a cine; salir a tomar café (solo o con amigos); comer ensalada de frutas; y de vez en cuando salir a rumbear. No le gusta tomar. Actualmente está criando un polluelo llamado Duke",
          rol: "Software builder",
          image: require("./assets/alejo.jpg")
        },
        {
          codigo: 2,
          nombre: "Juan Sebastián Rey Lancheros",
          descripcion: "Vive en Bogotá D.C. Este joven de 22 años es físico de la Universidad Nacional de Colombia. Entre sus pasatiempos están: Leer (de todo un poco porque gusta de variar géneros, pero sus favoritos son los libros de fantasía, tipo 'El señor de los anillos'); bailar; y jugar videojuegos (¿y a quién no?). Aunque parezca tímido, es un muchacho tranquilo y muy empático. Su mascota es una linda perrita llamada Totó.",
          rol: "Fullstack developer",
          image: require("./assets/juan.jpg")
        },
        {
          codigo: 3,
          nombre: "Martha Isabel Betancourt Castañeda",
          descripcion: "Vive en Popayán, Cauca. Esta joven es ingeniera de sistemas de la Corporación universitaria Remington. Entre sus pasatiempos están: Estudiar y aprender. Es una persona activa, trabajadora y siempre le pone la mejor actitud a cada situación que se le presenta. Actualmente trabaja de noche por lo que valora mucho la oportunidad de estudiar en el día.",
          rol: "Software analyst",
          image: require("./assets/martha.jpg")
        },
      ]
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
