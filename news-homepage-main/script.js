function showMenu() {
    var menu = document.getElementById("m-dropdown");
    var overlay = document.getElementById("overlay");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "inline-block";
        overlay.style.display = "block";
    }
}

function hideMenu() {
    var menu = document.getElementById("m-dropdown");
    var overlay = document.getElementById("overlay");

    if (menu.style.display === "inline-block" || menu.style.display !== "") {
        menu.style.display = "none";
        overlay.style.display = "none";
    }
}