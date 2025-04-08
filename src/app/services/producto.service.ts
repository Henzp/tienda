// services/producto.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Por ahora usaremos datos mock, luego podrás reemplazarlos con una API
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Casco Integral',
      descripcion: 'Casco integral para máxima protección en moto',
      precio: 189990,
      imagenUrl: 'assets/casco.jpg',
      categoria: 'Cascos',
      destacado: true,
      sku: '111111',
      marca: 'CASCO'
    },
    {
      id: 2,
      nombre: 'Guantes de Cuero',
      descripcion: 'Guantes de cuero para protección y agarre',
      precio: 79990,
      imagenUrl: 'assets/guantes.jpg',
      categoria: 'Guantes',
      destacado: true,
      sku: '222222',
      marca: 'Marca'
    },
    
    {
      id: 3,
      nombre: 'Manillas ZETA',
      descripcion: 'Manillas',
      precio: 128900,
      imagenUrl: 'assets/accesorios/manillas_zeta.jpg',
      categoria: 'Accesorios',
      destacado: false,
      sku: 'ZS63-0221',
      marca: 'ZETA',
      descripcionLarga: 'Compatible : Ninja 650 / Z650/ Z900 2017 - VERSYS 650 2015 - ZX-25R 2021 - Yamaha R1 2015 - Yamaha R6 2017 - Yamaha MT09 2021 - Suzuki gsx-r 600/750/1000.\nUn conjunto de palancas para el freno/embrague PILOT LEVER específico para cada modelo. Retroalimentación del conocimiento técnico de la palanca de vuelo para aplicaciones generales de vehículos. Se puede plegar hacia arriba, hacia abajo y hacia adelante para reducir en gran medida los daños por caídas. Se proporciona un orificio de ventilación grande en la punta para liberar la presión del viento incluso a velocidades muy altas. La palanca corta es ideal para una operación de palanca fina durante la conducción deportiva. Equipado con un sistema de ajuste que permite un ajuste fino de la posición de la palanca (aprox. 20 formas). Se utiliza una aleación de aluminio de alta resistencia para el material, y se aplica un tratamiento superficial anodizado. \n• Plegable en dirección arriba/abajo Absorbe los impactos ascendentes y descendentes de las caídas moviéndose hacia arriba y hacia abajo mientras aplasta el punto de choque. Minimiza la rotura de la palanca. \n• Plegable en dirección hacia adelante Se mueve hacia adelante para absorber el impacto de una caída. Sistema automático de retorno de palanca con resorte incorporado. \n• Mecanizado CNC Para lograr un peso ligero y una excelente operatividad, toda la superficie se mecaniza a 360° con una máquina CNC de alta precisión. \n• Perilla de ajuste La posición de la palanca se puede ajustar con mayor precisión (alrededor de 20 formas) en comparación con la palanca original.'
    },
    
    {
     id: 4,
      nombre: 'Calienta Puños Oxford EVO',
      descripcion: 'Calienta puños con tecnología de termistor',
      precio: 132900,
      imagenUrl: 'assets/accesorios/oxfordevo.jpg',
      categoria: 'Accesorios',
      destacado: false,
      sku: 'MLC994026965',
      marca: 'Oxford',
      descripcionLarga: 'Los EVO HotGrips ™ son un avance tecnológico y aumentarán drásticamente el disfrute de la conducción invernal o en bajas temperaturas. EVO HotGrips ™ cuenta con tecnología de termistor en cada agarre, lo que les permite calentarse más rápido y luego regula automáticamente la temperatura exacta de la superficie de acuerdo con la temperatura que establezca en el controlador de calor. Por lo tanto, no importa cuál sea la temperatura ambiente, sus puños siempre estarán a la temperatura adecuada que desee, nunca demasiado calientes o demasiado fríos. Las partes internas de goma rediseñadas son más fáciles de colocar y más seguras que las empuñaduras térmicas convencionales. Los EVO-Touring HotGrips ™ tienen estructuras de superficie diseñadas ergonómicamente para optimizar el rendimiento de la conducción. Ideal para cruceros cómodos de larga distancia. Goma más gruesa en las áreas de máximo desgaste, dibujo en forma de rombo para la absorción de vibraciones, dibujo de la banda de rodadura con entalladuras en bloques de 5² para altos niveles de agarre y tacto, dibujo en forma de diamante donde se requiere el máximo agarre. Características clave • Escanea y mantiene la temperatura de manera inteligente • 5 configuraciones de calor • Memoria de configuración de calor inteligente • Conectores resistentes a la intemperie • Modo de ahorro de batería • Unidad de control rediseñada • Diseño resistente a la intemperie • Se adapta a manillares de 22 mm • Longitud ajustable Máx. 120 mm – Mín. 110 mm • Instalación sencilla • Se ajusta debajo 4A • Patrón optimizado de la banda de rodadura • Sellado de por vida Se incluyen todos los accesorios e instrucciones: – • 2 x HotGrips ™ • 1 x controlador inteligente • 1 x soporte de montaje y accesorios para el controlador de calor • 1 x mazo de cables, bridas y pegamento de agarre • 1 x folleto de instrucciones y formulario de garantía.',
      imagenesAdicionales: [
      'assets/accesorios/oxfordevo.jpg',
      'assets/accesorios/oxfordevo_detail1.jpg',
      'assets/accesorios/oxfordevo_detail2.jpg'
      ]
    },
    {
      id: 5,
      nombre: 'Aceite de Motor Power 1',
      descripcion: '10W 50',
      precio: 21900,
      imagenUrl: 'assets/Aceites/Castrol10w50.jpg',
      categoria: 'Lubricantes',
      destacado: false,
      sku: 'MLC998496228',
      marca: 'Castrol',
      descripcionLarga: 'Castrol POWER1 4T con tecnología Power Release ha sido formulado para motociclistas que disfrutan la emoción en la conducción. Castrol POWER 1 es un aceite sintético, de calidad Premium, formulado para motocicletas de 4 tiempos. Ha sido probado y comprobado para brindar una aceleración superior al giro del acelerador dado que fluye con rapidez y minimiza la fricción en el motor. Adicionalmente, la tecnología TRIZONE™ brinda una ventaja adicional asegurando protección sin reservas. La tecnología TRIZONE brinda protección a las tres zonas críticas de la motocicleta: motor, caja y embrague. Aceite Castrol Power 1 \n • Composición: 100% Sintético • Grado SAE: 10W50 • API: SL • JASO: MA2 • Motores: 4 Tiempos',
    },
    {
      id: 6,
      nombre: 'Contisport attack 120/70/zr17',
      descripcion: 'Neumático',
      precio: 132900,
      imagenUrl: 'assets/Neumaticos/continental/contisportattack_120-70zr-17.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: 'M02443990000',
      marca: 'Continental',
      descripcionLarga: 'Construcción de cintura de acero 0° que garantiza una extrema estabilidad a altas velocidades y optima absorción de impactos. • Buen control incluso en las fuertes frenadas en curva • Muy buenas prestaciones hasta en los máximos ángulos de inclinación • Rapidez de respuesta y agilidad incluso en los máximos angulos de inclinación. • Dibujo con un diseño “Radical” acorde con las nuevas deportivas del mercado.',
    },
    {
      id: 7,
      nombre: 'Contimotion 180/55/Zr17/W73',
      descripcion: 'Neumático',
      precio: 189900,
      imagenUrl: 'assets/Neumaticos/continental/contimotion_180-55-zr17w73.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: 'MLC1099294133',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.',
    },
    {
      id: 8,
      nombre: 'Contisportattack 180/55/Zr17/W73',
      descripcion: 'Neumático',
      precio: 188900,
      imagenUrl: 'assets/Neumaticos/continental/contisport-attack_180-55-zr17w73.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: 'MMLC1004828089',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.',
    },
    {
      id: 9,
      nombre: 'Contimotion 120/70/zr17 M/c W58',
      descripcion: 'Neumático',
      precio: 128900,
      imagenUrl: 'assets/Neumaticos/continental/contimotion_120-70zr17m-c58w.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: 'MLC18430200',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.'
    },
    {
      id: 10,
      nombre: 'GT 601 110/70/17',
      descripcion: 'Neumático',
      precio: 91900,
      imagenUrl: 'assets/Neumaticos/dunlop/dunlop_gt_601_110-70-17.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: '307339',
      marca: 'Dunlop',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.'
    },
    {
      id: 11,
      nombre: 'Contisportattack 190/55/Zr17/W75',
      descripcion: 'Neumatico',
      precio: 194900,
      imagenUrl: 'assets/Neumaticos/continental/Contisportattack190-55-Zr17-W75_1.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: '02443950000',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.',
      imagenesAdicionales: [
        'assets/Neumaticos/continental/Contisportattack190-55-Zr17-W75_1.jpg',
        'assets/Neumaticos/continental/Contisportattack190-55-Zr17-W75.jpg'
      ]
    },
    {id: 12,
      nombre: 'Contimotion 160/60/zr17/69w',
      descripcion: 'Neumatico',
      precio: 178900,
      imagenUrl: 'assets/Neumaticos/continental/Contimotion160-60zr-17-69w.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: '02443950000',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.',
          
    },
    {id: 13,
      nombre: 'Contimotion 140/70/zr17',
      descripcion: 'Neumatico',
      precio: 119900,
      imagenUrl: 'assets/Neumaticos/continental/ContinentalContimotion-140-70-Zr17.jpg',
      categoria: 'Neumáticos',
      destacado: false,
      sku: '18430200',
      marca: 'Continental',
      descripcionLarga: 'Conduce con la tranquilidad que te ofrece la tecnología sin cámara. Este neumático te proporciona una seguridad y estabilidad excepcionales en cada viaje. Su adherencia optimizada te garantiza un control preciso, y en caso de pinchazo, su diseño innovador sella la fuga, permitiéndote seguir tu camino con confianza. Ideal para quienes buscan aventuras sin preocupaciones.',
          
    },
    
    {
      id: 14,
      nombre: 'Kit de Pastillas de Freno Honda CBR 600-1000rr',
      descripcion: 'Pastillas de freno de alto rendimiento para motos deportivas',
      precio: 38900,
      imagenUrl: 'assets/repuestos/pastillas-freno.jpg',
      categoria: 'Repuestos',
      subcategoria: 'frenos',
      sku: 'MLC99330884',
      marca: 'Ferodo',
      descripcionLarga: 'Uso principal: CARRETERA. Certificación: TUV/KBA. ECE R-90. El compuesto de metal sinterizado FERODO ST tiene la mayor mordida y rendimiento de frenado de todos los materiales en la gama de pastillas de carretera Ferodo. Recomendado para motocicletas de baja a alta cilindrada (CC).'
    },
    {
      id: 15,
      nombre: 'Kit de Transmisión Sunstars Yamaha R6',
      descripcion: 'Kit de transmisión con cadena y piñones de alta resistencia',
      precio: 168900,
      imagenUrl: 'assets/Transmision/sunstar-1.jpg',
      categoria: 'Repuestos',
      subcategoria: 'transmision',
      sku: 'MLC8822477',
      marca: 'Sunstars',
      descripcionLarga: 'Sunstar es el mayor proveedor de OEM y posventa de piñones para motocicletas del mundo y ha fabricado piñones para todas las principales motocicletas en Japón, Europa y Estados Unidos desde 1946. Con una línea completa de productos que incluye piñones de repuesto de acero estándar de larga duración, funciona producto de carreras de aluminio , las ruedas dentadas del contra eje powerdrive y la exclusiva y ligera rueda dentada de acero inoxidable conocida como Works Z, sunstar pueden satisfacer todas y cada una de las necesidades de las ruedas dentadas.'
    },
    {
      id: 16,
      nombre: 'Kit Transmision Sunstars Honda cbr 600rr',
      descripcion: 'Kit de transmisión con cadena y piñones de alta resistencia',
      precio: 168900,
      imagenUrl: 'assets/Transmision/sunstar-1.jpg',
      categoria: 'Repuestos',
      subcategoria: 'transmision',
      sku: 'MLC8822477',
      marca: 'Sunstars',
      descripcionLarga: 'Sunstar es el mayor proveedor de OEM y posventa de piñones para motocicletas del mundo y ha fabricado piñones para todas las principales motocicletas en Japón, Europa y Estados Unidos desde 1946. Con una línea completa de productos que incluye piñones de repuesto de acero estándar de larga duración, funciona producto de carreras de aluminio , las ruedas dentadas del contra eje powerdrive y la exclusiva y ligera rueda dentada de acero inoxidable conocida como Works Z, sunstar pueden satisfacer todas y cada una de las necesidades de las ruedas dentadas.'
    },
    {
      id: 17,
      nombre: 'Kit Transmision Sunstars Suzuki GSX-R 1000 09-16',
      descripcion: 'Kit de transmisión con cadena y piñones de alta resistencia',
      precio: 168900,
      imagenUrl: 'assets/Transmision/sunstar-1.jpg',
      categoria: 'Repuestos',
      subcategoria: 'transmision',
      sku: 'MLC8822477',
      marca: 'Sunstars',
      descripcionLarga: 'Sunstar es el mayor proveedor de OEM y posventa de piñones para motocicletas del mundo y ha fabricado piñones para todas las principales motocicletas en Japón, Europa y Estados Unidos desde 1946. Con una línea completa de productos que incluye piñones de repuesto de acero estándar de larga duración, funciona producto de carreras de aluminio , las ruedas dentadas del contra eje powerdrive y la exclusiva y ligera rueda dentada de acero inoxidable conocida como Works Z, sunstar pueden satisfacer todas y cada una de las necesidades de las ruedas dentadas.'
    },
    {
      id: 18,
      nombre: 'Kit Transmision Sunstars Suzuki GSX-R 750 2011',
      descripcion: 'Kit de transmisión con cadena y piñones de alta resistencia',
      precio: 168900,
      imagenUrl: 'assets/Transmision/sunstar-1.jpg',
      categoria: 'Repuestos',
      subcategoria: 'transmision',
      sku: 'MLC8822477',
      marca: 'Sunstars',
      descripcionLarga: 'Sunstar es el mayor proveedor de OEM y posventa de piñones para motocicletas del mundo y ha fabricado piñones para todas las principales motocicletas en Japón, Europa y Estados Unidos desde 1946. Con una línea completa de productos que incluye piñones de repuesto de acero estándar de larga duración, funciona producto de carreras de aluminio , las ruedas dentadas del contra eje powerdrive y la exclusiva y ligera rueda dentada de acero inoxidable conocida como Works Z, sunstar pueden satisfacer todas y cada una de las necesidades de las ruedas dentadas.'
    },
    {
      id: 19,
      nombre: 'Filtro de Aceite Yamaha MT-07/MT-09',
      descripcion: 'Filtro de aceite para motores Yamaha serie MT',
      precio: 12900,
      imagenUrl: 'assets/repuestos/filtro-aceite.jpg',
      categoria: 'Repuestos',
      subcategoria: 'motor',
      sku: 'YAM-1D5-13440',
      marca: 'Yamaha',
      descripcionLarga: 'Filtro de aceite original Yamaha para modelos MT-07, MT-09 y otros con el mismo motor. Proporciona una filtración óptima para mantener el motor en perfectas condiciones y prolongar su vida útil.'
    },
    {
      id: 20,
      nombre: 'Bujías NGK Iridium Suzuki GSX-R',
      descripcion: 'Bujías de iridio para motores de alto rendimiento',
      precio: 15900,
      imagenUrl: 'assets/repuestos/bujias.jpg',
      categoria: 'Repuestos',
      subcategoria: 'motor',
      sku: 'NGK-CR9EIX',
      marca: 'NGK',
      descripcionLarga: 'Bujías de iridio NGK para motocicletas deportivas Suzuki GSX-R. Proporcionan un arranque más rápido, aceleración más suave y mayor economía de combustible. Mayor durabilidad que las bujías estándar.'
    },
    {
      id: 21,
      nombre: 'Kit de Embrague Completo Honda CBR 600RR',
      descripcion: 'Kit completo de embrague para Honda CBR 600RR',
      precio: 115900,
      imagenUrl: 'assets/repuestos/kit-embrague.jpg',
      categoria: 'Repuestos',
      subcategoria: 'transmision',
      sku: 'HC-06K82-MV9-305',
      marca: 'Honda',
      descripcionLarga: 'Kit completo de embrague original Honda para CBR 600RR. Incluye discos, separadores, resortes y placa de presión. Proporciona un rendimiento óptimo y durabilidad para uso tanto en calle como en pista.'
    }


  ];

  constructor() { }

  getProductos(): Observable<Producto[]> {
    return of(this.productos);
  }

  getProductoById(id: number): Observable<Producto | undefined> {
    const producto = this.productos.find(p => p.id === id);
    return of(producto);
  }

  getProductosDestacados(): Observable<Producto[]> {
    return of(this.productos.filter(producto => producto.destacado));
  }
  // Copia y pega este método en tu producto.service.ts justo antes del último corchete de cierre

buscarProductos(termino: string): Observable<Producto[]> {
  if (!termino || termino.trim() === '') {
    // Si no hay término de búsqueda, devuelve todos los productos
    return of(this.productos);
  }
  
  // Convierte el término a minúsculas para una búsqueda no sensible a mayúsculas
  const terminoLower = termino.toLowerCase();
  
  // Filtra productos que coincidan con el término en nombre, descripción o categoría
  const resultados = this.productos.filter(producto => 
    producto.nombre.toLowerCase().includes(terminoLower) ||
    producto.descripcion.toLowerCase().includes(terminoLower) ||
    producto.categoria.toLowerCase().includes(terminoLower)
  );
  
  return of(resultados);
}
}