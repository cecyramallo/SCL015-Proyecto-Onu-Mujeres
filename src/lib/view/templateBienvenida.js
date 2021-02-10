//import { router.js } from './lib/view/templateBienvenida';
export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
       
        <div id="welcome">
        <h1 class="welcome" >Bienvenida</h1>
        <img src="./assets/logo.png" class="logo-bienvenida">
        <button id="enter-button">Entrar</button> </div>
    `;
    divWelcome.innerHTML = viewWelcome;
    const loginForm = divWelcome.querySelector('#enter-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divWelcome;
};
