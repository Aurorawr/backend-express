
// Lista temporal para almacenar usuarios registrados
// Esto en producción va a cambiar porque NUNCA SE DEBEN DE ALMACENAR CONTRASEÑAS EN TEXTO PLANO
const users = [
  {
    id: 1,
    email: "luis@example.com",
    contraseña: "Luis1234",
    nombre: "Luis",
    apellido: "Quintana",
    rol: "admin"
  }
];

export const obtenerUsuarioPorEmailYContrasena = async (email, password) => {
  return users.find(
    (u) => u.email === email && u.contraseña === password
  );
}
