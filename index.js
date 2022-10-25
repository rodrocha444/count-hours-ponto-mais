#!/usr/bin/env node

"use strict";
exports.__esModule = true;
var process_1 = require("process");
var _a = process.argv, node = _a[0], file = _a[1], hours = _a.slice(2);
if (hours.length % 2 != 0) {
    console.error("Deve ser passado um numero par de horas");
    (0, process_1.exit)();
}
var minutes = hours.map(function (hour) {
    var _a = hour.split(':'), hourPart = _a[0], minutePart = _a[1];
    return (parseInt(hourPart) * 60) + parseInt(minutePart);
});
var minutosTrabalhados = minutes.reduce(function (prev, curr, currIndex, array) {
    return currIndex % 2 != 0
        ? curr - array[currIndex - 1] + prev
        : prev;
}, 0);
var horasTrabalhadasFormatadas = "".concat(Math.floor(minutosTrabalhados / 60), "h").concat((minutosTrabalhados % 60));
console.log('Quantidade de horas trabalhadas: ', horasTrabalhadasFormatadas);
