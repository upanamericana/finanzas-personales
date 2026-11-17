/* =========================================================
   CURSO · 
   ---------------------------------------------------------
   Cliente:   Posgrados Panamericana · Universidad Panamericana
   Insumo:    ../insumos/ (DI, figuras, medios, preguntas; ver insumos/LEEME.md)
   Preset visual: upanamericana  (ver instituciones/upanamericana/INSTITUCION.md)
   Versión template: hibrida

   Maqueta vacía (KIT-002): las pantallas de fuente/contenido/ traen la
   estructura y lo fijo de Posgrados Panamericana, y todo texto del curso
   es un hueco data-ova-hueco que se llena con el texto literal del DI.
   La foto de portada también es un hueco hasta que llegue la del curso.
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco): el que va sobre el sidebar verde hondo. En el tema «clara»
    // la skin lo cambia por la versión verde. El móvil/colapsado lleva el bloque apilado.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/up-logo-blanco.svg',
    logoMobile: 'assets/img/logos/up-marca-blanco.svg',
  },

  course: {
    code:             'SEMANA 1',   // KIT-015: etiqueta del menú y de la barra compacta, como la plantilla-base (decisión del arquitecto, 2026-11-17); encabezados y créditos siguen con «Cuaderno de aprendizaje 1»
    name:             'Finanzas personales: del sueldo al presupuesto',
    subtitle:         'Educación financiera para profesionales',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'upanamericana',
    pdf:              '',
    portadaFullBleed: true,
  },

  /* TEXTOS DE LA INTERFAZ · lo que el motor pinta fuera del contenido del curso. `voz` es el tratamiento
     (tú o usted) de los textos que escribe el motor, como los de Relacionar (KIT-016). Es la voz de
     instituciones/upanamericana/catalogo.json; tests/voz-curso.test.js avisa si se separan. */
  textos: {
    voz: 'tú',
  },

  /* MENÚ · la estructura RED (la misma de Scala Learning):
       - `tipo: 'especial'`  → secciones estructurales que tiene toda unidad
                               (inicio, contenido, introducción, conclusión,
                               evaluación, glosario, referencias, créditos). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado 1, 2, 3…
     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.up-seccion` con ese `id` (único en todo el curso). */
  menu: [
    { id: 'portada',      titulo: 'Inicio',                  tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',      titulo: 'Contenido',              tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion', titulo: 'Introducción',            tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: '¿Qué vas a lograr en esta unidad?', ancla: 'que-va-a-lograr' } ] },

    /* Los temas, sus títulos y las secciones de cada pantalla salen del DI (/ova-auditar-insumos
       y /ova-maquetar): «Tema 1» y «Tema 2» solo marcan el lugar. Cada tema lleva su identificador
       semanal en `rotulo` («S1», «S2»…): es lo que muestra el chip del menú (ronda del 2026-10-26). */
    { id: 'tema1',        titulo: 'A dónde se va tu dinero',                  tipo: 'tema', rotulo: 'S1',
      secciones: [ { titulo: "Ingresos, gastos fijos y gastos variables", ancla: 'tema1-1' },
                   { titulo: "Los gastos hormiga", ancla: 'tema1-2' } ] },
    { id: 'tema2',        titulo: 'Armar un presupuesto',                  tipo: 'tema', rotulo: 'S1',
      secciones: [ { titulo: "La regla 50/30/20", ancla: 'tema2-1' },
                   { titulo: "El presupuesto de Diego, paso a paso", ancla: 'tema2-2' } ] },
    { id: 'tema3',        titulo: 'Ahorro y deuda',                  tipo: 'tema', rotulo: 'S1',
      secciones: [ { titulo: "El fondo de emergencia", ancla: 'tema3-1' },
                   { titulo: "El costo real de un crédito y en qué orden pagar", ancla: 'tema3-2' } ] },

    /* Conclusión y Glosario: ocultos por defecto (decisión del 2026-10-10, la de la Unidad 3 de
       Scala). Sus pantallas siguen en contenido/; para mostrarlas, quita el // de su línea. */
    // { id: 'conclusion',   titulo: 'Conclusión',              tipo: 'especial', icon: 'mdi:flag-outline' },
    { id: 'evaluacion',   titulo: 'Evaluación',            tipo: 'especial', icon: 'mdi:clipboard-check-outline' },
    // { id: 'glosario',     titulo: 'Glosario',                tipo: 'especial', icon: 'mdi:book-open-variant-outline' },
    { id: 'referencias',  titulo: 'Referencias',             tipo: 'especial', icon: 'mdi:bookmark-outline' },
    /* Créditos: pantalla propia después de Referencias (KIT-018), con la sección «Créditos» del Word;
       agregada por orden del arquitecto el 2026-11-16. */
    { id: 'creditos',     titulo: 'Créditos',                tipo: 'especial', icon: 'mdi:account-group-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias. Estilo de la línea: autor y año sin
     negrilla, título de la obra en cursiva, URL en texto sin hipervínculo. */
  referencias: [],

  creditos: {
    institucion: 'Posgrados Panamericana · Universidad Panamericana',
  },
};
