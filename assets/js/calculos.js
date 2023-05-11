//informacion de ingresos del cliente
const containerIn = document.getElementById('cont-ingresos')
const ingresos = document.getElementById('ingresos')
const btnRegistroIn = document.getElementById('registro-in')
const btnContinuar = document.getElementById('regNgo')
const infoIn = document.getElementById('ingreso-registrado')
//informacion de los gastos del cliente
const containerE = document.getElementById('cont-egresos')
const egresos = document.getElementById('egresos')
const egresosTipo = document.getElementById('tipo-egreso')
const btnRegistroE = document.getElementById('registro-e')
const btnAnalisis = document.getElementById('analisis')
//iconos para tipos de gastos
let otros = "<box-icon name='dollar'></box-icon>"
let mercaderia = "<box-icon name='store'></box-icon>"
let medico = "<box-icon name='plus-medical'></box-icon>"
let transporte = "<box-icon name='bus' ></box-icon>"
let imprevisto = "<box-icon name='error' type='solid' ></box-icon>"
let lujos = "<box-icon name='crown' ></box-icon>"
//bariablea asuliares que ayudan con el registro de los mmontos de ingresos y egresos
let montoIn = 0
let montoE = 0
ingresos.addEventListener('change', ()=>{

})

btnRegistroIn.addEventListener('click', ()=>{
    if(true){
        montoIn += parseInt(ingresos.value) 
        infoIn.innerHTML = montoIn
        ingresos.value = ""

    }
})
btnContinuar.addEventListener('click',()=>{
    containerIn.classList.add('inactivo')
    containerE.classList.remove('inactivo')
})
