# The Secret Friend Raffle - Alura Challenge

## Descripción

Este es un proyecto interactivo desarrollado en HTML, CSS y JavaScript que permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para elegir un "Amigo Secreto".

## Características

- Permite agregar nombres de amigos a una lista.
- Evita que un mismo nombre sea ingresado más de una vez.
- Permite eliminar la lista completa de amigos.
- Realiza el sorteo de un "Amigo Secreto" aleatoriamente.
- Interfaz responsiva para dispositivos móviles.

## Tecnologías Utilizadas

- HTML5
- CSS3 (incluyendo Media Queries para responsividad)
- JavaScript (DOM, eventos y manipulación de arrays)

## Instalación y Uso

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa nombres en el campo de texto y presiona "Add Friend" para agregarlos.
4. Presiona "Delete" para limpiar la lista.
5. Presiona "Raffle Friend" para realizar el sorteo.

## Estructura del Proyecto

```
/secret-friend-raffle
│-- assets/                # Contiene imágenes y logotipos
│-- styles.css             # Archivo de estilos
│-- scripts.js             # Lógica de la aplicación
│-- index.html             # Archivo principal
│-- README.md              # Documentación del proyecto
```

## Funcionalidades del Código

### `addList()`

- Agrega un nombre a la lista verificando que no se repita y que no esté vacío.

### `raffle()`

- Selecciona aleatoriamente un nombre de la lista y lo muestra como "Amigo Secreto".

### `renderHtml()`

- Renderiza la lista de amigos en la interfaz.

### `clear()`

- Limpia el campo de entrada y mantiene el foco en él.

### `deleteList()`

- Borra toda la lista de amigos y limpia la interfaz.

## Capturas de Pantalla

![image](https://github.com/user-attachments/assets/de64e705-24a1-4a09-9a17-d86b3f99e1ea)


## Autor

- **[Jose David Gonzalez]** - Desarrollo y documentación



