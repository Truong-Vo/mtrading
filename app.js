const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const languages = [
    {
        linkpage: 'https://mtrading.io/setlocale/id-ID',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/id.gif',
        language: 'Bahasa (Indonesia)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/in-EN',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/in.gif',
        language: 'English (India)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/es-ES',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/es.gif',
        language: 'Español (Latinoamérica)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/ru-RU',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/ru.gif',
        language: 'Русский (СНГ)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/vi-VN',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/vn.gif',
        language: 'Tiếng Việt (Việt Nam)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/th-TH',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/th.gif',
        language: 'ไทย (ประเทศไทย)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/zh-CN',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/cn.gif',
        language: '简体中文 (中国)',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/ms-MS',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/ms.gif',
        language: 'Malay',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/pt-PT',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/ms.gif',
        language: 'Portuguese',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/fil-PH',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/ph.gif',
        language: 'Filipino',
    },
    {
        linkpage: 'https://mtrading.io/setlocale/en-US',
        flag: 'https://mtr-cdn.com/img/mtweb/flags/en.gif',
        language: 'English (International)',
    },
];
const htmls = languages.map((language) => {
    return `
    <li class="header-language__item">
<a href="${language.linkpage}">
<img class="header-language__flag"src="${language.flag}" alt=""/>
<span class="header-language__label">${language.language}</span>
</a>
</li>
    `;
});
$('.header-language__list').innerHTML = htmls.join('');
