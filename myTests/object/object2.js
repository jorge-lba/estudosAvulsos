const data = {
    option: 1,
    value: 2,
    test: 3
}

const data2 = {
    option: 1,
    value: 2,
    test: 3
}

console.log( 'Primeiro: ', data )

function functionOne( dataObjectD = data ) {
    const dataObject = { ...dataObjectD }
    
    console.log( 'Segundo: ', dataObject )

    dataObject.test = 1

    console.log( 'Terceiro:', dataObject )
}


functionOne()

console.log( 'Quarto: ', data )

// Após alguns teste, percebi que caso seja referenciada na função
// um objeto esterno e haja uma alteração em um valor. O objeto
// é alterado mesmo fora da função.
// Para contornar este funcinamento, temos que add o objeto em uma nova
// variavel, a forma que usei foi { ...objeto }