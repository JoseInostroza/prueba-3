class Gasto {
  constructor(id, nombre, monto) {
    this.id = id;
    this.nombre = nombre;
    this.monto = monto;
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
    if (this.presupuesto - gasto.monto < 0) {
      return "No hay saldo suficiente.";
    } else {
      this.gastos.push(gasto);
      return "Gasto ingresado correctamente";
    }
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id != id);
    return this.gastos;
  }
  agregarSaldo(ingreso) {
    this.presupuesto += ingreso;
  }
}
let id = 0;
let cartera = new Finanza();

const recargarDetalleGastos = (lista) => {
  let filas = "";

  lista.gastos.forEach((gasto) => {
    filas += `
    
            <div>
    
                <p>${gasto.nombre}</p>
    
                <p>${gasto.monto}</p>
    
                <p><button onclick="eliminarGasto('${gasto.id}')">${basura}</button></p>  
    
            </div>`;
  });
};

btnRegistroSaldo.addEventListener("click", () => {
  cartera.agregarSaldo(parseInt(ingresos.value));
  ingresos.value = "";
  infoIn.innerText = cartera.presupuesto;
  infoTotal.innerText = cartera.consultarSaldo()
});

btnRegistroGasto.addEventListener('click', ()=>{
  let respuesta = cartera.agregarGasto(new Gasto(`${id}`, gastoNombre.value, gastoMonto.value))
  console.log(respuesta);
  id+=1
})