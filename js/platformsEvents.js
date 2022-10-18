const tabItems = $$('.platforms-downloads__tabs--item');
const tabselects = $$('.platforms-downloads__tabs--select');

tabItems.forEach((tabItem) => {
    tabItem.onclick = function () {
        $('.platforms-downloads__tabs--item.selected').classList.remove('selected');
        this.classList.add('selected');
        const firstTabItem = $('.platforms-downloads__tabs--item:first-of-type.selected');
        if (firstTabItem) {
            $('.platforms-downloads__tabs--select.selected').classList.remove('selected');
            $('.platforms-downloads__tabs--select:first-child').classList.add('selected');
            $('.platforms-downloads__tabs--version').style.display = 'flex';
            $('.platforms-downloads__tabs--custom').style.display = 'none';
        } else {
            $('.platforms-downloads__tabs--version').style.display = 'none';
            $('.platforms-downloads__tabs--custom').style.display = 'flex';
        }
    };
});
tabselects.forEach((tabselect) => {
    tabselect.onclick = function () {
        $('.platforms-downloads__tabs--select.selected').classList.remove('selected');
        this.classList.add('selected');
    };
});
