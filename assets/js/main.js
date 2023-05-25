class Gasto {
  constructor(id, nombre, monto) {
    this.id = id;
    this.nombre = nombre;
    this.monto = parseInt(monto) ;
  }
}

class Finanza {
  constructor(presupuesto = 0) {
    this.presupuesto = presupuesto;
    this.gastos = [];
  }

  consultarSaldo() {
    return this.presupuesto - this.totalGastos();
  }

  totalGastos() {
    let totalGastos = 0;
    this.gastos.forEach((gasto) => {
      totalGastos += gasto.monto;
    });
    return totalGastos;
  }

  agregarGasto(gasto) {
    if ((this.presupuesto - this.totalGastos()) <= 0) {
      return false;
    } else {
      this.gastos.push(gasto);
      return true;
    } 
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id != id);
    return this.gastos;
  }
  agregarSaldo(ingreso) {
    this.presupuesto += parseInt(ingreso);
  }
}
let id = 0;
let cartera = new Finanza();

const manejarDetalleGastos = (lista) => {
  let filas = "";
  lista.gastos.forEach((gasto) => {
    filas += `
    <div>
      <p>${gasto.nombre}</p>
      <p>${gasto.monto}</p>
      <p><button onclick="eliminarGasto('${gasto.id}')">${basura}</button></p>
    </div>`;
  });
  return filas
};

btnRegistroSaldo.addEventListener("click", () => {
  cartera.agregarSaldo(ingresos.value);
  ingresos.value = "";
  infoIn.innerText = cartera.presupuesto;
  infoTotal.innerText = cartera.consultarSaldo()
});

btnRegistroGasto.addEventListener('click', ()=>{
  let respuesta = cartera.agregarGasto(new Gasto(`${id}`, gastoNombre.value, gastoMonto.value))
  if(respuesta){
    infoE.innerText = cartera.totalGastos()
    infoTotal.innerText = cartera.consultarSaldo()
    gastosDetallados = manejarDetalleGastos(cartera)
    detalle.innerHTML = gastosDetallados
  }else{
    console.log('Saldo insufuciente');
  };
  gastoNombre.value = ''
  gastoMonto.value = ''
  id+=1
})

 function eliminarGasto(id){
  let nuevoDetalle = cartera.eliminarGasto(id)
  detalle.innerHTML = manejarDetalleGastos(cartera)
  infoE.innerText = cartera.totalGastos()
  infoTotal.innerText = cartera.consultarSaldo()
 }