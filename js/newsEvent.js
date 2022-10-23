const list = $('.news-list');
const news = [
    {
        link: '',
        image: '../assets/images/Trade_Gold_Oil_and_BTC.2e16d0ba.fill-830x4151.jpg',
        author: 'Denis Sergienko',
        date: '2022-10-14',
        desc: 'Oil Is Up, Gold Is Down, BTC Is Struggling',
    },
    {
        link: '',
        image: '../assets/images/13_10_1.2e16d0ba.fill-830x4152.jpg',
        author: 'Denis Sergienko',
        date: '2022-10-13',
        desc: 'Binance Suspended Its Blockchain because of $570 Million Token Stolen',
    },
    {
        link: '',
        image: '../assets/images/News_Wrap_1310.2e16d0ba.fill-830x4153.jpg',
        author: 'MTrading Team',
        date: '2022-10-13',
        desc: 'Gold leads bears during pre-CPI trading lull',
    },
    {
        link: '',
        image: '../assets/images/12.10.2e16d0ba.fill-830x4154.jpg',
        author: 'MTrading Team',
        date: '2022-10-12',
        desc: 'USDJPY renews multi-year high even as US dollar struggles ahead of FOMC Minutes',
    },
    {
        link: '',
        image: '../assets/images/04.10_JqoFRCa.2e16d0ba.fill-830x415.jpg',
        author: 'MTrading Team',
        date: '2022-10-11',
        desc: 'GBPUSD fails to cheer upbeat UK jobs report, BOE’s move as risk aversion propels USD',
    },
    {
        link: '',
        image: '../assets/images/10_10.2e16d0ba.fill-830x4156.jpg',
        author: 'MTrading Team',
        date: '2022-10-10',
        desc: 'Risk-aversion joins hawkish Fed bets to drown AUDUSD',
    },
    {
        link: '',
        image: '../assets/images/0510.2.2e16d0ba.fill-830x4157.jpg',
        author: 'MTrading Team',
        date: '2022-10-07',
        desc: 'Pre-NFP caution underpins USD rebound, weighs on gold prices',
    },
    {
        link: '',
        image: '../assets/images/06_10.2e16d0ba.fill-830x4158.jpg',
        author: 'Denis Sergienko',
        date: '2022-10-06',
        desc: 'Wall Street Has the Highest Level of Fear',
    },
    {
        link: '',
        image: '../assets/images/0510.1.2e16d0ba.fill-830x4159.jpg',
        author: 'MTrading Team',
        date: '2022-10-06',
        desc: 'US dollar fades recovery amid sluggish markets',
    },
    {
        link: '',
        image: '../assets/images/05.10.2e16d0ba.fill-830x41510.jpg',
        author: 'Denis Sergienko',
        date: '2022-10-05',
        desc: 'The # 2 Swiss Bank Is in Deep Trouble',
    },
    {
        link: '',
        image: '../assets/images/05.10.2e16d0ba.fill-830x41511.jpg',
        author: 'MTrading Team',
        date: '2022-10-05',
        desc: 'Risk-on mood fades as traders brace for key data',
    },
    {
        link: '',
        image: '../assets/images/04.10_JqoFRCa.2e16d0ba.fill-830x415.jpg',
        author: 'Denis Sergienko',
        date: '2022-10-04',
        desc: 'MasterCard Will Launch the Crypto Secure App',
    },
];

function renderNews() {
    const items = news.map((item) => {
        return `
        <li class="news-item">
            <a href="#!">
                <img
                    src=${item.image}
                    alt=""
                    class="news-item__image"
                />

                <p class="news-item__author">
                    <span>${item.author}</span>
                    <span>${item.date}</span>
                </p>
                <p class="news-item__desc">${item.desc}</p>
            </a>
            </li>
        `;
    });
    list.innerHTML = items.join('');
}

renderNews();
