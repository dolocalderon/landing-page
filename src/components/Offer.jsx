import React from 'react'
import Flecha_grande from '../assets/flecha-grande.svg'
import { motion } from 'framer-motion'
import { slideInLeft, slipeUp, zoomEffect } from '../utils/motion'
import Revista1 from '../assets/revista-acceso-01.png'
import Revista2 from '../assets/revista-acceso-02.png'

const Offer = () => {
  return (
    <div>
        <div className='flex justify-around'>
            <motion.div className="relative w-40 h-52"
            variants={zoomEffect(0.5)}
            initial="initial"
            animate="animate"
            exit="exit" > 
                <img className="absolute w-56 top-0 left-0" src={Revista1} alt="Revista hergo" />
                <img className="absolute w-56 top-0 left-41 -ml-10 opacity-90" src={Revista2} alt="Revista hergo" />
            </motion.div>

            <div className="flex items-center justify-center">
                {/* Flecha izquierda */}
                <motion.img className="w-16 mr-6" src={Flecha_grande} alt="Imagen de flecha" {...slideInLeft(0.5)} />

            {/* Contenedor de texto */}
                <motion.div className="flex flex-col text-center" {...slipeUp(0.5)}>
                    <h2 className="text-gray-500 text-xl">Revista de Ofertas #0925</h2>
                    <span className="text-gray-500">
                        Hacé click y descubrí lo sencillo
                        que es ahorrar con nosotros.
                    </span>
                    <a
                    className="text-blue-600 text-lg"
                    href="descargar_archivo.php?pdfs_id=309"
                    target="_blank"
                    >
                        Descargar PDF: 26/02/2025 al 05/03/2025
                    </a>
                </motion.div>

        {/* Flecha derecha */}
            <motion.img className="-scale-x-100 w-16 ml-6" src={Flecha_grande} alt="Imagen de flecha" {...slideInLeft(0.5)} />
            </div>
        </div>
        <p className='flex justify-end mt-6 mr-10 text-sm  '>
        Precios finales con IVA incluido. Ofertas y descuentos válidos sólo en nuestro salón de ventas de Ruta 88 y Magallanes. <br />
        Imágenes sólo ilustrativas. Prohibida la venta de alcohol a menores de 18 años.
        </p>
    </div>
  )
}

export default Offer
