
import { saludar } from './saluditos';

test('Saludar con "Hola"', () => {
    expect(saludar()).toBe("Hola");
});
