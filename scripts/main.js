
    // Botón copiar
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.nextElementSibling.innerText;
        navigator.clipboard.writeText(code);
        btn.textContent = '¡Copiado!';
        setTimeout(() => btn.textContent = 'Copiar', 1500);
      });
    });

const hour = new Date().getHours();
let welcomeMessage = document.querySelector(".welcomemessage");

// IF

// if (hour < 12) {
//   welcomeMessage.textContent = "¡Buenos días! Es un gran horario para estudiar ¡Sigue así!"
// } else if (hour < 18) {
//   welcomeMessage.textContent = "¡Buenas tardes! Es un gran horario para estudiar ¡No olvides merendar!"
// } else {
//   welcomeMessage.textContent = "¡Buenas noches! Es un gran horario para estudiar ¡No olvides descansar!"
// }
 
//SWITCH
let timeOfDay;

if (hour < 12) {
  timeOfDay = "morning";
} else if (hour < 18) {
  timeOfDay = "afternoon";
} else {
  timeOfDay = "night";
}

switch (timeOfDay) {
  case "morning":
    welcomeMessage.textContent = "¡Buenos días! Es un gran horario para estudiar ¡Sigue así!";
    break;
  case "afternoon":
    welcomeMessage.textContent = "¡Buenas tardes! Es un gran horario para estudiar ¡No olvides merendar!";
    break;
  case "night":
    welcomeMessage.textContent = "¡Buenas noches! Es un gran horario para estudiar ¡No olvides descansar!";
    break;
}
  