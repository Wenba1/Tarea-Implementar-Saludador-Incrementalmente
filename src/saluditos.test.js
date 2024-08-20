// src/index.test.js

import { saludar } from './index';

test('Saludar con "Hola"', () => {
    expect(saludar()).toBe("Hola");
});

test('Saludar por nombre', () => {
    expect(saludar("Carlos")).toBe("Hola, Carlos");
});

test('Saludar por nombre y género', () => {
    expect(saludar("Chayanne", "masculino")).toBe("Hola, Señor Chayanne");
    expect(saludar("Maria", "femenino")).toBe("Hola, Señora Maria");
});
test('Saludar por nombre, género y edad', () => {
    expect(saludar("Chayanne", "masculino", 55)).toBe("Hola, Señor Chayanne, Mayor");
    expect(saludar("Maria", "femenino", 30)).toBe("Hola, Señora Maria, Joven");
});
test('Saludar en español e inglés', () => {
    expect(saludar("Chayanne", "masculino", 55, 'es')).toBe("Hola, Señor Chayanne, Mayor");
    expect(saludar("Maria", "femenino", 30, 'en')).toBe("Hello, Mrs. Maria, Young");
});