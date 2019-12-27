const objectOptions = {
    modelA: {
        name: 'model A',
        option: {
            0: {
                value: '---',
                price: [10,20,30]
            },
            1: {
                value: 'one',
                price: [40,50,60]
            },
            2: {
                value: 'two',
                price: [70,80,90]
            },

        }
    },
    modelB: {
        name: 'model B',
        option: {
            0: {
                value: '---',
                price: [10,20,30]
            },
            1: {
                value: 'one',
                price: [40,50,60]
            },
            2: {
                value: 'two',
                price: [70,80,90]
            },

        }
    },
    modelC: {
        name: 'model C',
        option: {
            0: {
                value: '---',
                price: [10,20,30]
            },
            1: {
                value: 'one',
                price: [40,50,60]
            },
            2: {
                value: 'two',
                price: [70,80,90]
            },

        }
    },
}

const optionsForm = {
    model: 'Model',
    option: 'Option',
    name: 'Value Name',
    price: 'Price'
}

const [ model, option, value ] = document.querySelectorAll( 'select' )

const objectKeys = ( object ) => Object.keys( object )
const initFormModels = ( object ) => objectKeys( object ).map( key => object[key].name )
const initFormOptions = ( object ) => objectKeys( object.option )
const initFormValueName = ( object ) => objectKeys( object ).map( key => object[key].value )

const writeHtmlSelect = ( arrayContent, selectHtml ) => arrayContent.map( ( content, index ) => {
    const createOption = document.createElement( 'option' )
    console.log(content, index, selectHtml)
    createOption.text = content
    selectHtml.appendChild(createOption)
    console.log(content, index, selectHtml)
} )

const valueSelectHtml = (selectHtml) => selectHtml.options[selectHtml.selectedIndex].value.replace(' ', '' )

writeHtmlSelect(initFormModels( objectOptions ), model)
writeHtmlSelect(initFormOptions( objectOptions[valueSelectHtml(model)] ), option)
writeHtmlSelect(initFormValueName( objectOptions[valueSelectHtml(model)].option), value )



console.log(objectKeys( objectOptions ))
console.log(initFormOptions( objectOptions.modelB ))
console.log(initFormValueName( objectOptions.modelB.option ) );

console.log(initFormModels(objectOptions))
console.log(objectOptions.modelB.option[2].price[1])
console.log(optionsForm);
console.log(model, option, value);