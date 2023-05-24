//captura de datos
    //ingresos
const ingresos = document.getElementById('ingresos')
    //gastos
const gastoMonto = document.getElementById('egresos')
const gastoNombre = document.getElementById('nombre-egreso')
//botones
    //ingresos
const btnRegistroSaldo = document.getElementById('registro-in')
    //gastos
const btnRegistroGasto = document.getElementById('registro-e')
//imprecion de datos simmple
const infoIn = document.getElementById('ingreso-registrado')
const infoE = document.getElementById('gasto-registrado')
const infoTotal = document.getElementById('total')
//seccion gatos detallados
const detalle = document.getElementById('detalle')

//iconos para tipos de gastos
const basura = "<box-icon name='trash' type='solid' ></box-icon>"
//variables axiliares que ayudan con el registro de los mmontos de ingresos y egresos

/*class Dato {
    constructor(valor,tipo,id, nombre = '', iconoBasura = basura ){
        this.valor= valor
        this.tipo= tipo
        this.nombre= nombre
        this.boton=iconoBasura
        this.id= id
    }
    elemento(){
        let componente= `<div class='componente_detalle'><p class='nombre_componente'>${this.nombre}</p> <span class='valor_componente'>${this.valor}</span> <button id="g${this.id}">${this.boton}</button></div>`
        return componente
    }
    formatear(){
        if(this.tipo==='ingresos'){
            return{
                valor : parseInt(this.valor),
                id : `i${this.id}`
            }
        }else{
            return {
                valor: parseInt(this.valor),
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
    let aux = new Dato(ingresos.value, ingresos.id, id)
    let datoActual = aux.formatear()
    infoIn.innerText = aux.actualizarResumen(listaIngresos,datoActual)
    infoTotal.innerText = total(listaIngresos,listaGastos)
    id+=1
})

btnRegistroE.addEventListener('click', ()=> {
    let aux = new Dato(egresos.value, egresos.id, id, egresosNombre.value)
    let datoActual = aux.formatear()
    infoE.innerText = aux.actualizarResumen(listaGastos,datoActual)
    infoTotal.innerText = total(listaIngresos,listaGastos)
    id+=1
    EscribirCargar(datoActual)
})
*/