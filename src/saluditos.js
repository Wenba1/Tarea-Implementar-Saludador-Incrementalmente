export function saludar()
{
    return "Hola";
}
export function saludar(nombre)
{
    return 'Hola, $(nombre)'
}
export function saludar(nombre, genero){
    let saludo=genero =='masculino' ? 'Hola, Señor': 'Hola, Señora';
    return '$(saludo) $(nombre)';
}
export function saludar(nombre, genero, edad){
    let saludo= genero ==='masculino' ? 'señor': 'señora';
    let edadSaludo= edad >50 ? "Mayor":"Joven";
    return 'Hola, $(saludo) $(nombre), ${edadSaludo})';
}
export function saludar(nombre, genero, edad, idioma = 'es') {
    let saludo = '';
    if (idioma === 'es') {
        saludo = genero === 'masculino' ? 'Señor' : 'Señora';
    } else if (idioma === 'en') {
        saludo = genero === 'masculino' ? 'Mr.' : 'Mrs.';
    }

    let edadSaludo = idioma === 'es' ? (edad > 50 ? "Mayor" : "Joven") : (edad > 50 ? "Senior" : "Young");
    return idioma === 'es' 
        ? `Hola, ${saludo} ${nombre}, ${edadSaludo}`
        : `Hello, ${saludo} ${nombre}, ${edadSaludo}`;
}