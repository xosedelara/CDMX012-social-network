const registration = `
    <section class="reg-box">
        <p>Crea un usuario y contraseña</p>
        <form id="registrationForm" action="submit">
            <input placeholder="Nombre" id="regName"></input>
            <input placeholder="Correo electrónico" id="regEmail"></input>
            <input type="password" placeholder="Contraseña" id="regPW"></input>
            <input type="password" placeholder="Confirma contraseña" id="regPW2"></input>
            <button class="register-button" type="submit" id="regBtn">Regístrate</button>
        </form>
        <p>o regístrate con:</p>
        <img src="img/facebook.png" class="facebook-logo">
        <img src="img/google.png" class="gmail-logo">
    </section>
    <a href="#" onclick="onNavigate('/'); return false;"><button class="register-button">Regresa al inicio</button></a>
`