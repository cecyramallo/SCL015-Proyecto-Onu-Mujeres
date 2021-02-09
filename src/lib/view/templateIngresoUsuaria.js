export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p>Iniciar sesión</p>
        <input type="email" placeholder="E-mail">
        <input type="password" placeholder="Contraseña">
        <a href="#/resetpassword">¿Has olvidado tu contraseña?</a>
        <button id="login-button">ENTRAR</button>
        <p><strong>¿No tienes cuenta? <a href="#/signup">Regístrate</strong></a></p>
    `;
    divLogIn.innerHTML = viewLogIn;
    const loginForm = divLogIn.querySelector('#login-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLogIn;
};
