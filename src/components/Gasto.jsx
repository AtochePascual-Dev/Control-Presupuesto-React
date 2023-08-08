import IcoAhorro from '../img/icono_ahorro.svg';
import IcoCasa from '../img/icono_casa.svg';
import IcoComida from '../img/icono_comida.svg';
import IcoGastos from '../img/icono_gastos.svg';
import IcoOcio from '../img/icono_ocio.svg';
import IcoSalud from '../img/icono_salud.svg';
import IcoSuscripciones from '../img/icono_suscripciones.svg';
import { formatearCantidad, formatearFecha } from "../helpers";


const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, fecha, id } = gasto;

  const ICONOS = {
    ahorro: IcoAhorro,
    casa: IcoCasa,
    comida: IcoComida,
    gastos: IcoGastos,
    ocio: IcoOcio,
    salud: IcoSalud,
    suscripciones: IcoSuscripciones,
  }
  return (
    <div className="w-11/12 max-w-lg mx-auto mb-5 p-5 flex justify-between items-center gap-4 rounded-md shadow-md cursor-grab bg-white">
      <img
        src={ICONOS[categoria]}
        alt="Imagen gasto"
        className='block w-14'
      />
      <div className="w-full">
        <p className="font-bold text-gray-500">{categoria}</p>
        <p className="font-bold text-xl text-gray-600">{nombre}</p>
        <p className="font-bold text-gray-600"> Fecha: <span className="font-normal text-sm">{formatearFecha(fecha)}</span></p>
      </div>

      <p className="font-bold text-xl text-indigo-600">{formatearCantidad(cantidad)}</p>
    </div>
  )
}

export default Gasto