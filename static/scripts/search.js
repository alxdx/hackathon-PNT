function loadResult() {
    (e || window.event).preventDefault();

    fetch("https://www.plataformadetransparencia.org.mx/web/guest/inicio")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("result").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}