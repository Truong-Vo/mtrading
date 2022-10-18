function loadPages(url, element) {
    req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);

    element.innerHTML += req.responseText;
}

loadPages('../../components/header/header-menu/header-menu.html', $('.header .container'));
loadPages('../../components/header/header-submenu/header-submenu.html', $('.header .container'));
loadPages('../../components/footer/footer.html', $('.footer'));
