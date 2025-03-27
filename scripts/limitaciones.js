function limitacionCelularCodigoPostal() {
    const codigoPostal = document.getElementById("codigo-postal");
    const celular = document.getElementById("numero-celular");

    if (codigoPostal) {
        codigoPostal.addEventListener("keypress", function (e) {
            if (!/^\d$/.test(e.key)) {
                e.preventDefault(); // Bloquea letras y símbolos
            }
        });
    }

    if (celular) {
        celular.addEventListener("keypress", function (e) {
            if (!/^[\d+]$/.test(e.key)) {
                e.preventDefault();
            }
        });
    }
}
