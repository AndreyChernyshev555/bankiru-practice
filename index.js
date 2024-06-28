import './pre_styles.scss'

const card_amount = Math.floor(Math.random()*7 + 1);
const cards = Array(card_amount).fill(null);
    
for (let i = 0; i < card_amount; i++) {
    const card = {
        id: Math.floor(Math.random()*100),
        name: 'Вклад ' + String(Math.floor(Math.random()*100)),
        logo: 'img/alpha.svg',
        rate: String(Math.floor(Math.random()*200+30)/10) + '%', // ставка
        period: String(Math.floor(Math.random()*335+30)) + ' дн.', // срок
        amount_min: String(100000) + ' ₽', // сумма
        amount_max: String(100000 * Math.floor(Math.random()*30)) + ' ₽',
        url: '1', // для кнопки
    }; 
    cards[i] = card;
}

window.addEventListener("load", function() {
    const divs = document.querySelectorAll('.cards');
    
    const html = cards.map((card) => 
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
    
    console.log(divs);
    divs[0].innerHTML = html;

    const buttons = document.querySelectorAll('.card_button');
    buttons.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            let str = event.currentTarget.parentElement.getElementsByClassName("card_label")[0].getElementsByTagName("span")[0].innerHTML;
            str = str.replace("<br> ", "\n");
            alert(str);
        });
    });
});