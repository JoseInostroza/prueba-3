//captura de datos
    //ingresos
const containerIn = document.getElementById('cont-ingresos')
const ingresos = document.getElementById('ingresos')
    //gastos
const containerE = document.getElementById('cont-egresos')
const egresos = document.getElementById('egresos')
const egresosNombre = document.getElementById('nombre-egreso')
//botones
    //ingresos
const btnRegistroIn = document.getElementById('registro-in')
    //gastos
const btnRegistroE = document.getElementById('registro-e')
//imprecion de datos simmple
const infoIn = document.getElementById('ingreso-registrado')
const infoE = document.getElementById('gasto-registrado')
const infoTotal = document.getElementById('total')
//seccion gatos detallados
const detalle = document.getElementById('detalle')

//iconos para tipos de gastos
let otros = "<box-icon name='dollar'></box-icon>"
let mercaderia = "<box-icon name='store'></box-icon>"
let medico = "<box-icon name='plus-medical'></box-icon>"
let transporte = "<box-icon name='bus' ></box-icon>"
let imprevisto = "<box-icon name='error' type='solid' ></box-icon>"
let lujo = "<box-icon name='crown' ></box-icon>"
let basura = "<box-icon name='trash' type='solid' ></box-icon>"
//variables axiliares que ayudan con el registro de los mmontos de ingresos y egresos
let listaIngresos = []
let listaGastos= []
let id = 1


class Dato {
    constructor(valor,tipo,nombre = '', iconoBasura = basura, id){
        this.valor= valor
        this.tipo= tipo
        this.nombre= nombre
        this.boton=iconoBasura
        this.id= id
    }
    elemento(){
        let componente= `<div class='componente_detalle'><p class='nombre_componente'>${this.nombre}</p> <span class='valor_componente'>${this.valor}</span> <button id="${this.id}">${this.boton}</button></div>`
        return componente
    }
    formatear(){
        if(this.tipo==='ingreos'){
            return{
                valor : this.valor,
                id : `i${this.id}`
            }
        }else{
            return {
                valor: this.valor,
                id: `g${this.id}`,
                icono: this.boton,
                nombre: this.nombre,
                elemento: this.elemento()
            }
        }
    }
    actualizarResumen(arreglo, item){
        let aux = 0
        arreglo.push(item)
        arreglo.forEach(i => {
            aux += parseInt(i['valor'])
        });
        return aux
    }
}
//validacion de datos ingresados para descartar los no numericos y dar avisos


//boton para agregar datos de ingresos
btnRegistroIn.addEventListener('click', ()=>{
    let aux = new Dato(ingresos.value, ingresos.id)
    let datoActual = aux.formatear()
    infoIn.innerText = aux.actualizarResumen(listaIngresos,datoActual)
    id+=1
})

btnRegistroE.addEventListener('click', ()=> {
    
})
