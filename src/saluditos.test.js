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
