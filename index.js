import './pre_styles.scss'

const cards = Array(3).fill(null);
const banks = ['img/alpha.svg', 'img/sber.svg', 'img/t_bank.svg', 'img/gazprombank.svg', 'img/vtb.svg'];

for (let i = 0; i < 3; i++) {
    const card_amount = Math.floor(Math.random()*7 + 1);
    const cards_slice = Array(card_amount);
    for (let j = 0; j < card_amount; j++) {
        const card = {
            id: Math.floor(Math.random()*100),
            name: 'Вклад ' + String(Math.floor(Math.random()*100)),
            logo: banks[Math.floor(Math.random()*banks.length)],
            rate: String(Math.floor(Math.random()*200+30)/10) + '%', // ставка
            period: String(Math.floor(Math.random()*335+30)) + ' дн.', // срок
            amount_min: String(100000) + ' ₽', // сумма
            amount_max: String(100000 * Math.floor(Math.random()*30)) + ' ₽',
            url: '1', // для кнопки
        }; 
        cards_slice[j] = card;
    }
    cards[i] = cards_slice;
}

window.addEventListener("load", function() {
    const divs = document.querySelectorAll('.cards');
    
    for (let i = 0; i < 3; i++) {
        const cards_slice = cards[i];
        const html = cards_slice.map((card) => 
            `<div class="card">
                <div class="card_label">
                    <img class="card_label-img" src="${card.logo}">
                    <span>${card.name}</span>
                </div>
                <div class="offer-param">
                    <div class="offer-param_text">Ставка, %</div>
                    <span class="offer-param_value offer-param_percent">от ${card.rate}</span>
                </div>
                <div class="offer-param">
                    <span class="offer-param_text">Срок</span>
                    <span class="offer-param_value">${card.period}</span>
                </div>
                <div class="offer-param">
                    <span class="offer-param_text">Сумма</span>
                    <span class="offer-param_value">${card.amount_min}—${card.amount_max}</span>
                </div>
                <div class="card_button">Открыть вклад</div>
            </div>`).join('\n');
        divs[i].innerHTML = html;
    }

    const buttons = document.querySelectorAll('.card_button');
    buttons.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            let str = event.currentTarget.parentElement.getElementsByClassName("card_label")[0].getElementsByTagName("span")[0].innerHTML;
            str = str.replace("<br> ", "\n");
            alert(str);
        });
    });

    const create_button = document.querySelectorAll('.offers_create-button');
    create_button.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            let str = event.currentTarget.parentElement.getElementsByClassName("cards")[0].innerHTML;
            const card = {
                id: Math.floor(Math.random()*100),
                name: 'Вклад ' + String(Math.floor(Math.random()*100)),
                logo: banks[Math.floor(Math.random()*banks.length)],
                rate: String(Math.floor(Math.random()*200+30)/10) + '%', // ставка
                period: String(Math.floor(Math.random()*335+30)) + ' дн.', // срок
                amount_min: String(100000) + ' ₽', // сумма
                amount_max: String(100000 * Math.floor(Math.random()*30)) + ' ₽',
                url: '1', // для кнопки
            }; 
            const html =
            `<div class="card">
                <div class="card_label">
                    <img class="card_label-img" src="${card.logo}">
                    <span>${card.name}</span>
                </div>
                <div class="offer-param">
                    <div class="offer-param_text">Ставка, %</div>
                    <span class="offer-param_value offer-param_percent">от ${card.rate}</span>
                </div>
                <div class="offer-param">
                    <span class="offer-param_text">Срок</span>
                    <span class="offer-param_value">${card.period}</span>
                </div>
                <div class="offer-param">
                    <span class="offer-param_text">Сумма</span>
                    <span class="offer-param_value">${card.amount_min}—${card.amount_max}</span>
                </div>
                <div class="card_button">Открыть вклад</div>
            </div>`;
            str += html;
            event.currentTarget.parentElement.getElementsByClassName("cards")[0].innerHTML = str;

            const buttons = document.querySelectorAll('.card_button');
            buttons.forEach(function(elem) {
                elem.addEventListener("click", function(event) {
                    let str = event.currentTarget.parentElement.getElementsByClassName("card_label")[0].getElementsByTagName("span")[0].innerHTML;
                    str = str.replace("<br> ", "\n");
                    alert(str);
                });
            });
        });
    });
});