//captura de datos
    //ingresos
const containerIn = document.getElementById('cont-ingresos')
const ingresos = document.getElementById('ingresos')
    //gastos
const containerE = document.getElementById('cont-egresos')
const egresos = document.getElementById('egresos')
const egresosTipo = document.getElementById('tipo-egreso')
const egresosNombre = document.getElementById('nombre-egreso')
//botones
    //ingresos
const btnRegistroIn = document.getElementById('registro-in')
const btnContinuar = document.getElementById('regNgo')
    //gastos
const btnRegistroE = document.getElementById('registro-e')
const btnAnalisis = document.getElementById('analisis')
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
let seguimiento=[]
let id = 1

class DatoFinanciero{
    constructor(valor, tipo){
        this[tipo]=  parseInt(valor)
        this.valor = valor
    }
   insertar(){
    seguimiento.push(this)
   }
   leerYEscribir(){
    let totalIn = 0
    let totalE = 0
    seguimiento.map((i)=>{
        for(const llave in i){
            if(llave === 'ingresos'){
                return totalIn+= i[llave]
            }else if( llave === 'egresos'){
                return totalE += i[llave]
            }
        }
    })    
    infoIn.innerHTML= totalIn;
    infoE.innerHTML= totalE;
    infoTotal.innerHTML= totalIn-totalE

}
}

class Egreso extends DatoFinanciero{
    constructor(valor,tipo,nombre, icono, iconoBasura, id){
        super(valor, tipo)
        
        this.nombre= nombre
        this.icono= icono
        this.boton=iconoBasura
        this.id= id
    }
    insertar(){
        return super.insertar()
    }
    leerYEscribir(){
        return super.leerYEscribir()
    }
    elemento(){
        let componente= `<div class='componente_detalle'><span>${this.nombre}</span><span>${this.icono}</span> <span>${this.valor}</span> <button id="${this.id}">${this.boton}</button></div>`
        detalle.innerHTML += componente
        return componente
    }
    addevento(id){
        document.getElementById(`${id}`).addEventListener('click', ()=>{
            console.log('hola mundo');
        })
    }
}
//validacion de datos ingresados para descartar los no numericos y dar avisos
ingresos.addEventListener('change', ()=>{

})

btnRegistroIn.addEventListener('click', ()=>{
    let auxiliar = new DatoFinanciero(ingresos.value, ingresos.id )
    auxiliar.insertar()
    auxiliar.leerYEscribir()
    ingresos.value = ""
})
btnContinuar.addEventListener('click',()=>{
    containerIn.classList.add('inactivo')
    containerE.classList.remove('inactivo')
})

btnRegistroE.addEventListener('click', ()=> {
    let icono
    switch (egresosTipo.value) {
        case 'mercaderia':
            icono= mercaderia;
            break 
        case 'medico':
            icono= medico;
            break 
        case 'transporte':
            icono= transporte;
            break 
        case 'lujo':
            icono= lujo;
            break 
        case 'imprevisto':
            icono= imprevisto;
            break 
        default:
            icono=otros;
            break 
    }; 
    let auxiliar = new Egreso(egresos.value, egresos.id, egresosNombre.value, icono, basura, id)
    console.log(auxiliar);
    auxiliar.insertar()
    auxiliar.leerYEscribir()
    auxiliar.elemento()
    auxiliar.addevento(id)
    egresos.value = ""
    id+=1
})
