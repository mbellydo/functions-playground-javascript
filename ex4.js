/**
 * El ciclista 
 * 
 * Queremos implementar una función que calcule, en función de los kilómetros que el ciclista quiere recorrer, cuantos litros de agua necesita
 * 
 * Sabemos que para recorrer 1km, necesita 0.5 litros.
 * 
 * Implementa una función que devuelva un numero real con la cantidad de litros de agua que necesita el ciclista para recorrer 'km' kilómetros.
 */

 function agua_necesaria(km) {
    let agua = 0.5

    aguaKm = agua * km

    return aguaKm
 }
 let km = 5
 let agua = agua_necesaria(km)
 console.log(`Para recorrer ${km}km, el ciclista necesitaria 2.5 litros de agua: ` , agua)

 let km2 = 20
 let agua2 = agua_necesaria(km2)
 console.log(`Para recorrer ${km2}km, el ciclista necesitaria  litros de agua: ` , agua2)
