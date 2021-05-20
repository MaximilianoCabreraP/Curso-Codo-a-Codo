function mostrarMensaje(event) {
	event.preventDefault();

	const fullname = document.getElementById("fullname");
	const email = document.getElementById("email");
	const consulta = document.getElementById("consulta");
	let texto = `Gracias <b>${fullname.value}</b>.<br> 
                 Ya registramos tu consulta: <b>${consulta.value}</b>.<br>
                 Y se va a enviar a enviar al mail: <b>${email.value}</b>`;
	let mensaje = document.getElementById("mensaje");
	mensaje.innerHTML = texto;
	mensaje.className = "alert-success";
	fullname.value = "";
	email.value = "";
	consulta.value = "";
	return false;
}
