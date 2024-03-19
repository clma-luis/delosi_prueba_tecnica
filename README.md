
# Prueba Técnica DELOSI


Este proyecto consiste en una vista en Next.js diseñada para rotar una matriz en sentido horario. La matriz se ingresa como un array de arrays de números, donde cada subarray representa una fila de la matriz. La aplicación devuelve la misma matriz pero rotada en sentido antihorario (90 grados). Cabe destacar que se le ha agregado un select para que el usuario pueda tomar la opcion mas adecuada de acuerdo a la longitud de la matriz:

Ejemplo de Uso

Ejemplo 1:
Input: [ [1,2], [3,4] ] - Output: [ [2,4], [1,3] ]

Ejemplo 2:
Input: [ [1,2,3], [4,5,6], [7,8,9] ] - Output: [ [3,6,9], [2,5,8], [1,4,7] ]

## Demo del proyecto
- https://delosi-prueba-tecnica-j6r83m4ly-clmaluis-projects.vercel.app/

## Instalación

Para instalar este proyecto, asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos:

1. Clona el repositorio desde: 
```bash
https://github.com/clma-luis/delosi_prueba_tecnica
```

2. En la terminal, navega hasta el directorio del proyecto.
3. Ejecuta npm install para instalar las dependencias.
```bash
npm install
```
4. Utiliza alguno de los siguientes comandos:
 - npm run dev para ejecutar el servidor de desarrollo.
```bash
npm run dev
```
- npm run build para compilar el proyecto.
```bash
npm run build
```
- npm start para iniciar el servidor en producción.
```bash
npm run start
```
- npm test para ejecutar las pruebas unitarias.
```bash
npm run test
```

## Herramientas utilizadas

**Next.js:** Framework de React para construir aplicaciones web, con soporte para server-side rendering y generación de páginas estáticas.

**React:** Biblioteca JavaScript para crear interfaces de usuario interactivas y dinámicas.

**Tailwind CSS:** Framework de CSS utility-first que ofrece clases predefinidas para estilizar componentes de manera rápida y coherente.

**Radix UI:** Colección de componentes de interfaz de usuario accesibles y modulares para React.

**Jest:** Framework de pruebas unitarias para JavaScript, utilizado para escribir y ejecutar pruebas automatizadas.

**React Testing Library:** Biblioteca para escribir pruebas de componentes de React centradas en el comportamiento del usuario.

**TypeScript:** Superconjunto tipado de JavaScript que compila a JavaScript puro, proporcionando tipos estáticos opcionales para mejorar la robustez y mantenibilidad del código.

**ESLint:** Herramienta de linting para identificar y corregir problemas en el código JavaScript/TypeScript, ayudando a mantener un estilo de código consistente y libre de errores.
