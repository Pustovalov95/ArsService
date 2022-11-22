/* function findMaxNumber(...arguments) {
    let arr = Array.from(arguments);
    if (arr.length >= 4) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) === 'number' && arr[i] !== '0') {
                arr.sort(function (e, r) {
                    return e - r;
                });
                if (i == arr.length - 1) {
                    console.log(arr[i]);
                }
            } else {
                console.log('0');
                break;
            }
        }
    } else {
        console.log('0');
    }
    

} */
/* findMaxNumber(1, 5.5, 250, '0');


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        console.log('0');
    } else {
        console.log(Math.max(a, b ,c, d));
    }
}
findMaxNumber(1, 5.5, 250, '0'); */




/* function fib(a) {
    let fibi = [0];
    if (typeof(a) != 'string' && a != 0 && Number.isInteger(a)) {
        if (a >= 2) {
            fibi[1] = 1;
            for (let i = 2; i < a; i++) {
                fibi[i] = fibi[i-2] + fibi[i-1];
            }
            let strFibi = fibi.join(' ');
            console.log(strFibi);
        } else if (a == 1) {
            return '0'
        }
    } else if (a === 0 || typeof(a) == 'string') {
        console.log('');
    }
    
}
fib(7.1); */

/* 
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
function showProgrammingLangs(plan) {
    let lang = plan.skills.programmingLangs,
        str = ' ';
    for (let key in lang) {
        str =`Язык ${key} изучен на ${lang[key]}`;
        return str;
    }
}

showProgrammingLangs(personalPlanPeter); */

/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        let str = 'Семья состоит из: ' + arr.join(' ');
        return str;
    } else if (arr.length == 0) {
        return 'Семья пуста';
    }
    
}
showFamily(family); */
/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let value of arr) {
        console.log(value.toLowerCase());
    }
}
standardizeStrings(favoriteCities); */

/* const someString = 'This is some strange string';

function reverse(str) {
    const reverse = str.split('').reverse().join('');
    console.log(reverse);\
}

reverse(someString); */
/* 
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = 'Доступные валюты:',
        arrValue = '';
    for (let val of arr) {
        if (val !== missingCurr) {
            arrValue +=  `\n ${val}`;
            
        } else {
            continue;
        }
        
    }
    console.log(str + arrValue);
}
availableCurr(additionalCurrencies, 'CNY'); */