function devolverUnString(palabra) {
    let num = /[bcdfghjklmnpqrstvwxyz]/i;
    let vocales= /[aeiou]/i;
    let copiaPalabra= palabra.split(num);
    let = valorDeRetorno=[];
    for (let i = 0; i < copiaPalabra.length; i++) {
        if (copiaPalabra[i] == vocales) {
            valorDeRetorno.push(palabra[i]);
        }
    }
console.log(copiaPalabra);
    
}
devolverUnString("liza cayo");