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
            3:{
                value: 'three',
                price: [100,110,120]
            }

        }
    },
    modelB: {
        name: 'model B',
        option: {
            0: {
                value: '---',
                price: [11,21,31]
            },
            1: {
                value: 'one',
                price: [41,51,61]
            },
            2: {
                value: 'two',
                price: [71,81,91]
            },

        }
    },
    modelC: {
        name: 'model C',
        option: {
            0: {
                value: '---',
                price: [12,22,32]
            },
            1: {
                value: 'one',
                price: [42,52,62]
            },
            2: {
                value: 'two',
                price: [72,82,92]
            },

        }
    },
}

const optionsForm = {
    model: 'Model',
    option: 'Option',
    value: 'Value Name',
    price: 'Price'
}

const _divOptions = document.querySelector('.options')
const [ _model, _option ] = document.querySelectorAll( 'select' )
const _content = document.querySelector( '.content' )

const objectKeys = ( object ) => Object.keys( object )
const initFormModels = ( object ) => objectKeys( object ).map( key => object[key].name )
const initFormOptions = ( object ) => objectKeys( object.option )
const initFormValueName = ( object ) => objectKeys( object ).map( key => object[key].value )

const writeHtmlSelect = ( arrayContent, selectHtml ) => arrayContent.map( ( content, index ) => {
    const createOption = document.createElement( 'option' )
    createOption.text = content
    selectHtml.appendChild(createOption)
} )

const valueSelectHtml = (selectHtml) => selectHtml.options[selectHtml.selectedIndex].value.replace(' ', '' )

writeHtmlSelect(initFormModels( objectOptions ), _model)
writeHtmlSelect(initFormValueName( objectOptions[valueSelectHtml(_model)].option), _option )

const saveOptions = (model, option) =>{
    const contentObject = {}
    contentObject.model = model.selectedIndex
    contentObject.option = option.selectedIndex
    return contentObject
}

const getFormOptions = () => saveOptions( _model, _option )
const mergeObjectOption = ( oldObject, newObject ) => Object.assign( oldObject, newObject )

const printContent = ( object, searchObject, html ) => {
    const indexKeys =  Object.values(searchObject)
    let objectResult = 'object'
    
    indexKeys.forEach(( index, count )=> {
        if(count == 1) objectResult +='["option"]';
        const obj = Object.keys(eval(objectResult))[index]
        if(count < 2){
            objectResult += `[\'${obj}\']`
        }
    })
    
    html.innerHTML = eval(objectResult).price
    
    return 'Feito'
}

_divOptions.addEventListener('change', () => printContent(objectOptions, getFormOptions(), _content))