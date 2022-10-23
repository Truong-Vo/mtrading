const list = $('.marketInsight-list');
const margetInsight = [
    {
        link: '',
        image: '../assets/images/EURUSDH4-12102022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-10-12',
        desc: 'Technical Analysis: EURUSD braces for fresh yearly low ahead of key events/data',
    },
    {
        link: '',
        image: '../assets/images/GBPUSDH4.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-10-11',
        desc: 'Technical Analysis: GBPUSD braces for further downside, 1.0930-20 eyed immediately',
    },
    {
        link: '',
        image: '../assets/images/BRENTDaily-10102022.2e16d0ba.fill-830x415.png',
        author: 'MTrading Team',
        date: '2022-10-10',
        desc: 'Technical Analysis: Brent oil buyers need successful break of $100 to keep control',
    },
    {
        link: '',
        image: '../assets/images/GOLDDaily-07102022.2e16d0ba.fill-830x415.png',
        author: 'MTrading Team',
        date: '2022-10-07',
        desc: 'Technical Analysis: Gold sellers need validation from $1,685 and US NFP',
    },
    {
        link: '',
        image: '../assets/images/GBPUSDH4-06102022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-10-05',
        desc: 'Technical Analysis: NZDUSD struggles to justify RBNZ’s eighth rate hike',
    },
    {
        link: '',
        image: '../assets/images/AUDUSDH4-04102022.2e16d0ba.fill-830x415.png',
        author: 'MTrading Team',
        date: '2022-10-04',
        desc: 'Technical Analysis: AUDUSD drops towards 0.6500 on RBA’s smaller rate hike',
    },
    {
        link: '',
        image: '../assets/images/EURUSDH4-03102022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-10-03',
        desc: 'Technical Analysis: EURUSD rebound is at test near 0.9830 resistance',
    },
    {
        link: '',
        image: '../assets/images/GOLDH4-30092022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-09-30',
        desc: 'Technical Analysis: Gold consolidates monthly losses inside bearish channel',
    },
    {
        link: '',
        image: '../assets/images/AUDUSDDaily-29092022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-09-29',
        desc: 'Technical Analysis: AUDUSD bears again aim for sub-0.6400 area',
    },
    {
        link: '',
        image: '../assets/images/GOLDDaily-07102022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-10-05',
        desc: 'The # 2 Swiss Bank Is in Deep Trouble',
    },
    {
        link: '',
        image: '../assets/images/USDJPYDaily-28092022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-09-28',
        desc: 'USDJPY bulls are bracing for 147.00',
    },
    {
        link: '',
        image: '../assets/images/GBPUSDDaily-27092022.2e16d0ba.fill-830x415.png',
        author: 'Denis Sergienko',
        date: '2022-09-27',
        desc: 'Technical Analysis: GBPUSD stays on bear’s radar unless crossing 1.1280',
    },
];

function renderMargetInsight() {
    const items = margetInsight.map((item) => {
        return `
        <li class="marketInsight-item">
            <a href="#!">
                <img
                    src=${item.image}
                    alt=""
                    class="marketInsight-item__image"
                />

                <p class="marketInsight-item__author">
                    <span>${item.author}</span>
                    <span>${item.date}</span>
                </p>
                <p class="marketInsight-item__desc">${item.desc}</p>
            </a>
            </li>
        `;
    });
    list.innerHTML = items.join('');
}

renderMargetInsight();
