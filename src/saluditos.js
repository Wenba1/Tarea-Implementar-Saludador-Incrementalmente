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
