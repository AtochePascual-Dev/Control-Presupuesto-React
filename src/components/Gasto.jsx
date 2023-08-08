import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import IcoAhorro from '../img/icono_ahorro.svg';
import IcoCasa from '../img/icono_casa.svg';
import IcoComida from '../img/icono_comida.svg';
import IcoGastos from '../img/icono_gastos.svg';
import IcoOcio from '../img/icono_ocio.svg';
import IcoSalud from '../img/icono_salud.svg';
import IcoSuscripciones from '../img/icono_suscripciones.svg';
import { formatearCantidad, formatearFecha } from "../helpers";


const Gasto = ({ gasto, gastos, setGastos }) => {
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

  const eliminarGasto = () => {
    const gastosActualizados = gastos.filter((gastoState) => gastoState.id !== id);
    setGastos(gastosActualizados);
  };

  const trailingActions = () => (
    <TrailingActions
      className='w-11/12 max-w-lg mx-auto  overflow-hidden text-white'
    >
      <SwipeAction
        destructive={true}
        onClick={() => eliminarGasto()}
        className="flex justify-center items-center font-bold text-white bg-rose-700"
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => console.info('swipe action triggered')}
        className="flex justify-center items-center font-bold text-white bg-indigo-600"
      >
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  return (
    <SwipeableList
      className='w-11/12 max-w-lg mx-auto overflow-hidden text-white'
    >
      <SwipeableListItem
        className='mb-5'
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="w-full max-w-lg mx-auto p-5 flex justify-between items-center gap-4 rounded-md shadow-md cursor-grab bg-white">
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto