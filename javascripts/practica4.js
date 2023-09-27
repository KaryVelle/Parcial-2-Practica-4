let objeto = {
    nombre: "Karina",
    esGay: true,
    edad: 23,
    libros: [{
         nombre: "Tokio Blues",
         autorap: "Murakami",
         autornom: "Haruki",
         anio_de_publi: "1987",
         editorial: "TusQuets",
    },
       {
        nombre: "El Perfume",
        autorap: "Süskind",
         autornom: "Patrick",
         anio_de_publi: "1985",
         editorial: "SeixBarral",
       },
       {
        nombre: "La novela de Safo. Ningún hombre canta",
        autorap: "Krislov",
        autornom: "Alexander",
        anio_de_publi: "1998",
        editorial: "Valdemar",
       }
    ],
    pasatiempos: ["Comer", "Cocinar", "Dormir"] ,
    contacto: {
      redesSociales: "@vellenawethwebdesign",
      movil: "5579387815",
      correo: "kary.velle@gmail.com"
    },
  
    imprimirDatos: function() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad:${this.edad}`);
      console.log(`Es gei: ${this.esGay}`);
      console.log(`Pasatiempos: ${this.pasatiempos}`);
      console.log(`Contacto:`);
      console.log(`Sociales: ${this.contacto.redesSociales}`);
      console.log(`celular: ${this.contacto.movil}`);
      console.log(`Correo: ${this.contacto.correo}`);
      console.log(`Libros Favoritos: ${this.libros}`);
    },

    imprimirLibros: function() {
        console.log("Libro 1 :")
        console.log(`Nombre: ${this.libros[0].nombre}`);
        console.log(`Apellido Autor: ${this.libros[0].autorap}`);
        console.log(`Nombre Autor: ${this.libros[0].autornom}`);
        console.log(`Año de Publicaión: ${this.libros[0].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[0].editorial}`);

        console.log("Libro 2 :")
        console.log(`Nombre: ${this.libros[1].nombre}`);
        console.log(`Apellido Autor: ${this.libros[1].autorap}`);
        console.log(`Nombre Autor: ${this.libros[1].autornom}`);
        console.log(`Año de Publicaión: ${this.libros[1].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[1].editorial}`);

        console.log("Libro 3 :")
        console.log(`Nombre: ${this.libros[2].nombre}`);
        console.log(`Apellido Autor: ${this.libros[2].autorap}`);
        console.log(`Nombre Autor: ${this.libros[2].autornom}`);
        console.log(`Año de Publicaión: ${this.libros[2].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[2].editorial}`);
        
      }

  }
  
  console.log(objeto);
  console.log(objeto.nombre);
  console.log(objeto.pasatiempos[2]);
  console.log(objeto.contacto.correo);
  objeto.imprimirDatos();
objeto.imprimirLibros();