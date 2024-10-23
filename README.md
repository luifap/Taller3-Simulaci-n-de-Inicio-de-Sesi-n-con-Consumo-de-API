# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Simulación de Inicio de Sesión con Consumo de API 👥

🎯El propósito de este repositorio es desarrollar una aplicación en React que simule el inicio de sesión de usuario y consuma una API externa. Además, la temática de la aplicación es libre (puede ser de recetas, libros, películas, productos, etc.), siempre y cuando cumpla con los requisitos de inicio de sesión, registro y consumo de API.😀

Páginas :
src/pages/Login.js: Página de inicio de sesión.
src/pages/Register.js: Página de registro de usuarios.
src/pages/Home.js: Página principal que se carga después de iniciar sesión.
src/pages/ApiResults.js: Página que muestra los resultados de la API consumida.

Organización de Rutas:
/login: Carga el componente Login.
/register: Carga el componente Register.
/home: Carga el componente Home (Solo accesible si el usuario está autenticado).
/results: Carga el componente ApiResults que muestra los datos consumidos desde la API (Solo accesible si el usuario está autenticado).
Ruta 404 para manejar páginas inexistentes.

⚠️IMPORTANTE:
En Login.js y Register.js, implementar formularios que actualicen el estado de autenticación con Redux.
Validar que el usuario esté autenticado para acceder a las rutas protegidas (/home, /results).
Asegúrense de usar una API accesible y sin restricciones de token o autenticación


Uso 💪
Esto es con uso especificamente para fines academicos. 

Construido con 🛠️
VBA - Es el lenguaje de macros de Microsoft Visual Basic que se utiliza para programar aplicaciones Windows.
JS - JavaScript
HTML
CSS
REACT



Versionado 💻
v-0.0.1

Autores ✒️
Yeraldin Yuseth Urbina - / Desarrolladora
Luisa Arboleda -/ Desarrolladora


Gracias por observar nuestro Proyecto 🤓.
Comentale a otros de este proyecto 📢.
No olvides dejar una estrellita 🌟.