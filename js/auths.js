const message = $('.auths-message');
const submit = $('.auths-submit');

$('.auths-tabs__login').onclick = function () {
    $('.auths-tabs__registration.active').classList.remove('active');
    $('.auths-form__registration').classList.remove('active');
    $('.auths-form__login').classList.add('active');
    this.classList.add('active');
};

$('.auths-tabs__registration').onclick = function () {
    $('.auths-tabs__login.active').classList.remove('active');
    $('.auths-form__registration').classList.add('active');
    $('.auths-form__login').classList.remove('active');
    this.classList.add('active');
};

const validateEmail = $('.auths-form__input[type=email]');

submit.onclick = function (e) {
    // e.preventDefault();
};

validateEmail.oninput = function (e) {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value.match(regex)) {
        message.innerText = 'Email is a required field';
    } else {
        message.innerText = '';
    }
};
