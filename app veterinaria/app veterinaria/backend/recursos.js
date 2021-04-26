module.exports = {
  mascotas: [
    { tipo: "Perro", nombre: "Trosky0", dueno: "Pedro" },
    { tipo: "Gato", nombre: "luffy", dueno: "Luis" },
    { tipo: "Perro", nombre: "pulgas", dueno: "Abril" },
    { tipo: "Pájaro", nombre: "Filomeno", dueno: "Ricardo" },
  ],
  veterinarias: [
    { nombre: "Alexandra", apellido: "Perez", documento: "1234567890" },
    { nombre: "Alexander", apellido: "Gómez", documento: "4234569999" },
    { nombre: "Julián", apellido: "Madrid", documento: "555666777" },
    { nombre: "Naryie", apellido: "Vasquez", documento: "1000666777" },
  ],
  duenos: [
    { nombre: "Alejandra", apellido: "Ramirez", documento: "12343333890" },
    { nombre: "Alexandra", apellido: "Fernandez", documento: "4234564321" },
    { nombre: "Abril", apellido: "Martinez", documento: "456666777" },
    { nombre: "Luis", apellido: "Marquez", documento: "9000666777" },
  ],
  consultas: [
    {
      mascota: 0,
      veterinaria: 0,
      fechaCreacion: new Date(),
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "diagnostico",
    },
    {
      mascota: 0,
      veterinaria: 0,
      fechaCreacion: new Date(),
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "diagnostico",
    },
  ],
};
