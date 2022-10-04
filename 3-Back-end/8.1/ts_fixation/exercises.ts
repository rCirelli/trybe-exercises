// ./exercises.ts

export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(bDiag: number, sDiag: number): number {
  return (bDiag * sDiag) / 2;
}

export function trapezoid(bBase:number, sBase:number, height:number):number {
  return ((bBase + sBase) * height) / 2;
}

export function circle(radius:number):number {
  const PI:number = 3.14;
  return (PI * (radius ** 2));
}

export function weekDays(value:string | number): string | number {
  enum DaysOfWeek {
    sunday = 1,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  };
  return DaysOfWeek[value];
}

export function rainbow(value:string): string {
  enum RainbowColors {
    red = 'vermelho',
    orange = 'laranja',
    yellow = 'amarelo',
    green = 'verde',
    cyan = 'ciano',
    indigo = 'anil',
    violet = 'violeta'
  };
  return RainbowColors[value];
}