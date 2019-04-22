'use strict';


let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let must = +prompt('Введите обязательную статью расходов в этом месяце');
let howMany = +prompt('Во сколько обойдется?');
let appData = {
    budget : money,
    timeData : time,
    expenses: {
        must : howMany
        },
    optionalExpenses : "",
    income : "",
    savings : false
};
let dayMoney = money / 30;
alert('Бюджет на 1 день: ' + dayMoney);


