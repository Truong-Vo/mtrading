const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function loadPages(url, element) {
    req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);

    element.innerHTML += req.responseText;
}
