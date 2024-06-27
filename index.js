import './pre_styles.scss';

window.addEventListener("load", function() {
    const buttons = document.querySelectorAll("div.card_button");
    buttons.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            let str = event.currentTarget.parentElement.getElementsByClassName("card_label")[0].getElementsByTagName("span")[0].innerHTML;
            str = str.replace("<br> ", "\n");
            console.log(str);
        });
    });
});