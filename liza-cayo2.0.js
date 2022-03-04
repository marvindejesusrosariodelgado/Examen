function devolverUnString(palabra) {
    let vocales= /[aeiou]/ig;
    let valorDeRetorno=palabra.match(vocales);
    console.log(valorDeRetorno);
    
}
devolverUnString("Edmoun");