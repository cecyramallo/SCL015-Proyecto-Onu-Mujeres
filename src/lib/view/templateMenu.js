export const menu = () => {
  const divMenu = document.createElement("div");
    const viewMenu = `
      <ul>
        <li><a href="#/">Bienvenida</a></li>
        <li><a href="#/"logIn>Ingreso de Usuaria</a></li>
        <li><a href="#/"signUp>Registro de Usuaria</a></li>
        <li><a href="#/"channels>Canales</a></li>
        <li><a href="#/"profile>Perfil</a></li>
        <li><a href="#/"community>Comunidad</a></li>
        <li><a href="#/"inbox>Mensajes</a></li>
      </ul>
      `;
    divMenu.innerHTML = viewMenu;
    return viewMenu;
  };


//   <ul>
//   <li><a href="#/">Bienvenida</a></li>
//   <li><a href="#/language">Idioma</a></li>
//   <li><a href="#/"logIn>Ingreso de Usuaria</a></li>
//   <li><a href="#/"passwordReset>Recuperar Contraseña</a></li>
//   <li><a href="#/"signUp>Registro de Usuaria</a></li>
//   <li><a href="#/"tutorial>Tutorial</a></li>
//   <li><a href="#/"editProfile>Editar Perfil</a></li>
//   <li><a href="#/"channels>Canales</a></li>
//   <li><a href="#/"profile>Perfil</a></li>
//   <li><a href="#/"community>Comunidad</a></li>
//   <li><a href="#/"communitySearch>Buscador de la Comunidad</a></li>
//   <li><a href="#/"inbox>Mensajes</a></li>
//   <li><a href="#/"message>Enviar Mensaje</a></li>
// </ul>
  