# Number to letters

**Convierte números a texto en formato para boletas y facturas electrónicas según la SUNAT Perú.**

Este paquete es una herramienta útil para convertir números a su representación textual. Ideal para aplicaciones que requieren formatos específicos en documentos como boletas y facturas.

> **Nota**: Este paquete se basa en el código original de [**efrenfuentes**](https://gist.github.com/efrenfuentes/3785655), pero esta version ha sido mejorado significativamente. Ahora incluye soporte para múltiples monedas, conversiones optimizadas y correcciones en el formato.  


## Funciones Disponibles
1. `numberToLetters()`

    Convierte un número a letras en su forma básica.

    **Ejemplo de Uso:**

    ```js
    const { numberToLetters } = require("number-to-letters-js");

    console.log(numberToLetters(120.0));  // Salida: ciento veinte  
    ```

1. `convertNumberLetters()`

    Convierte un número a letras con el formato requerido para boletas o facturas electrónicas. Esta función permite especificar el tipo de moneda mediante un código.


    **Ejemplo de Uso:**

    ```js
    const { convertNumberLetters } = require("number-to-letters-js");
    
    console.log(convertNumberLetters(120, "PEN"));  // Salida: CIENTO VEINTE SOLES Y 00/100 CÉNTIMOS   
    ```
    
## Códigos de Moneda Disponibles

| Codigo  | Moneda  |
|---------|---------|
| PEN | Sol Peruano  |
| USD | Dolar Estadounidense  |
| EUR | Euro  |

## Instalación

Agrega el paquete a tu proyecto usando npm:

```bash
npm i number-to-letters-js  
```

Agrega el paquete a tu proyecto usando yarn:

```bash
yarn add number-to-letters-js  
```

## Notas
- Asegúrate de usar el código de moneda correcto para evitar errores en el formato de salida.
- Este paquete es compatible con Node.js y es ideal para integrarlo en sistemas de facturación o gestión administrativa.