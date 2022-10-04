"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.rainbow = exports.weekDays = exports.circle = exports.trapezoid = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function diamond(bDiag, sDiag) {
    return (bDiag * sDiag) / 2;
}
exports.diamond = diamond;
function trapezoid(bBase, sBase, height) {
    return ((bBase + sBase) * height) / 2;
}
exports.trapezoid = trapezoid;
function circle(radius) {
    const PI = 3.14;
    return (PI * (radius ** 2));
}
exports.circle = circle;
function weekDays(value) {
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek[DaysOfWeek["sunday"] = 1] = "sunday";
        DaysOfWeek[DaysOfWeek["monday"] = 2] = "monday";
        DaysOfWeek[DaysOfWeek["tuesday"] = 3] = "tuesday";
        DaysOfWeek[DaysOfWeek["wednesday"] = 4] = "wednesday";
        DaysOfWeek[DaysOfWeek["thursday"] = 5] = "thursday";
        DaysOfWeek[DaysOfWeek["friday"] = 6] = "friday";
        DaysOfWeek[DaysOfWeek["saturday"] = 7] = "saturday";
    })(DaysOfWeek || (DaysOfWeek = {}));
    ;
    return DaysOfWeek[value];
}
exports.weekDays = weekDays;
function rainbow(value) {
    let RainbowColors;
    (function (RainbowColors) {
        RainbowColors["red"] = "vermelho";
        RainbowColors["orange"] = "laranja";
        RainbowColors["yellow"] = "amarelo";
        RainbowColors["green"] = "verde";
        RainbowColors["cyan"] = "ciano";
        RainbowColors["indigo"] = "anil";
        RainbowColors["violet"] = "violeta";
    })(RainbowColors || (RainbowColors = {}));
    ;
    return RainbowColors[value];
}
exports.rainbow = rainbow;
