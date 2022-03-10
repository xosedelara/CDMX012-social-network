// eslint-disable-next-line no-unused-vars
const registration = `
    <header class="logo-PS" id="logoPS"><img class="petspace-logo" id="petspaceLogo" src="img/PetSpaceLogo.png" ></header>
    <section class="reg-box">
        <p>Crea un usuario y contraseña</p>
        <form id="registrationForm" action="submit">
            <input placeholder="Nombre" id="regName"></input><br>
            <input placeholder="Correo electrónico" id="regEmail"></input><br>
            <input type="password" placeholder="Contraseña" id="regPW"></input><br><br>
            <button id="seePasswordReg"> <i class="fas fa-eye" ></i></button>
            <button class="register-button" type="button" id="regBtn">Regístrate</button>
        </form>
        <p>o regístrate con:</p>
        <img src="img/facebook.png" class="facebook-logo">
        <img src="img/google.png" class="gmail-logo">
    </section>
    <br>
    <a href="#" onclick="onNavigate('/'); return false;"><button class="register-button">Regresa al inicio</button></a>
`;
