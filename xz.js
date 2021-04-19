// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
// getDays( 2021 , 4)  //30
// getDays( 2021 , ‘April’)  //30

function getDays(year, month) {
    if (typeof year == 'undefined' || typeof month == 'undefined') {
        return 'error'
    }
    if (typeof year !== 'number' || year < 0 || month < 0) {
        return "year or month is not correct"
    }
    arrMonthes = [, 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    if (typeof month == 'string') {
        month = month.toLowerCase()
        var newMonth = 0
        for (var i = 1; i < arrMonthes.length; i++) {
            if (month == arrMonthes[i]) {
                newMonth += i
            }
        }
        if (newMonth == 0) {
            return 'try again'
        }
        var days = new Date(year, newMonth, 0).getDate()
        return days
    }
    else if (typeof month == 'number') {
        var days = new Date(year, month, 0).getDate()
        return days
    }
    else return 'error'
}

console.log(getDays(2011, 4))
console.log(getDays(2019, 2))
console.log(getDays(2019, 'apRil'))
console.log(getDays(2019, 'apRilis'))

// 2) Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное. 

Number.prototype.isOdd = function (number) {
    if (typeof number != "number") {
        return 'error';
    }
    if (number < 0) {
        number *= -1;
    }
    if (number % 2 == 1) {
        return true;
    }
    else return false;
}

// 3) Написать функцию every, которая будет принимать первым аргументом массив, а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false). Результатом функции должно быть логическое выражение true/false  в зависимости от того, выполняется ли условие для каждого из элементов.

function every(arr, func) {
    var countTrue = 0
    var countFalse = 0
    if (!Array.isArray(arr)) {
        return 'error'
    }
    if (typeof func != 'function') {
        return 'error'
    }
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i]) == true) {
            countTrue += 1
        }
        else countFalse += 1
    }
    if (countTrue == 0 || countFalse == 0) {
        return true
    }
    else return false
}

console.log(every([8, 2, 4], function (num) {
    return num % 2 === 0
}))

console.log(every([8, 35, 4], function (num) {
    return num % 2 === 0
}))

console.log(every('dhfjdfh', function (num) {
    return num % 2 === 0
}))
console.log(every([8, 35, 4], 7))

module.exports = { getDays, every }