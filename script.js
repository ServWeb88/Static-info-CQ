// Ocultar el contenido hasta que la página se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("content").style.display = "none";
});

// Mostrar el contenido después de un tiempo determinado (2 segundos en este caso)
window.onload = function () {
    setTimeout(function () {
        document.getElementById("content").style.display = "block";
        document.getElementById("loader").style.display = "none";
    }, 2000);
};
